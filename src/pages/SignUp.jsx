import React from 'react';
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

// const MyPageBtn = styled.div`
//   font-size: 14px;
//   text-align: center;
//   width: 120px;
//   height: 39px;
//   line-height: 40px;
//   background-color: ${props => props.backgroundColor};
//   color: ${props => props.color};
//   cursor: pointer;
// `;

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
  return (
    <div style={{ padding: '5% 25%' }}>
      <h1>회원가입</h1>
      <p>소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
      <hr />
      <SocialInfo />
      {/* <InfoArea /> */}
      {/* <DetailInfoArea /> */}
      {/* <SignUpSuccess /> */}
      {/* <MyStageArea>
        <MyPageBtn
          backgroundColor={prevColor}
          color={btnFontColor}
          hoverColor={hoverPrevColor}
        >
          이전
        </MyPageBtn>
        <MyEmptyArea />
        <MyPageBtn
          backgroundColor={mainColor}
          color={btnFontColor}
          hoverColor={hoverMainColor}
        >
          다음 단계로
        </MyPageBtn>
      </MyStageArea> */}
    </div>
  );
}
