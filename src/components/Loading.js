import Spinner from "../assets/spinner.gif";

function Loading() {
  return (
    <div className=" absolute w-full h-full bg-gray-200 flex flex-col items-center justify-center opacity-80 z-30">
      <div className="opacity-100">잠시만 기다려주세요...</div>
      <img src={Spinner} alt="로딩중" width="10%" className="opacity-100" />
    </div>
  );
}

export default Loading;
