import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import myLogo from '../images/mnlogopp.png';
import mySocialGit from '../images/git.png';
import mySocialNaver from '../images/naver.png';
import mySocialKakao from '../images/pngegg.png';
import { useNavigate } from 'react-router-dom';

const MyContainer = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;

  margin: auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const MyExplain = styled.span`
  width: 600px;
  height: 500px;
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
  width: 600px;
  height: 500px;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-left: 20px;
  border-style: 2px solid black;
  box-shadow: 7px 7px 7px 0px #725884;
  border-radius: 30px;
`;

const MyLogo = styled.img`
  text-align: center;
  width: 70px;
  height: 70px;
  padding: 20px;
`;

const MyInputPart = styled.div`
  height: 25%;
  background-color: #e9e4f5;
`;
const MyInput = styled.input`
  text-align: center;
  width: 70%;
  margin-top: 15px;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid #ddd7ed;
  border-radius: 6px;
  margin-right: 4px;
  outline: none;
  &:focus {
    border-color: #726b87;
  }
`;

const MyButton = styled.button`
  width: 60%;
  height: 40px;
  margin-top: 20px;
  box-sizing: border-box;
  font-size: 1.1rem;
  border-radius: 6px;
  background-color: #9781dd;
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
  width: 55px;
  height: 55px;
  padding: 10px;
`;

export default function Login() {
  const navigate = useNavigate();
  const gotoWorkSpaceList = () => {
    navigate('/workspace');
  };
  const inutRef = useRef([]);

  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });
  const { id, password } = inputs;

  const vaildId = id.length >= 6 && id.length <= 14;
  const vaildPassword = password.length >= 8 && password.length <= 16;

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!vaildId) {
      alert('유효하지 않은 id 입니다.');
      setInputs({
        ...inputs,
        id: '',
      });
      inutRef.current[0].focus();
    } else if (!vaildPassword) {
      alert('유효하지 않은 password 입니다.');
      inutRef.current[1].focus();
      setInputs({
        ...inputs,
        password: '',
      });
    } else {
      gotoWorkSpaceList();
      return alert('로그인 성공!');
    }
  };

  return (
    <MyContainer>
      <MyExplain>
        <MyTitle>지금 무료로 시작하기</MyTitle>
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
          <MyInput
            type="text"
            name="id"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={handleChange}
            ref={el => (inutRef.current[0] = el)}
          />

          <MyInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handleChange}
            ref={el => (inutRef.current[1] = el)}
          />
        </MyInputPart>

        <MyButton
          type="button"
          onClick={handleClick}
          disabled={id.length < 1 && password.length < 1}
        >
          로그인
        </MyButton>
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
