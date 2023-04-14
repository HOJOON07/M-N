import React from 'react';
import styled from 'styled-components';

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
  border-radius: 10px;
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

export default function MainLast() {
  return (
    <MyContainer>
      <MyP>무료로 MeetNotes 사용해 보기</MyP>
      <MyButton>무료 체험</MyButton>
    </MyContainer>
  );
}
