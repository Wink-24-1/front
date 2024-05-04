import { useEffect, useState } from "react";
import getParking, { getMAPLocation } from "../apis/MapAPI";
import Loading from "./Loading";

const { kakao } = window;

function Map({ setRecommendData, contentGPS, setWeatherGPS }) {
  let [isLoading, setIsLoading] = useState(false);

  return (
    <div className="py-2">
      <div className="h-80 text-center place-content-center m-auto border">
        <KakaoMap
          setRecommendData={setRecommendData}
          contentGPS={contentGPS}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setWeatherGPS={setWeatherGPS}
        />
      </div>
    </div>
  );
}

//모바일로 접속 시 따로 설정해줘야되나봄~ 아직 안함
function KakaoMap({
  setRecommendData,
  contentGPS,
  isLoading,
  setIsLoading,
  setWeatherGPS,
}) {
  let [centerGPS, setCenterGPS] = useState({
    latitude: 37.6100021,
    longitude: 126.9971053,
  });

  function changeCenterGPS(lat, lng) {
    setCenterGPS((prevState) => ({
      ...prevState,
      latitude: lat,
      longitude: lng,
    }));
    setWeatherGPS({
      latitude: lat,
      longitude: lng,
    });
  }

  function printParkingPins(map) {
    contentGPS?.forEach((data) => {
      // 마커 생성
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(data.latitude, data.longitude),
        //마커에 hover시 나타날 title
        title: data.name,
      });

      var infowindow = new kakao.maps.InfoWindow({
        content: data.name, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
      kakao.maps.event.addListener(marker, "click", () =>
        setRecommendDataListener(data)
      );
    });

    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
    function setRecommendDataListener(data) {
      setRecommendData((prevState) => ({
        ...prevState,
        title: data.name,
        date: data.rule,
        place: data.address,
      }));
      changeCenterGPS(data.latitude, data.longitude);
    }
  }
  useEffect(() => {
    setIsLoading(true);
    getMAPLocation().then((data) => {
      setCenterGPS(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log(contentGPS);
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(centerGPS.latitude, centerGPS.longitude), //지도의 중심 좌표
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    printParkingPins(map);
  }, [printParkingPins, contentGPS]);

  return (
    <div>
      <div className="relative" style={{ width: "360px", height: "320px"}}>
        {isLoading && <Loading />}
        <div id="map" className="w-full h-full z-10"></div>
      </div>
    </div>
  );
}

export default Map;
