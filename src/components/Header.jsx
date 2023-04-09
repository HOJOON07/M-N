import React from 'react';
import styled from 'styled-components';

const MyHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #373737;
`;
const MyLogo = styled.img`
  width: 60px;
  height: 60px;
  background-color: aquamarine;
`;

const MyDiv = styled.div`
  height: 100%;
  margin: auto 0;
`;

const MyLoginButton = styled.button`
  width: 75px;
  height: 40px;
  border: none;
  background-color: #0048ac;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 7px;
`;

const MySignUpButton = styled.button`
  width: 75px;
  height: 40px;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  margin-left: 10px;
  border-radius: 7px;
  background-color: #d7ddea;
`;

export default function Header() {
  return (
    <MyHeaderContainer>
      <MyLogo />
      <MyDiv>
        <MyLoginButton>로그인</MyLoginButton>
        <MySignUpButton>회원가입</MySignUpButton>
      </MyDiv>
    </MyHeaderContainer>
  );
}
