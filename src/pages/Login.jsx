import React from 'react';
import styled from 'styled-components';
import myLogo from '../images/logo.jpg';
import mySocialGit from '../images/git.png';
import mySocialNaver from '../images/naver.png';
import mySocialKakao from '../images/pngegg.png';

const MyContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const MyExplain = styled.span`
  width: 400px;
  height: 600px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const MyTitle = styled.p`
  margin-top: 150px;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MyList = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  margin-top: 15px;
  margin-left: 80px;
`;

const MyLogin = styled.span`
  width: 400px;
  height: 600px;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-left: 20px;
  border-style: 2px solid gray;
  box-shadow: 10px 10px 10px 0px;
  border-radius: 30px;
`;

const MyLogo = styled.img`
  text-align: center;
  width: 100px;
  height: 100px;
  padding: 20px;
`;

const MyInputPart = styled.div`
  height: 20%;
  background-color: #aeaeae;
`;
const MyInput = styled.input`
  text-align: center;
  width: 70%;
  margin-top: 15px;
  box-sizing: border-box;
  height: 30px;
  border: 1px solid #777;
  border-radius: 6px;
  margin-right: 4px;
  outline: none;
  &:focus {
    border-color: #ffdb29;
  }
`;

const MyButton = styled.button`
  width: 50%;
  height: 30px;
  margin-top: 20px;
  box-sizing: border-box;
  font-size: 1.1rem;
  border-radius: 6px;
  background-color: #ffdb29;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    border-color: #11110d;
  }
`;
const MyLinkList = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const MyLink = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 10px;
  padding: 10px;
`;

const MyShortCut = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 10px;
`;

const MyIcon = styled.span`
  display: flex;
  justify-content: center;
`;

const MySocial = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 10px;
`;

export default function Login() {
  return (
    <MyContainer>
      <MyExplain>
        <MyTitle>지금 무료로 시작하세요</MyTitle>
        <br />
        <MyList>☑️워크플로우</MyList>
        <MyList>☑️회의 기록</MyList>
        <MyList>☑️보고서</MyList>
        <MyList>☑️기획서</MyList>
      </MyExplain>
      <MyLogin>
        <MyLogo src={myLogo} alt="로고이미지" />
        <br />
        <MyInputPart>
          <MyInput type="text" placeholder="아이디를 입력하세요" />
          <MyInput type="text" placeholder=" 비밀번호를 입력하세요" />
        </MyInputPart>

        <MyButton>로그인</MyButton>
        <MyLinkList>
          <MyLink to="/">아이디 찾기</MyLink>
          <MyLink to="/">비밀번호 찾기</MyLink>
          <MyLink to="/">회원가입 하기</MyLink>
        </MyLinkList>

        <MyShortCut>---- 간편 로그인 ----</MyShortCut>
        <MyIcon>
          <MySocial src={mySocialKakao} alt="카카오톡이미지" />
          <MySocial src={mySocialNaver} alt="네이버이미지" />
          <MySocial src={mySocialGit} alt="깃헙이미지" />
        </MyIcon>
      </MyLogin>
    </MyContainer>
  );
}
