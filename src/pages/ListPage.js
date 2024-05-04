import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeMenuToList } from "../store/store";
import ListBlock from "../components/ListBlock";
import ListAPI from "../apis/ListAPI";
import { useParams } from "react-router-dom";

function ListPage() {
  let dispatch = useDispatch();
  let [seoulList, setSeoulList] = useState([]);

  const axiosGetList = async () => {
    try {
      const result = await ListAPI.getList();
      setSeoulList(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(changeMenuToList());
    axiosGetList();
    console.log(seoulList);
  }, []);

  return (
    <div>
      <div className="flex gap-5 p-5 max-w-50 flex-wrap">
        {seoulList?.map((data) => {
          return <ListBlock category={data} title={data} />;
        })}
      </div>
    </div>
  );
}

export default ListPage;