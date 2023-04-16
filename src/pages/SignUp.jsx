import React, { useState } from 'react';
import InfoArea from './components/SignUp/InfoArea';
import styled from 'styled-components';
import SocialInfo from './components/SignUp/SocialInfo';
import DetailInfoArea from './components/SignUp/DetailInfoArea';
import SignUpSuccess from './components/SignUp/SignUpSuccess';

// Color Variables
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const prevColor = '#333333';
const hoverPrevColor = '#6e6e6e';
const btnFontColor = '#fff';

// Styled Components
const MyStageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 20px 0 30px 0;
`;

const MyEmptyArea = styled.div`
  width: 50px;
`;

const MyPageBtn = styled.button`
  padding: 10px 10px;
  width: 110px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.backgroundColor};
  color: white;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

export default function SignUp() {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);
  const changeState = () => {
    setShow(prev => !prev);
  };
  const prevChange = () => {
    setNum(prev => prev - 1);
  };
  const nextChange = () => {
    setNum(prev => prev + 1);
  };
  return (
    <div style={{ padding: '5% 25%' }}>
      {num === 0 && (
        <>
          <h1>회원가입</h1>
          <p>소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
          <hr />
          <SocialInfo
            show={show}
            changeState={changeState}
            nextChange={nextChange}
          />
        </>
      )}
      {num === 1 && (
        <>
          <h1>회원가입</h1>
          <p>소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
          <hr />
          <InfoArea />
        </>
      )}
      {num === 2 && (
        <>
          <h1>회원가입</h1>
          <p>소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
          <hr />
          <DetailInfoArea />
        </>
      )}
      {num === 3 && <SignUpSuccess />}
      {num !== 0 && num !== 3 && (
        <MyStageArea>
          <MyPageBtn
            backgroundColor={prevColor}
            color={btnFontColor}
            hoverColor={hoverPrevColor}
            onClick={prevChange}
          >
            이전
          </MyPageBtn>
          <MyEmptyArea />
          <MyPageBtn
            backgroundColor={mainColor}
            color={btnFontColor}
            hoverColor={hoverMainColor}
            onClick={nextChange}
          >
            다음 단계로
          </MyPageBtn>
        </MyStageArea>
      )}
    </div>
  );
}
