import styled from "styled-components";
import { useState } from "react";
import CommentButtonImg from "../images/CommentButton.svg";

const InputComment = () => {
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [comment, setComment] = useState("");
  const onChangeNameInput = (e) => {
    setName(e.target.value);
  };
  const onChangePwInput = (e) => {
    setPw(e.target.value);
  };
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <Container>
      <UserInfoWrapper>
        <UserInfoInput
          value={name}
          onChange={onChangeNameInput}
          placeholder="이름"
        />
        <UserInfoInput
          value={pw}
          onChange={onChangePwInput}
          placeholder="비밀번호"
        />
      </UserInfoWrapper>
      <CommentWrapper>
        <CommentInput
          value={comment}
          onChange={onChangeComment}
          placeholder="댓글을 입력해주세요"
        />
        <CommentButton>
          <img src={CommentButtonImg} alt="댓글 버튼" />
        </CommentButton>
      </CommentWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 125px;
  width: 330px;
  margin: auto;
`;

const UserInfoWrapper = styled.div`
  display: flex;
`;

const UserInfoInput = styled.input`
  width: 100px;
  height: 25px;
  border-radius: 5px;
  border: 2px solid #767676;
  margin-right: 8px;
  padding: 5px;
`;

const CommentWrapper = styled.div`
  position: relative;
`;

const CommentInput = styled.textarea`
  resize: none;
  margin-top: 10px;
  width: 330px;
  height: 65px;
  border-radius: 5px;
  border: 2px solid #767676;
  padding: 5px;
`;

const CommentButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 10px;
  width: 20px;
  height: 20px;
`;

export default InputComment;
