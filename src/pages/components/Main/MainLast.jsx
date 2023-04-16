import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import chat from '../../../assets/images/chat-icon.png';
import group from '../../../assets/images/group-icon.png';
import mail from '../../../assets/images/mail-icon.png';
import memo from '../../../assets/images/memo-icon.png';
import qna from '../../../assets/images/qna-icon.png';
import write from '../../../assets/images/write-icon.png';
import { keyframes } from 'styled-components';

const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';

const MyButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  width: 115px;
  padding: 13px 20px;
  background-color: ${mainColor};
  border: none;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.4s;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);

  &:hover {
    background-color: ${hoverMainColor};
  }
`;

const MyContainer = styled.div`
  width: 100vw;
  height: 150px;
  background-color: ${brightSubColor};
  position: relative;
`;

const MyP = styled.p`
  text-align: center;
  padding-top: 40px;
  font-size: 1rem;
  font-weight: 700;
`;

const duration = '2.6s';
const delay = '0.2s';
const delay2 = '0.4s';
const upDown = keyframes`
0% {
  transform: translateY(-8px);
}
50% {
  transform: translateY(6px);
}
100% {
  transform: translateY(-8px);
}

`;

const MyIconContainer = styled.div`
  position: relative;

  & > img {
    display: block;
    position: absolute;
    width: 50px;
  }
`;

const MyIcon1 = styled.img`
  top: 5px;
  left: 414px;

  animation: ${upDown} ${duration} ${delay2} ease-in-out infinite;
`;
const MyIcon2 = styled.img`
  top: -20px;
  left: 330px;

  animation: ${upDown} ${duration} ${delay} ease-in infinite;
`;
const MyIcon3 = styled.img`
  top: 3px;
  left: 490px;

  animation: ${upDown} ${duration} ease-out infinite;
`;
const MyIcon4 = styled.img`
  top: -25px;
  right: 405px;

  animation: ${upDown} ${duration} ease-in-out infinite;
`;
const MyIcon5 = styled.img`
  top: 0px;
  right: 302px;

  animation: ${upDown} ${duration} ${delay} ease-out infinite;
`;
const MyIcon6 = styled.img`
  top: 9px;
  right: 502px;

  animation: ${upDown} ${duration} ${delay2} ease-in infinite;
`;

export default function MainLast() {
  const navigation = useNavigate();

  return (
    <MyContainer>
      <MyP>무료로 MeetNotes 사용해 보기</MyP>
      <MyButton onClick={() => navigation('/signup')}>무료 체험</MyButton>
      <MyIconContainer>
        <MyIcon1 src={chat} />
        <MyIcon2 src={group} />
        <MyIcon3 src={mail} />
        <MyIcon4 src={memo} />
        <MyIcon5 src={qna} />
        <MyIcon6 src={write} />
      </MyIconContainer>
    </MyContainer>
  );
}
