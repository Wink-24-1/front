import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col border-b h-20">
      <Link to="/" className="m-auto font-bold text-2xl">
        Seoul Mate
      </Link>
      <div className="flex text-center justify-between px-2 h-9 font-bold">
        <div className="w-5/12 bg-main-color rounded-xl h-7 place-content-center">
          <Link to="/">지도(홈)</Link>
        </div>
        <div className="w-5/12 h-7 place-content-center"> <Link to="/list">리스트</Link></div>
      </div>
    </header>
  );
}
export default Header;
