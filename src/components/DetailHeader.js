import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrow from "../images/BackArrow.svg";

const DetailHeader = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [headerTitle, setHeaderTitle] = useState("클래식 연주회");
  return (
    <Container>
      <ArrowButton src={BackArrow} onClick={handleBack} />
      <Title>{headerTitle}</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  padding: 16px;
`;

const ArrowButton = styled.img`
  cursor: pointer;
`;

const Title = styled.div`
  margin: auto;
  color: #35414b;
  font-size: 15px;
  font-weight: 800;
`;
export default DetailHeader;
