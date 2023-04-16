import React from 'react';
import logoImg from '../../../assets/images/logo.png';
import successImg from '../../../assets/images/signup-success.jpg';
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
`;

const MySuccessImg = styled.img`
  width: 550px;
  object-fit: contain;
`;

// const MyLogo = styled.img`
//   margin: 70px 0 40px;
//   width: 200px;
//   object-fit: contain;
// `;

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
  display: block;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

export default function SignUpSuccess() {
  return (
    <MySignUpFinish>
      <h2>환영합니다!</h2>
      <p>회원가입이 완료되었습니다.</p>
      <Link to="/">
        <MyPageBtn backgroundColor={mainColor} hoverColor={hoverMainColor}>
          홈으로
        </MyPageBtn>
      </Link>
      {/* <MyLogo src={logoImg} alt="임시 로고 이미지" /> */}
      <MySuccessImg src={successImg} alt="성공 이미지" />
    </MySignUpFinish>
  );
}
