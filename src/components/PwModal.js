import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";

function PwModal({ state, commentId, setShowModal, editValue }) {
  const [password, setPassword] = useState("");
  const { id } = useParams();
  const content = editValue;
  const data = {
    password: password, // 비밀번호
    content: content, // 사용자가 수정한 내용
  };
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

  async function UpdateData() {
    try {
      const response = await axios.patch(
        `https://seoulmate.kookm.in/api/event/${id}/comment/${commentId}`,
        data
      );
      window.location.reload();
      console.log(response.data);
      return response.data;
    } catch (error) {
      //수혁이가 해줌 짱 멋있다! 욕설 댓글 입력하면 error 띄우기
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      } else {
        alert("Error!", error);
      }
    }
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
          onClick={() => (state === 1 ? DeleteData() : UpdateData())}
        >
          {state === 1 ? "삭제" : "수정"}
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
