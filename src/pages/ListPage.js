import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeMenuToList } from "../store/store";

function ListPage() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeMenuToList());
  }, []);

  return (
    <div>
      <h1>List Page</h1>
    </div>
  );
}

export default ListPage;
