import { useState } from "react";
import PWCheckAPI from "../apis/CommentAPI";
import axios from "axios";
import { useParams } from "react-router-dom";

function PwModal({ state, commentId, setShowModal }) {
  const [password, setPassword] = useState("");
  const { id } = useParams();
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  async function DeleteData() {
    const response = await axios.delete(
      `https://seoulmate.kookm.in/api/event/${id}/comment/${commentId}`,
      { data: { password: password } }
    );
    window.location.reload();
    console.log(response.data);
    return response.data;
  }

  return (
    <div className="flex flex-col border w-48 items-center pb-3 bg-white">
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
          onClick={() => DeleteData()}
        >
          확인
        </button>
        <button
          className="border rounded w-14 p-1 text-sm"
          onClick={() => setShowModal()}
        >
          취소
        </button>
      </div>
    </div>
  );
}
export default PwModal;
