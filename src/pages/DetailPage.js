import DetailHeader from "../components/DetailHeader";
import React, { useState } from "react";
import styled from "styled-components";
import ClassicImg from "../images/Image.svg";
import LinkImg from "../images/Home.svg";
import InputComment from "../components/InputComment";

const DetailPage = () => {
  const [img, setImg] = useState(ClassicImg);

  const [link, setLink] = useState(
    "https://illustrationkorea.co.kr/at/media/ill-gallery/"
  );
  const onClickButton = () => {
    window.location.href = link;
  };

  const [title, setTitle] = useState("클래식 연주회");
  const [startDate, setStartDate] = useState("2024.04.30");
  const [endDate, setEndDate] = useState("2024.04.31");
  const [place, setPlace] = useState("국민대 예술관 3층");
  const [price, setPrice] = useState("무료");
  const [target, setTarget] = useState("청소년만");

  return (
    <DetailContainer>
      <DetailHeader text="클래식 연주회" />
      <DetailWrapper>
        <DetailImg src={img} />
        <LinkButton onClick={onClickButton}>
          <LinkButtonText>예약 및 상세정보</LinkButtonText>
          <img src={LinkImg} alt="상세정보 링크 연결 버튼" />
        </LinkButton>
      </DetailWrapper>
      <DetailInfo>
        <LinkButtonText>{title}</LinkButtonText>
        시작일 : {startDate} <br />
        마감일 : {endDate} <br />
        장소 : {place} <br />
        가격 : {price} <br />
        대상 : {target}
      </DetailInfo>
      <InputComment />
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailWrapper = styled.div`
  display: flex;
  padding: 0px 27px;
  margin-top: 18px;
  gap: 25px;
  justify-content: space-between;
`;

const DetailImg = styled.img`
  width: 150px;
  border-radius: 16px;
`;

const LinkButton = styled.button`
  background-color: #fbe6e6;
  width: 150px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LinkButtonText = styled.div`
  color: #35414b;
  font-size: 17px;
  font-weight: 700;
`;

const DetailInfo = styled.div`
  border-radius: 8px;
  background: #fbe6e6;
  flex-shrink: 0;
  margin: 20px 27px;
  padding: 13px;
`;

export default DetailPage;
