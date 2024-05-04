import styled from "styled-components";
import { useEffect, useState } from "react";
import CommentButtonImg from "../images/CommentButton.svg";
import CommentDesign from "./CommentDesign";

const InputComment = () => {
  const TodayDate = new Date();
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(0);
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
  const [commentList, setCommentList] = useState([]);
  //댓글 추가
  const addComment = () => {
    //이름, 비번, 내용 다 비어있지 않았을 때 실행 가능하도록
    if (nickname !== "" && pw !== "" && comment !== "") {
      if (commentList.length > 0) {
        console.log("commentList : ", commentList);
        const lastCmtIndex = commentList.length - 1;
        const addedCmtId = commentList[lastCmtIndex].id + 1;
        const newComment = {
          id: addedCmtId,
          username: nickname,
          password: pw,
          content: comment,
          date: TodayDate.toLocaleDateString(),
        };
        setCommentList([...commentList, newComment]);
      } else {
        const newComment = {
          id: 1,
          username: nickname,
          password: pw,
          content: comment,
          date: TodayDate.toLocaleDateString(),
        };
        setCommentList([newComment]);
      }
      setComment("");
      setNickname("");
      setPw("");
    } else {
      alert("댓글을 마저 작성해주세요");
    }
  };
  useEffect(() => {
    console.log("commentList : ", commentList);
  }, [commentList]);

  //댓글 삭제
  const deleteComment = (id) => {
    setCommentList(commentList.filter((comment) => comment.id !== id));
  };

  //댓글 수정
  const editComment = (commentId, editValue) => {
    let newCommentList = commentList.map((item) => {
      if (item.id === commentId) {
        item.content = editValue;
      }
      return item;
    });
    setCommentList(newCommentList);
  };

  return (
    <Container>
      {commentList.map((comment) => {
        const commentId = comment.id;
        console.log("commentId : ", commentId);
        console.log("typeof(commentId) : ", typeof commentId);
        return (
          <CommentDesign
            id={comment.id}
            username={nickname}
            comment={comment}
            date={TodayDate.toLocaleDateString()}
            deleteComment={deleteComment}
            isEditing={selectedCommentIndex === commentId ? true : false}
            setSelectedCommentIndex={setSelectedCommentIndex}
            editComment={editComment}
          />
        );
      })}
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
        <CommentButton onClick={addComment}>
          <img src={CommentButtonImg} alt="댓글 버튼" />
        </CommentButton>
      </CommentInputWrapper>
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
