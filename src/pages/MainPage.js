import { useEffect, useState } from "react";
import DetailComponent from "../components/Detail";
import Map from "../components/Map";
import Weather from "../components/Weather";
import { useDispatch } from "react-redux";
import { changeMenuToHome } from "../store/store";

function MainPage() {
  let dispatch = useDispatch();
  let [recommendData, setRecommendData] = useState({
    전시회사진: "url",
    전시제목: "",
    전시날짜: "",
    전시장소: "",
    전시설명: "",
  });

  useEffect(() => {
    dispatch(changeMenuToHome());
  }, []);

  return (
    <div className="HomePage">
      <Weather />
      <div className="px-3">
        <Map setRecommendData={setRecommendData} />
        {/* map에서 가져온 핀의 데이터를 */}
        <DetailComponent recommendData={recommendData} />
        {/* 여기다 집어넣으면 될듯? -> 그러려면 usestate 쓰면 될듯? */}
      </div>
    </div>
  );
}
export default MainPage;
