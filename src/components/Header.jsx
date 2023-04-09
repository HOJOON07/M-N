import React from 'react';
import styled from 'styled-components';

// Styled Components
const MyHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #373737;
`;
const MyLogoImg = styled.img`
  width: 60px;
  height: 60px;
  background-color: #777;
`;
const MyLogoTxt = styled.p`
  height: 20px;
  margin: auto 0 auto 5px;
  font-size: 1.3rem;
`;

const MyDiv = styled.div`
  height: 100%;
  margin: auto 0;
  display: flex;
`;

const MyLoginButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  background-color: #0048ac;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    font-size: 1.1rem;
    background-color: #013b8c;
  }
`;

const MySignUpButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  margin-left: 10px;
  border-radius: 7px;
  background-color: #d7ddea;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    font-size: 1.1rem;
    background-color: #b5bac5;
  }
`;

export default function Header() {
  return (
    <MyHeaderContainer>
      <MyDiv>
        <MyLogoImg />
        <MyLogoTxt>MeetNotes</MyLogoTxt>
      </MyDiv>

      <MyDiv>
        <MyLoginButton>로그인</MyLoginButton>
        <MySignUpButton>회원가입</MySignUpButton>
      </MyDiv>
    </MyHeaderContainer>
  );
}
