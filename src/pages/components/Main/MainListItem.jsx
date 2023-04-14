import React from 'react';
import styled, { keyframes } from 'styled-components';

// Color Variables
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';

const MyListContainer = styled.div`
  width: 210px;
  height: 200px;
  background-color: ${brightSubColor};
  border-radius: 20px;
  position: relative;
  transition: 0.4s;
  box-shadow: 2px 2px 3px #999;

  &:hover {
    color: white;
    background-color: ${hoverMainColor};
  }
`;

const MyText = styled.h3`
  font-size: 1.2rem;
  line-height: 1.7rem;
  font-weight: 700;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 40%;
  transform: translate(-50%, -80%);
  left: 50%;
`;

const MyIcon = styled.p`
  font-size: 3rem;
  position: absolute;
  bottom: 20%;
  transform: translate(-50%);
  left: 50%;
`;

export default function MainListItem({ text, icon }) {
  return (
    <MyListContainer>
      <MyText className="hover">{text}</MyText>
      <MyIcon>{icon}</MyIcon>
    </MyListContainer>
  );
}
