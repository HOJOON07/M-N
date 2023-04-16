import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import teamWork from '../../../assets/images/team-work.png';

// Color Variables
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';

//keyframes
const rotateAnim = keyframes`
to {
  transform: rotate(360deg);
}
`;

const MyMainContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 700px;

  position: relative;
`;

const MyBackImgContainer = styled.div`
  width: 100%;
  height: 700px;
  overflow: hidden;
  position: absolute;
`;

const MyBackImg = styled.div`
  position: absolute;
  top: 6vh;
  left: -30px;
  margin: 0 auto;
  padding: 20px;

  border-radius: 50%;
  background-color: ${brightSubColor};
  width: 550px;
  height: 550px;
  border: 10px solid rgba(163, 151, 198, 0.2);
  border-top: 15px solid rgba(163, 151, 198, 1);

  animation: ${rotateAnim} 12s linear 0s infinite;
`;

const MyBackImgSec = styled.div`
  position: absolute;
  top: 71vh;
  left: 347px;

  width: 320px;
  height: 320px;
  border-radius: 50%;
  background-color: ${brightSubColor};
  box-shadow: 3px 3px 5px #a4a4a474;

  opacity: 0.7;
`;

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
opacity: .9;
}
`;

const MyBackImgSecPlus = styled.img`
  position: absolute;
  top: 25vh;
  left: 48px;

  width: 450px;
  height: 450px;

  animation: ${fadeIn} 2.5s ease-in-out;
`;

const MyBackImgThr = styled.div`
  position: absolute;
  top: 27vh;
  right: -130px;

  width: 750px;
  height: 750px;
  border-radius: 50%;
  background-color: ${brightSubColor};

  z-index: -1;
`;

const MyDivContainer = styled.div`
  position: absolute;
  top: 140px;
  right: 15vw;
  max-width: 35vw;
`;

const MyH3 = styled.h3`
  font-size: 3.5rem;
  margin-bottom: 30px;
  line-height: 4.2rem;
  border-bottom: 4px solid ${hoverMainColor};
`;

const MyP = styled.p`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const MyFreeButton = styled.button`
  padding: 15px 40px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  background-color: ${mainColor};
  color: white;
  transition: 0.4s;
  &:hover {
    background-color: ${hoverMainColor};
  }
`;

export default function MainFir() {
  const isOpen = useRef(false);
  useEffect(() => {
    isOpen.current = true;
    console.log(isOpen.current);
  }, []);
  const navigation = useNavigate();
  return (
    <MyMainContainer>
      <MyBackImgContainer>
        <MyBackImgSec />
        <div>
          <MyBackImg />
          {isOpen ? <MyBackImgSecPlus src={teamWork} /> : null}
          {/* <MyBackImgRotate /> */}
        </div>

        <MyBackImgThr />
      </MyBackImgContainer>
      <MyDivContainer>
        <MyH3>MeetNotes로 스마트하게 프로젝트를 관리해보세요!</MyH3>
        <MyP>개발자가 개발에만 집중할 수 있도록</MyP>
        <MyFreeButton onClick={() => navigation('/signup')}>
          무료로 시작
        </MyFreeButton>
      </MyDivContainer>
    </MyMainContainer>
  );
}
