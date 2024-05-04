import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentButtonImg from "../images/CommentButton.svg";
import sendRequest from "../apis/CommentAPI";
import { AxiosError } from "axios";

const InputComment = ({ commentList, setCommentList }) => {
  const TodayDate = new Date();
  const { id } = useParams();
  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");
  const [comment, setComment] = useState("");
  const onChangeNameInput = (e) => {
    setNickname(e.target.value);
  };
  const onChangePwInput = (e) => {
    setPw(e.target.value);
  };
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  async function postCommentData() {
    try {
      const response = await sendRequest(
        "POST",
        `https://seoulmate.kookm.in/api/event/${id}/comment`,
        {
          name: nickname,
          password: pw,
          content: comment,
        }
      );
      // 성공적으로 POST 요청이 완료되었을 때 페이지를 새로고침
      window.location.reload();
      return response;
    } catch (error) {
      //수혁이가 해줌 짱 멋있다! 욕설 댓글 입력하면 error 띄우기
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      } else {
        alert("Error!", error);
      }
    }
  }

  useEffect(() => {
    console.log(commentList);
  }, [commentList]);

  return (
    <Container>
      <UserInfoWrapper>
        <UserInfoInput
          value={nickname}
          onChange={onChangeNameInput}
          placeholder="닉네임"
        />
        <UserInfoInput
          value={pw}
          onChange={onChangePwInput}
          placeholder="비밀번호"
          type="password"
        />
      </UserInfoWrapper>
      <CommentInputWrapper>
        <CommentInput
          value={comment}
          onChange={onChangeComment}
          placeholder="댓글을 입력해주세요"
        />
        <CommentButton
          onClick={() => {
            // addComment();
            postCommentData();
          }}
        >
          <img src={CommentButtonImg} alt="댓글 버튼" />
        </CommentButton>
      </CommentInputWrapper>
    </Container>
  );
};

const Container = styled.div`
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

const CommentInputWrapper = styled.div`
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
