import { useEffect, useState } from "react";
import DetailComponent from "../components/Detail";
import Map from "../components/Map";
import Weather from "../components/Weather";
import { useDispatch } from "react-redux";
import { changeMenuToHome } from "../store/store";
import ContentsMap from "../components/ContentsMap";
import ListAPI from "../apis/ListAPI";
import getParking from "../apis/MapAPI";

function MainPage({ contents }) {
  let dispatch = useDispatch();
  let [recommendData, setRecommendData] = useState();
  let [mainCategory, setMainCategory] = useState([]);
  let [nowCategory, setNowCategory] = useState();
  let [isLoading, setIsLoading] = useState(false);

  let [contentGPS, setContentGPS] = useState([
    {
      id: 548,
      name: "국민대 미래관",
      address: "서울특별시 성북구 정릉로 77 국민대학교 미래관",
      rule: "WINK 화이팅",
      latitude: "37.6100021",
      longitude: "126.9971053",
    },
  ]);
  const 주차장 = "🅿️ 주차장";
  const 유흥거리 = "🎬 문화생활";

  const StartCategory = [주차장, 유흥거리];
  const ParkingCategory = [
    "🚘 시간제",
    "🚘 거주자",
    "🚘 시간제+거주자",
    "🚍 버스전용",
    "🚘 시간제+버스전용",
    "🏍️ 이륜차",
  ];

  const axiosGetCategory = async (categoryName) => {
    try {
      let result;
      if (categoryName === 주차장) {
        ParkingCategory.unshift("⬅️");
        result = ParkingCategory;
      } else if (categoryName === 유흥거리) {
        result = await ListAPI.getList();
        result.unshift("⬅️");
      }
      setMainCategory(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const axiosGetContentsGPS = async (mainCategoryName, i) => {
    try {
      let result;
      setIsLoading(true);
      if (nowCategory === 주차장) {
        result = (await getParking(i + 1)).data;
      } else if (nowCategory === 유흥거리) {
        result = await ListAPI.getContentsList(mainCategoryName);
      }
      setIsLoading(false);

      setContentGPS(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(changeMenuToHome());
    setMainCategory(StartCategory);
  }, []);

  return (
    <div className="HomePage">
      <Weather />
      <div className="flex flex-row text-center py-4 overflow-x-auto">
        {mainCategory?.map((data, i) => {
          return (
            <div
              className="inline-block flex-shrink-0 border rounded-xl h-7 min-w-20 bg-main-color px-2 mx-2 text-sm place-content-center cursor-pointer"
              onClick={() => {
                if (data === 주차장 || data === 유흥거리) {
                  setNowCategory(data);
                  axiosGetCategory(data);
                } else if (data === "⬅️") {
                  setMainCategory(StartCategory);
                } else {
                  axiosGetContentsGPS(data, i);
                }
              }}
            >
              {data}
            </div>
          );
        })}
      </div>
      <div className="px-3">
        {nowCategory === 주차장 ? (
          <Map
            contentGPS={contentGPS}
            setRecommendData={setRecommendData}
            mainCategory={mainCategory}
            setMainCategory={setMainCategory}
          />
        ) : (
          <ContentsMap
            contentGPS={contentGPS}
            setRecommendData={setRecommendData}
            mainCategory={mainCategory}
            setMainCategory={setMainCategory}
          />
        )}
        {recommendData && <DetailComponent recommendData={recommendData} />}
      </div>
    </div>
  );
}
export default MainPage;
