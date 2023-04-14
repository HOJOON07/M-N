import React from 'react';
import cooporation from '../../../assets/images/main-img.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/images/arrowButton.png';
import upArrow from '../../../assets/images/up-arrow.png';

const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';

const MyMainContainer = styled.div`
  position: relative;
  max-width: 1000px;
  height: 85vh;
  margin: 65px auto 0px auto;
`;

const MyImg = styled.img`
  background-size: cover;
  width: 600px;
  margin: 0px 0 0 50px;
`;

const MyDiv = styled.div`
  position: absolute;
  top: 12vh;
  right: 5vw;
`;

const MyTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: right;
`;

const MyP = styled.p`
  font-size: 1.5rem;
  margin-top: 15px;
  text-align: right;
`;

const MyContainer = styled.div`
  position: relative;
`;

const MyPLeft = styled.p`
  font-size: 1rem;
  margin-left: 5vw;
  position: absolute;
  top: 25px;
  left: 15px;
`;

const MyBtn = styled.button`
  border: none;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;
  display: flex;

  position: absolute;
  top: 60px;
  left: 70px;

  &:hover > img,
  &:hover > div {
    filter: invert(47%) sepia(100%) saturate(6735%) hue-rotate(250deg)
      brightness(87%) contrast(92%);
  }
`;

const MyImgBtn = styled.img`
  display: block;
  margin: 0 5px 3px 0;
  width: 40px;
  transition: 0.5s;
`;

const MyDivText = styled.div`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  transition: 0.5s;
  text-decoration: underline;
`;

const MyBackImg = styled.img`
  position: absolute;
  bottom: 85px;
  width: 350px;
  right: 145px;
  opacity: 0.8;

  filter: invert(86%) sepia(118%) saturate(1363%) hue-rotate(186deg)
    brightness(117%) contrast(97%);
`;

export default function MainThir() {
  return (
    <MyMainContainer>
      <MyImg src={cooporation} alt="협업" />
      <MyDiv>
        <MyTitle>협업을 위한 최상의 선택!</MyTitle>
        <MyP>모든 팀이 밋노트로 협업해요</MyP>
      </MyDiv>
      <MyContainer>
        <MyPLeft>업종, 인원, 팀 정보에 맞춰 1:1로 상담이 가능합니다</MyPLeft>
        <Link to="/">
          <MyBtn>
            <MyImgBtn src={arrow} />
            <MyDivText>1:1 상담 신청</MyDivText>
          </MyBtn>
        </Link>
      </MyContainer>
      <MyBackImg src={upArrow} />
    </MyMainContainer>
  );
}
