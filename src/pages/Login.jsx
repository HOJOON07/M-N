import React from 'react';
import styled from 'styled-components';
import myLogo from '../images/logo.jpg';
import mySocialGit from '../images/git.png';
import mySocialNaver from '../images/naver.png';
import mySocialKakao from '../images/pngegg.png';

const MyExplain = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  text-align: center;
  margin-top: 50px;
`;

const MyTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const MyList = styled.li`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const MyLogin = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 30;
  text-align: center;
  margin-top: 50px;
`;

const MyLogo = styled.img`
  text-align: center;
  width: 10px;
  height: 10px;
  padding: 7px;
`;

const MyInput = styled.input`
  width: 240px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #777;
  padding: 2px 6px;
  border-radius: 6px;
  margin-right: 4px;
  outline: none;
  &:focus {
    border-color: #ffdb29;
  }
`;

const MyButton = styled.button`
  width: 70px;
  height: 30px;
  box-sizing: border-box;
  font-size: 1.1rem;
  border-radius: 6px;

  background-color: #ffdb29;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  font-weight: 700;
`;

const MyLink = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 10px;
`;

const MyShortCut = styled.p`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 10px;
`;

const MySocial = styled.img`
  display: flex;
  width: 10px;
  height: 10px;
  padding: 7px;
`;

export default function Login() {
  return (
    <>
      <MyExplain>
        <MyTitle>지금 무료로 시작하세요</MyTitle>
        <MyList>워크플로우</MyList>
        <MyList>회의 기록</MyList>
        <MyList>보고서</MyList>
        <MyList>기획서</MyList>
      </MyExplain>
      <MyLogin>
        <MyLogo src={myLogo} alt="로고이미지" />
        <MyInput type="text" placeholder="아이디를 입력하세요" />
        <MyInput type="text" placeholder=" 입력하세요" />

        <MyButton>로그인</MyButton>
        <MyLink to="/">아이디 찾기</MyLink>
        <MyLink to="/">비밀번호 찾기</MyLink>
        <MyLink to="/">회원가입 하기</MyLink>
        <MyShortCut>간편 로그인</MyShortCut>
        <MySocial src={mySocialKakao} alt="카카오톡이미지" />
        <MySocial src={mySocialNaver} alt="네이버이미지" />
        <MySocial src={mySocialGit} alt="깃헙이미지" />
      </MyLogin>
    </>
  );
}
