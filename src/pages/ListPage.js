import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeMenuToList } from "../store/store";
import ListBlock from "../components/ListBlock";
import getList from "../apis/ListAPI";

function ListPage() {
  let dispatch = useDispatch();
  let [seoulList, setSeoulList] = useState([]);

  useEffect(() => {
    dispatch(changeMenuToList());
    getList()
      .then((result) => {
        setSeoulList(result);
      })
      .catch((error) => {
        console.error(error);
      });
    setSeoulList();
    console.log(getList());
    console.log(seoulList);
  }, []);

  return (
    <div>
      <div className="flex gap-5 p-5 max-w-50 flex-wrap">
        {seoulList?.map((data) => {
          return (
            <ListBlock
              category={data.category}
              url={data.url}
              title={data.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListPage;
