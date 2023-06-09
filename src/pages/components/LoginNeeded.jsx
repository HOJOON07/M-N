import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const titleColor = '#4d3b82';

const MyDivContainer = styled.div`
  max-width: 1000px;

  height: 90vh;
  margin: auto;
`;
const MyTitle = styled.h2`
  margin-top: 80px;
  color: ${titleColor};
  font-family: 'LINESeedKR-Bd';
  font-size: 3rem;
  text-align: center;
  font-weight: 700;
`;

const MyImg = styled.img`
  display: block;
  margin: auto;
  max-width: 250px;
`;

const MySubTitle = styled.p`
  margin-top: 30px;
  font-size: 1.2rem;
  text-align: center;
`;

const MyMainBtn = styled.button`
  display: block;
  padding: 10px 15px;
  width: 140px;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background-color: ${mainColor};
  color: white;
  cursor: pointer;
  transition: 0.2s;
  margin: 25px auto 0 auto;

  &:hover {
    background-color: ${hoverMainColor};
  }
`;

export default function NotFound() {
  const navigation = useNavigate();
  return (
    <MyDivContainer>
      <MyTitle>❌ 잘못된 접근</MyTitle>
      <MySubTitle>로그인이 필요합니다.</MySubTitle>
      <MyMainBtn onClick={() => navigation('/')}>홈으로</MyMainBtn>
    </MyDivContainer>
  );
}
