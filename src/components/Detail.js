import { Link } from "react-router-dom";
import ssimage from "../images/logo512.png";

function DetailComponent({ recommendData }) {
  return (
    <div className="border rounded-lg bg-main-color min-h-40 w-full p-3">
      <div className="flex mb-2">
        <img
          src={recommendData.image ? recommendData.image : ssimage}
          alt={`${recommendData.title} 사진`}
          className="w-4/12 h-24 rounded-xl"
          onClick={() => {
            console.log(recommendData);
          }}
        ></img>
        <div className="w-8/12 px-3">
          <Link
            to={`/detail/${recommendData.id}`}
            className="font-bold"
            onClick={() => {
              console.log(recommendData);
            }}
          >
            {recommendData.title ? recommendData.title : "잠시만 기다려주세요"}
          </Link>
          <div className="text-sm">
            {recommendData.start
              ? `${recommendData.start.substring(0,10)} ~ ${recommendData.end.substring(0, 10)}`
              : "잠시만 기다려주세요"}
          </div>
          <div className="text-sm">
            {recommendData.place ? recommendData.place : "Loading..."}
          </div>
        </div>
      </div>
      <Link
        className="max-h-11 max-w-96  mt-7 truncate ellipsis"
        to={`/detail/${recommendData.id}`}
      >
        {"상세정보 보기"}
      </Link>
    </div>
  );
}
export default DetailComponent;
