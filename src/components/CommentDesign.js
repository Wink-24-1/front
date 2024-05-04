import { React, useState } from "react";
import styled from "styled-components";
import Trash from "../images/delete.svg";
import Modify from "../images/modify.svg";
import Like from "../images/LikeButton.svg";
import DeleteModal from "../components/PwModal";

const CommmentDesign = ({ commentId, username, comment, date }) => {
  const [pw, setPw] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalState, setModalState] = useState(null);
  const [editValue, setEditValue] = useState("");
  const onChangePwInput = (e) => {
    setPw(e.target.value);
  };
  const onChangeEditValue = (e) => {
    setEditValue(e.target.value);
  };
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditing(true); // 수정 모드로 전환
  };

  const handleConfirmEdit = () => {
    // 수정한 내용을 서버에 전송하는 등의 작업 수행
    handleClick(0);
    setIsEditing(false); // 수정 모드 종료
  };

  const editInput = (
    <div>
      <input
        type="text"
        value={editValue}
        onChange={onChangeEditValue}
        style={{
          border: "0.5px solid",
        }}
      />
      <button
        onClick={handleConfirmEdit}
        style={{
          border: "0.5px solid",
        }}
      >
        확인
      </button>
    </div>
  );
  const handleClick = (state) => {
    setShowModal(true); // 모달 보이도록 설정
    setModalState(state);
  };
  console.log("username : ", username);
  console.log("comment : ", comment);
  console.log("date", date);

  return (
    <Container>
      <LikeButton />
      <CommentContainer>
        <RowContainer>
          {/*사용자 닉네임 띄우기 */}
          <Nickname>{username}</Nickname>
          {/*사용자 날짜 띄우기 */}
          <DateText>{date}</DateText>
        </RowContainer>
        {isEditing ? editInput : comment}
        <RowContainer>
          <ClickButton
            onChange={onChangePwInput}
            onClick={() => handleClick(1)}
          >
            <img src={Trash} />
            <Text>삭제</Text>
          </ClickButton>
          {/* 수정 가능한 input 창 표시 & 선택된 댓글의 인덱스 설정 */}
          {/* <ClickButton onClick={() => handleClick(0)}> */}
          <ClickButton onClick={handleEditButtonClick}>
            <img src={Modify} />
            <Text>수정</Text>
          </ClickButton>
        </RowContainer>
      </CommentContainer>
      <ModalContainer>
        {showModal && (
          <DeleteModal
            editValue={editValue}
            state={modalState}
            commentId={commentId}
            setShowModal={setShowModal} // 모달 닫기 함수 전달
          />
        )}
      </ModalContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  margin-bottom: 15px;
  padding-bottom: 15px;
`;

const RowContainer = styled.div`
  display: flex;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.span`
  color: #1e2022;
  font-size: 14px;
  font-weight: 700;
  margin-right: 17px;
`;

const DateText = styled.span`
  color: #8b99a6;
  font-size: 14px;
  font-weight: 400;
`;

const Text = styled.button`
  color: #7b858e;
  font-size: 14px;
  font-weight: 400;
  margin-left: 5px;
  margin-right: 15px;
`;

const LikeButton = styled.button`
  background-image: url(${Like});
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

const ClickButton = styled.div`
  display: flex;
  cursor: pointer;
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export default CommmentDesign;
