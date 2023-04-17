import React from 'react';
import styled from 'styled-components';
import kakaoIcon from '../../../assets/images/kakao-icon.png';
import naverIcon from '../../../assets/images/naver-icon.png';
import githubIcon from '../../../assets/images/github-icon.png';

// Styled Components
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
    margin: 15px 0;
  }

  & > img {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }

  & > p {
    height: 100%;
    margin: 0;
  }
`;

const MyDirectArea = styled.div``;

export default function SocialInfo(props) {
  const { changeState, nextChange } = props;

  return (
    <MyChoiceArea>
      <MySocialArea>
        <MyJoinBox backgroundColor="#fff" border="#707070">
          <img src={githubIcon} alt="github-icon" />
          <p>Github로 시작하기</p>
        </MyJoinBox>
        <MyJoinBox backgroundColor="#FFEB3B" border="#FFEB3B">
          <img src={kakaoIcon} alt="github-icon" />
          <p>카카오로 시작하기</p>
        </MyJoinBox>
        <MyJoinBox backgroundColor="#03C75A" border="#03C75A">
          <img src={naverIcon} alt="github-icon" />
          <p>네이버로 시작하기</p>
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
          ID/PW 회원가입
        </MyJoinBox>
      </MyDirectArea>
    </MyChoiceArea>
  );
}
