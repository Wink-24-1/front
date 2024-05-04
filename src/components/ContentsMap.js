import { useEffect, useState } from "react";
import getParking, { getMAPLocation } from "../apis/MapAPI";
import Loading from "./Loading";
import ListAPI from "../apis/ListAPI";

const { kakao } = window;

function ContentsMap({ setRecommendData, contentGPS }) {
  let [isLoading, setIsLoading] = useState(false);

  return (
    <div className="py-2">
      <div className="h-80 text-center place-content-center m-auto border">
        <KakaoMap
          setRecommendData={setRecommendData}
          contentGPS={contentGPS}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </div>
  );
}

//모바일로 접속 시 따로 설정해줘야되나봄~ 아직 안함
function KakaoMap({ setRecommendData, contentGPS, isLoading, setIsLoading }) {
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
  }

  function printPins(map) {
    contentGPS?.forEach((data) => {
      // 마커 생성
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(data.latitude, data.longitude),
        //마커에 hover시 나타날 title
        title: data.title,
      });

      var infowindow = new kakao.maps.InfoWindow({
        content: data.title, // 인포윈도우에 표시할 내용
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
    //Detail 컴포넌트에 들어갈 데이터를 설정해주는 함수
    function setRecommendDataListener(data) {
      setRecommendData((prevState) => ({
        ...prevState,
        id: data.id,
        category: data.category,
        image: data.image,
        title: data.title,
        start: data.start,
        end: data.end,
        place: data.place,
        url: data.url,
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
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(centerGPS.latitude, centerGPS.longitude), //지도의 중심 좌표
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    printPins(map);
  }, [printPins, contentGPS]);

  return (
    <div>
      <div className="relative" style={{ width: "360px", height: "320px" }}>
        {isLoading && <Loading />}
        <div id="map" className="w-full h-full"></div>
      </div>
    </div>
  );
}

export default ContentsMap;
