import { useState } from "react";
import PWCheckAPI from "../apis/CommentAPI";

function PwModal({ state, commentID }) {
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col border w-48 items-center pb-3">
      <div className="h-8 p-1 border-b w-full text-center">
        {state === 0 ? "댓글 수정" : state === 1 ? "댓글 삭제" : "잘못된 접근"}
      </div>
      <input
        className="border rounded m-4 w-40"
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="password"
      />
      <div>
        <button
          className="border rounded w-14 p-1 mr-4 bg-main-color text-sm"
          onClick={() => PWCheckAPI(state, commentID, password)}
        >
          확인
        </button>
        <button className="border rounded w-14 p-1 text-sm">취소</button>
      </div>
    </div>
  );
}
export default PwModal;
