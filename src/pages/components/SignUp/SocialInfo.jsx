import React from 'react';
import styled from 'styled-components';
import kakaoIcon from '../../../assets/images/kakao-icon.png';
import naverIcon from '../../../assets/images/naver-icon.png';
import githubIcon from '../../../assets/images/github-icon.png';
import { Link } from 'react-router-dom';

// Styled Components
const MyP = styled.p`
  font-style: none;
  text-decoration: none;
`;

const MyChoiceArea = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 30px;

  & > div > p {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: #707070;

    font-size: 12px;
    margin: 30px 0;
  }
  & > div > p::before,
  & > div > p::after {
    content: '';
    flex-grow: 1;
    background: #707070;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

const MySocialArea = styled.div``;

const MyJoinBox = styled.div`
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.border};
  position: relative;
  display: flex;
  padding: 20px 0;
  cursor: pointer;

  &:nth-child(2) {
    margin: 25px 0;
  }

  & > img {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }

  & > p {
    height: 100%;
    margin: 0;
    font-size: 1.3rem;
  }
`;

const MyDirectArea = styled.div``;

export default function SocialInfo(props) {
  const { changeState, nextChange } = props;

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
    <MyChoiceArea>
      <MySocialArea>
        <Link
          to={GITHUB_LOGIN}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MyJoinBox backgroundColor="#fff" border="#707070">
            <img src={githubIcon} alt="github-icon" />
            <MyP>Github로 시작하기</MyP>
          </MyJoinBox>
        </Link>
        <Link
          to={KAKAO_AUTH_URL}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MyJoinBox backgroundColor="#FFEB3B" border="#FFEB3B">
            <img src={kakaoIcon} alt="github-icon" />
            <MyP>카카오로 시작하기</MyP>
          </MyJoinBox>
        </Link>
        <MyJoinBox backgroundColor="#03C75A" border="#03C75A">
          <img src={naverIcon} alt="github-icon" />
          <MyP>네이버로 시작하기</MyP>
        </MyJoinBox>
      </MySocialArea>
      <div>
        <p>또는</p>
      </div>
      <MyDirectArea>
        <MyJoinBox
          backgroundColor="#fff"
          border="#707070"
          onClick={(changeState, nextChange)}
        >
          <p>ID/PW 회원가입</p>
        </MyJoinBox>
      </MyDirectArea>
    </MyChoiceArea>
  );
}
