import React from 'react';
import logoImg from '../../../assets/images/logo.png';
import styled from 'styled-components';

const MySignUpFinish = styled.div`
  width: 100%;
  padding: 0;
  text-align: center;
  margin: 40px 0 0 0;
`;

const MyLogo = styled.img`
  margin: 70px 0 40px;
  width: 200px;
  object-fit: contain;
`;

const MyPageBtn = styled.div`
  font-size: 14px;
  text-align: center;
  width: 120px;
  height: 39px;
  line-height: 40px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  cursor: pointer;
  margin: 30px auto;
`;

export default function SignUpSuccess() {
  return (
    <MySignUpFinish>
      <MyLogo src={logoImg} alt="임시 로고 이미지" />
      <h2>감사합니다</h2>
      <p>회원가입이 완료되었습니다.</p>
      <MyPageBtn backgroundColor="#3c62e5" color="#fff">
        홈으로
      </MyPageBtn>
    </MySignUpFinish>
  );
}
