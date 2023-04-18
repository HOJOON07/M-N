import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Login from '../pages/Login';
import { Fade } from 'react-reveal';

// Color Variables
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';

// Styled Components
const MyInnerContainer = styled.header`
  border-bottom: 1px solid #373737;
`;
const MyHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: auto;
  padding: 12px;
`;

const MyMainLogo = styled.div`
  height: 100%;
  margin: auto 10px;
  display: flex;
  cursor: pointer;
`;

const MyLogoImg = styled.img`
  width: 50px;
  height: 50px;

  filter: invert(32%) sepia(77%) saturate(5013%) hue-rotate(247deg)
    brightness(90%) contrast(88%);
`;

const MyLogoTxt = styled.p`
  margin: 3px 0 auto 7px;
  font-size: 1.3rem;
  font-family: 'LINESeedKR-Bd';
`;

const MyLogoTxtSec = styled.p`
  margin: 3px 0 auto 19px;
  font-size: 1.3rem;
  font-family: 'LINESeedKR-Bd';
`;

const MyDiv = styled.div`
  height: 100%;
  margin: auto 10px;
  display: flex;
`;

const MyLoginButton = styled.button`
  padding: 10px 10px;
  width: 90px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background-color: ${mainColor};
  color: white;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${hoverMainColor};
  }
`;

const MySignUpButton = styled.button`
  width: 90px;
  box-sizing: border-box;
  border: none;
  padding: 10px 10px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 10px;
  background-color: ${brightSubColor};
  transition: 0.2s;

  &:hover {
    background-color: ${subColor};
  }
`;

const MyAlarmAnim = keyframes`
  0% {
    transform: rotateY('3deg');
  }
  50% {
    transform: rotateY('0deg');
  }
  100% {
    transform: rotateY('-3deg');
  }
`;

const MyAlarmIcon = styled.img`
  width: 36px;
  height: 36px;
  background-size: cover;
  cursor: pointer;

  &:hover {
    animation: ${MyAlarmAnim} 0.7s linear infinite;
  }
`;

const MyProfileIcon = styled.img`
  width: 40px;
  background-size: cover;
  cursor: pointer;
  margin: auto 0 auto 5px;
`;

const MyGreetingText = styled.p`
  margin: auto 10px auto;
  font-size: 0.8rem;
`;

export default function Header() {
  const user_id = localStorage.getItem('user_id');
  const navigation = useNavigate();
  const [state, setState] = useState();
  const isLogin = useRef(false);
  isLogin.current = localStorage.getItem('accessToken') !== null;
  console.log(localStorage.getItem('accessToken'));
  console.log(isLogin.current);
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const logout = () => {
    if (isLogin) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user_id');
      isLogin.current = false;
      setState([]);
      window.location.replace('/');
    }
  };

  return (
    <MyInnerContainer>
      <MyHeaderContainer>
        <MyMainLogo onClick={() => navigation('/')}>
          <MyLogoImg src="/images/logo.png" />
          <div>
            <MyLogoTxt>
              <Fade top cascade>
                Meet
              </Fade>
            </MyLogoTxt>
            <MyLogoTxtSec>
              <Fade top cascade>
                Notes
              </Fade>
            </MyLogoTxtSec>
          </div>
        </MyMainLogo>

        <MyDiv>
          {!isLogin.current ? (
            <>
              <MyGreetingText>로그인이 필요합니다</MyGreetingText>
              <MyLoginButton onClick={showModal}>로그인</MyLoginButton>
              {modalOpen && <Login setModalOpen={setModalOpen} />}
              <MySignUpButton onClick={() => navigation('/signup')}>
                회원가입
              </MySignUpButton>
            </>
          ) : (
            <MyDiv>
              <MyGreetingText>{user_id} 님 안녕하세요!</MyGreetingText>
              <MyLoginButton onClick={logout}>로그아웃</MyLoginButton>
              <MyAlarmIcon src="/images/icon/alarm.png" />
              <MyProfileIcon src="/images/icon/user.png" />
            </MyDiv>
          )}
        </MyDiv>
      </MyHeaderContainer>
    </MyInnerContainer>
  );
}
