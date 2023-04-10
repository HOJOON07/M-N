import React from 'react';
import InfoArea from './components/InfoArea';
import styled from 'styled-components';
import SocialInfo from './components/SocialInfo';
import DetailInfoArea from './components/DetailInfoArea';
import SignUpSuccess from './components/SignUpSuccess';

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

const MyPageBtn = styled.div`
  font-size: 14px;
  text-align: center;
  width: 120px;
  height: 39px;
  line-height: 40px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  cursor: pointer;
`;

export default function SignUp() {
  return (
    <div style={{ padding: '5% 25%' }}>
      <h1>회원가입</h1>
      <p>소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
      <hr />
      {/* <SocialInfo /> */}
      {/* <InfoArea /> */}
      {/* <DetailInfoArea /> */}
      <SignUpSuccess />
      {/* <MyStageArea>
        <MyPageBtn backgroundColor="#333333" color="#fff">
          이전
        </MyPageBtn>
        <MyEmptyArea />
        <MyPageBtn backgroundColor="#3c62e5" color="#fff">
          다음 단계로
        </MyPageBtn>
      </MyStageArea> */}
    </div>
  );
}
