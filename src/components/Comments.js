import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentDesign from "./CommentDesign";
import sendRequest from "../apis/CommentAPI";
import InputComment from "../components/InputComment";
import axios from "axios";

const Comments = () => {
  const [commentList, setCommentList] = useState([]);
  const { id } = useParams();

  async function getData() {
    const response = await axios.get(
      `https://seoulmate.kookm.in/api/event/${id}/comment`
    );
    setCommentList(response.data);
    console.log(response.data);
    return response.data;
  }

  useEffect(() => {
    getData();
    console.log(commentList);
  }, []);

  return (
    <Container>
      {commentList?.map((comment) => {
        return (
          <CommentDesign
            commentId={comment.id}
            username={comment.name}
            comment={comment.content}
            date={new Date(comment.createdAt).toLocaleDateString()}
          />
        );
      })}
      <InputComment commentList={commentList} setCommentList={setCommentList} />
    </Container>
  );
};

const Container = styled.div`
  width: 330px;
  margin: auto;
`;

export default Comments;
