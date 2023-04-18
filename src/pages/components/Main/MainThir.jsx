import React from 'react';
import cooporation from '../../../assets/images/main-img.jpg';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import upArrow from '../../../assets/images/up-arrow.png';
import { Fade } from 'react-reveal';

const MyMainContainer = styled.div`
  position: relative;
  max-width: 1000px;
  height: 85vh;
  margin: 65px auto 0px auto;
`;

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MyImg = styled.img`
  background-size: cover;
  width: 600px;
  margin: 0px 0 0 50px;

  animation: ${fadeIn} 2.5s 4s ease-in-out;
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
  cursor: pointer;
  display: flex;

  position: absolute;
  top: 60px;
  left: 90px;

  &:hover > img,
  &:hover > div {
    filter: invert(47%) sepia(100%) saturate(6735%) hue-rotate(250deg)
      brightness(87%) contrast(92%);
  }
`;

const MyDivText = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.5rem;

  transition: 0.5s;
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
      <Fade bottom>
        <MyImg src={cooporation} alt="협업" />
      </Fade>
      <MyDiv>
        <MyTitle>
          <Fade top cascade>
            협업을 위한 최상의 선택!
          </Fade>
        </MyTitle>
        <MyP>
          <Fade top cascade>
            모든 팀이 밋노트로 협업해요
          </Fade>
        </MyP>
      </MyDiv>
      <MyContainer>
        <MyPLeft>업종, 인원, 팀 정보에 맞춰 1:1로 상담이 가능합니다</MyPLeft>
        <Link to="/">
          <MyBtn>
            <MyDivText>➡️ 1:1 상담 신청</MyDivText>
          </MyBtn>
        </Link>
      </MyContainer>
      <MyBackImg src={upArrow} />
    </MyMainContainer>
  );
}
