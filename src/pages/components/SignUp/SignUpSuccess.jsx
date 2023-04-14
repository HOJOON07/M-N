import React from 'react';
import logoImg from '../../../assets/images/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Color Variables
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const btnFontColor = '#fff';

// Styled Components
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

const MyPageBtn = styled.button`
  margin: 30px auto;
  padding: 10px 10px;
  width: 90px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.backgroundColor};
  color: ${btnFontColor};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

export default function SignUpSuccess() {
  return (
    <MySignUpFinish>
      <MyLogo src={logoImg} alt="임시 로고 이미지" />
      <h2>감사합니다</h2>
      <p>회원가입이 완료되었습니다.</p>
      <Link to="/workflow">
        <MyPageBtn backgroundColor={mainColor} hoverColor={hoverMainColor}>
          홈으로
        </MyPageBtn>
      </Link>
    </MySignUpFinish>
  );
}
