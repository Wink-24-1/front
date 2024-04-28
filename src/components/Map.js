import { useState } from "react";

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
        <div>지도API</div>
      </div>
    </div>
  );
}

export default Map;
