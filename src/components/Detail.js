import ssimage from "../images/logo512.png";

function DetailComponent() {
  return (
    <div className="border rounded-lg bg-main-color min-h-40 p-3">
      <div className="flex">
        <img
          src={ssimage}
          alt="'~~'의 예시 사진"
          className="w-4/12 h-24 rounded-xl"
        ></img>
        <div className="w-8/12 px-3">
          <div className="font-bold">전시제목</div>
          <div className="text-sm">전시날짜</div>
          <div className="text-sm">전시장소</div>
        </div>
      </div>
      <div className="max-h-11 truncate">
        전시 간략
        설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
      </div>
    </div>
  );
}
export default DetailComponent;
