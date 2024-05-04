import { React, useState } from "react";
import styled from "styled-components";
import Trash from "../images/delete.svg";
import Modify from "../images/modify.svg";
import Like from "../images/LikeButton.svg";
import axios from "axios";
import DeleteModal from "../components/PwModal";

const CommmentDesign = ({ commentId, username, comment, date }) => {
  const [pw, setPw] = useState("1111");
  const [showModal, setShowModal] = useState(false);
  const onChangePwInput = (e) => {
    setPw(e.target.value);
  };
  const handleDeleteClick = () => {
    setShowModal(true); // 모달 보이도록 설정
  };
  const handleCloseModal = () => {
    setShowModal(false);
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
        {comment}
        <RowContainer>
          <ClickButton
            onChange={onChangePwInput}
            onClick={handleDeleteClick}
            // onClick={() => DeleteData(id)}
          >
            <img src={Trash} />
            <Text>삭제</Text>
            {/* 수정 가능한 input 창 표시 & 선택된 댓글의 인덱스 설정 */}
            {/* <ClickButton onClick={handleClick}>
            <img src={Modify} />
        <Text>수정</Text> */}
          </ClickButton>
        </RowContainer>
      </CommentContainer>
      <ModalContainer>
        {showModal && (
          <DeleteModal
            state={1}
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export default CommmentDesign;
