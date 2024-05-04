import { useEffect, useState } from "react";
import DetailComponent from "../components/Detail";
import ListAPI from "../apis/ListAPI";
import { useNavigate, useParams } from "react-router-dom";

function CategoryListPage() {
  let { categoryName } = useParams();
  let [categoryDataList, setCategoryDataList] = useState([]);

  let [displayData, setDisplayData] = useState([]);
  let [endIndex, setEndIndex] = useState(20);
  let sortCategory = ["⬅️", "댓글순", "무료"];
  const itemsPerPage = 20;

  const navigate = useNavigate();

  function loadMoreData() {
    setEndIndex(endIndex + itemsPerPage);

    const newDataSlice = categoryDataList.slice(0, endIndex);
    setDisplayData(newDataSlice);
  }

  async function axiosGetDataList(변수1) {
    try {
      if (변수1 == 0) {
        //뒤로가기
        navigate("/list");
      } else if (변수1 == 1) {
        //댓글순
      } else if (변수1 == 2) {
        //무료
        let copy = [...categoryDataList];
        let filteredCopy = copy.filter((data) => data.price === null);
        setDisplayData(filteredCopy.slice(0, endIndex));
      } else {
        let result = await ListAPI.getContentsList(categoryName);
        setCategoryDataList(result);
        setDisplayData(result.slice(0, endIndex));
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    axiosGetDataList();
    loadMoreData(0);
  }, []);

  return (
    <div className="flex gap-5 p-5 max-w-50 flex-wrap">
      <div className="flex flex-row text-center py-1 overflow-x-auto">
        {sortCategory?.map((data, i) => {
          return (
            <div
              className="inline-block flex-shrink-0 border rounded-xl h-7 min-w-20 bg-main-color px-2 mx-2 text-sm place-content-center cursor-pointer"
              onClick={() => {
                axiosGetDataList(i);
              }}
            >
              {data}
            </div>
          );
        })}
      </div>
      {displayData?.map((data) => {
        return <DetailComponent recommendData={data} />;
      })}
      <div className="bg-main-color w-full flex place-content-center h-14">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 px-4 rounded"
          onClick={loadMoreData}
        >
          더보기
        </button>
      </div>
    </div>
  );
}

export default CategoryListPage;
