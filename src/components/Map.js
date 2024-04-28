import { useEffect, useState } from "react";

const { kakao } = window;
function Map() {
  let [recommend, setRecommend] = useState([
    "농장",
    "교육",
    "산림여가",
    "전시/관람",
  ]);

  return (
    <div className="py-4">
      <div className="추천 flex flex-row text-center pb-5 overflow-x-auto">
        {recommend.map((data) => {
          return (
            <div className="border rounded-xl h-7 min-w-20 bg-main-color px-0.5 mx-2 text-sm place-content-center">
              {data}
            </div>
          );
        })}
      </div>
      <div className="지도 h-80 text-center place-content-center m-auto border">
        <KakaoMap />
      </div>
    </div>
  );
}

//모바일로 접속 시 따로 설정해줘야되나봄~ 아직 안함
function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.6100021, 126.9971053), //지도의 중심 좌표
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "360px", height: "320px" }}></div>
    </div>
  );
}

export default Map;
