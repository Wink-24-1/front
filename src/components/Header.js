import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeMenuToList, changeMenuToHome } from "../store/store.js";

function Header() {
  let state = useSelector((state) => {
    return state;
  });

  return (
    <header className="flex flex-col border-b h-20">
      <Link to="/" className="m-auto font-bold text-2xl">
        Seoul Mate
      </Link>
      <div className="flex text-center justify-between px-5 h-9 font-bold">
        <div
          className={`${
            state.menuState.menu === "home" ? "bg-main-color" : ""
          } w-5/12 rounded-xl h-7 place-content-center`}
        >
          <Link to="/">지도(홈)</Link>
        </div>
        <div
          className={`${
            state.menuState.menu === "list" ? "bg-main-color" : ""
          } w-5/12 rounded-xl h-7 place-content-center`}
          onClick={() => changeMenuToList()}
        >
          <Link to="/list">리스트</Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
