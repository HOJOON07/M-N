import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import myLogo from '../assets/images/logo.png';
import mySocialGit from '../assets/images/github-square.png';
import mySocialNaver from '../assets/images/naver-icon.png';
import mySocialKakao from '../assets/images/kakao-icon.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Color Variables
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';

const MyContainer = styled.section`
  position: absolute;
  z-index: 999;
  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  /* padding-top: 300px;
  padding-bottom: 300px; */
  transform: translate(-50%, -50%);
`;

const MyLogoTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  margin: auto 0;
  position: absolute;
  top: 30px;
`;

const MyCloseBtn = styled.button`
  position: absolute;
  background-color: white;
  width: 20px;
  height: 20px;
  right: 25px;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;
`;

const MyLogin = styled.span`
  position: absolute;
  width: 600px;
  height: 500px;
  text-align: center;
  align-items: center;
  top: 15%;
  left: 33%;
  background-color: white;
  border-style: 2px solid black;
  box-shadow: 5px 5px 7px 0px #52525267;
  border-radius: 30px;
`;

const MyLogo = styled.img`
  width: 60px;
  height: 60px;

  filter: invert(93%) sepia(7%) saturate(337%) hue-rotate(215deg)
    brightness(95%) contrast(103%);
`;

const MyDivContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  position: relative;
`;

const MyInputPart = styled.div`
  height: 25%;
  background-color: #e9e4f5;
`;
const MyInput = styled.input`
  width: 70%;
  margin-top: 15px;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid #ddd7ed;
  padding: 5px 10px;
  border-radius: 6px;
  margin-right: 4px;
  outline: none;
  &:focus {
    border-color: #726b87;
  }
`;

const MyButton = styled.button`
  width: 70%;
  height: 40px;
  margin-top: 20px;
  box-sizing: border-box;
  font-size: 1.2rem;
  border-radius: 6px;

  color: white;
  background-color: ${hoverMainColor};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;

  &:hover {
    border-color: #11110d;
    background-color: ${mainColor};
  }
`;
const MyLinkList = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const MyLink = styled.p`
  color: #767676;
  font-size: 0.8rem;
  font-weight: 300;
  margin: 0 10px 30px;
  text-decoration: underline;
  cursor: pointer;
`;

const MyShortCut = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  margin: 15px 0;
  position: relative;
`;

const MyBlank = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25px;
  width: 80px;

  background-color: white;
`;

const MyBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 1px;
  width: 195px;

  background-color: #a4a4a4;
`;

const MyIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const MySocial = styled.img`
  display: flex;
  width: 55px;
  height: 55px;
`;

const MySocialBack = styled.div`
  position: absolute;
  z-index: -1;
  width: 55px;
  height: 55px;
  background-color: ${props => props.color};
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MySocialBackSec = styled.div`
  position: absolute;
  z-index: -1;
  width: 55px;
  height: 55px;
  box-sizing: border-box;
  border: 3px solid ${props => props.color};
  border-radius: 6px;
  bottom: 0;
`;

export default function Login() {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const gotoWorkSpaceList = () => {
    navigate('/workspace');
  };
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });
  console.log(inputs.password);
  const submit = () => {
    const userData = {
      user_id: inputs.id,
      user_password: inputs.password,
    };
    axios
      .post('http://localhost:5500/user/login', userData, {
        withCredentials: true,
      })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('refreshToken', res.data.refreshToken);
          localStorage.setItem('accessToken', res.data.accessToken);
          setMsg('');
          console.log(res);
        }
      })
      .catch(err => {
        // setMsg(err));
        alert('ID 또는 비밀번호가 일치하지 않습니다');
        console.log(err.response.data, err);
      });
    // axios({
    //   url: 'http://localhost:5500/user/login',
    //   method: 'POST',
    //   withCredentials: true,
    //   userData: userData,
    // })
    //   .then(res => {
    //     if (res.status === 200) {
    //       gotoWorkSpaceList();
    //       setMsg('');
    //     }
    //   })
    //   .catch(err => {
    //     setMsg(err);
    //     alert('ID 또는 비밀번호가 일치하지 않습니다.');
    //     console.log(err.response.data, err);
    //   });
  };
  const inutRef = useRef([]);

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
      submit();
      gotoWorkSpaceList();
      return alert('로그인 성공!');
    }
  };

  // 카카오
  const KAKAO_CLIENT_ID = 'c37163557aa622477d21aee2d6f6dbdc';
  const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  const KAKAO_LOGOUT_URI = 'http://localhost:3000';
  const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_CLIENT_ID}&logout_redirect_uri=${KAKAO_LOGOUT_URI}`;

  //깃헙
  const GITHUB_CLIENT_ID = '052e16cc26d82c4a72dc';
  const GITHUB_REDIRECT = `http://localhost:3000/oauth/github/callback`;
  const GITHUB_LOGIN = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT}`;
  return (
    <MyContainer>
      <MyLogin>
        <MyDivContainer>
          <MyLogo src={myLogo} alt="로고이미지" />
          <MyLogoTitle>지금 무료로 시작하기</MyLogoTitle>

          <MyCloseBtn type="button" onClick={closeModal}>
            ✖️
          </MyCloseBtn>
        </MyDivContainer>
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
          onClick={submit}
          disabled={id.length < 1 && password.length < 1}
        >
          로그인
        </MyButton>
        <MyLinkList>
          <MyLink to="/">아이디 찾기</MyLink>
          <MyLink to="/">비밀번호 찾기</MyLink>
          <MyLink to="/">회원가입 하기</MyLink>
        </MyLinkList>

        <div style={{ position: 'relative' }}>
          <MyBar />
          <MyBlank />
          <MyShortCut>간편 로그인</MyShortCut>
        </div>
        <MyIcon>
          <Link to={KAKAO_AUTH_URL} style={{ marginRight: '15px' }}>
            <div
              style={{ position: 'relative', width: '55px', height: '55px' }}
            >
              <MySocial
                src={mySocialKakao}
                alt="카카오톡이미지"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'inline-block',
                  marginTop: '7px',
                }}
              />
              <MySocialBack color="#ffeb3b" />
            </div>
          </Link>
          <Link to="/" style={{ marginRight: '15px' }}>
            <MySocial src={mySocialNaver} alt="네이버이미지" />
          </Link>
          <Link to={GITHUB_LOGIN}>
            <MySocial src={mySocialGit} alt="깃헙이미지" />
            <MySocialBackSec color="#000" />
          </Link>
        </MyIcon>
      </MyLogin>
    </MyContainer>
  );
}
