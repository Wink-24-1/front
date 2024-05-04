import { React, useState } from "react";
import styled from "styled-components";
import Trash from "../images/delete.svg";
import Modify from "../images/modify.svg";
import Like from "../images/LikeButton.svg";
// import DeleteModal from "../components/PwModal";

const CommmentDesign = ({ id, username, comment, date }) => {
  const onChangeEditValue = (e) => {
    setEditValue(e.target.value);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const onCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const onClickDeleteButton = () => {
    console.log("id : ", id);
    // deleteComment(id);
    setShowDeleteModal(true);
  };
  const [editValue, setEditValue] = useState(comment);
  const handleEditInput = () => {
    // editComment(id, editValue);
    // setSelectedCommentIndex(0); //선택된 댓글의 인덱스 초기화
  };
  const handleClick = () => {
    if (1) {
      handleEditInput();
    } else {
      // setSelectedCommentIndex(id);
    }
  };
  //수정 버튼 눌렀을 때 새로 수정할 내용 입력할 창이 뜨도록
  const editInput = (
    <input type="text" value={editValue} onChange={onChangeEditValue} /> //JSX 요소 담고 있는 변수
  );
  console.log("id : ", id);
  console.log("username : ", username);
  console.log("comment : ", comment);
  console.log("date", date);
  // console.log("isEditing", isEditing);
  //댓글 삭제
  // const deleteComment = (id) => {
  //   setCommentList(commentList.filter((comment) => comment.id !== id));
  // };

  // //댓글 수정
  // const editComment = (commentId, editValue) => {
  //   let newCommentList = commentList.map((item) => {
  //     if (item.id === commentId) {
  //       item.comment = editValue;
  //     }
  //     return item;
  //   });
  //   setCommentList(newCommentList);
  // };
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
          {/* {showDeleteModal && (
            <DeleteModal
              state={1}
              commentID={id}
              onClose={onCloseDeleteModal}
            />
          )} */}
          <ClickButton onClick={() => onClickDeleteButton(id)}>
            {/* <ClickButton onClick={onClickDeleteButton}> */}
            <img src={Trash} />
            <Text>삭제</Text>
          </ClickButton>
          {/* 수정 가능한 input 창 표시 & 선택된 댓글의 인덱스 설정 */}
          <ClickButton onClick={handleClick}>
            <img src={Modify} />
            <Text>수정</Text>
          </ClickButton>
        </RowContainer>
      </CommentContainer>
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

export default CommmentDesign;
