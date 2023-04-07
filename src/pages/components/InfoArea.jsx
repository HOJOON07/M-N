import React, { useState } from 'react';
import styled from 'styled-components';
const MyDirectArea = styled.div``;

const MyInfoArea = styled.div`
  display: flex;
`;

const MyReqArea = styled.div`
  width: 13%;
  vertical-align: middle;

  & > p {
    word-break: keep-all;
  }
`;

const MyInput = styled.input`
  border-radius: 0px;
  border: 1px solid #707070;
  padding: 2px 0 0 5px;

  &:focus {
    outline: 1px solid #333333;
    border-radius: 0px;
  }
`;

const MyInputArea = styled.span`
  margin: auto 30px;
  display: flex;
  width: 80%;

  ${MyInput} {
    margin: 0 30px 0 15px;
    width: 250px;
    height: 35px;
  }
`;

const MyInfoBtn = styled.div`
  font-size: 14px;
  text-align: center;
  width: 120px;
  height: 39px;
  line-height: 35px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  cursor: pointer;
`;

const MyErrArea = styled.div`
  height: 30px;
`;

const MySocialArea = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100px;

  & > div > p {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: #707070;

    font-size: 12px;
    margin: 8px 0;
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

const MyIconArea = styled.div`
  border: 1px solid red;
  height: 70%;
  display: flex;
  justify-content: center;
  text-align: center;

  & > div {
    border: 1px solid green;
    width: 50px;
  }

  & > div:nth-child(2) {
    margin: 0 30px;
  }
`;

export default function InfoArea() {
  const emailList = ['naver.com', 'kakao.com', 'github.com'];
  const positionList = [
    '프론트엔드 개발자',
    '백엔드 개발자',
    '풀 스택 개발자',
    '앱 개발자',
    '게임 개발자',
  ];
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const onChnageEmail = e => {
    setEmail(e.target.value);
  };
  const onChangePosition = e => {
    setPosition(e.target.value);
  };

  return (
    <div style={{ padding: '50px' }}>
      <MyDirectArea>
        <MyInfoArea>
          <MyReqArea>
            <p>아이디 *</p>
          </MyReqArea>
          <MyInputArea>
            <MyInput type="text" placeholder="아이디를 입력해주세요" />
            <MyInfoBtn backgroundColor="#333333" color="#fff">
              중복 확인
            </MyInfoBtn>
          </MyInputArea>
        </MyInfoArea>
        <MyErrArea />
        <MyInfoArea>
          <MyReqArea>
            <p>비밀번호 *</p>
          </MyReqArea>
          <MyInputArea>
            <MyInput type="password" placeholder="비밀번호를 입력해주세요" />
          </MyInputArea>
        </MyInfoArea>
        <MyErrArea />
        <MyInfoArea>
          <MyReqArea>
            <p>비밀번호 확인*</p>
          </MyReqArea>
          <MyInputArea>
            <MyInput type="password" placeholder="비밀번호를 입력해주세요" />
          </MyInputArea>
        </MyInfoArea>
        <MyErrArea />
        <MyInfoArea>
          <MyReqArea>
            <p>이름*</p>
          </MyReqArea>
          <MyInputArea>
            <MyInput type="text" />
          </MyInputArea>
        </MyInfoArea>
        <MyErrArea />
        <MyInfoArea>
          <MyReqArea>
            <p>전화번호*</p>
          </MyReqArea>
          <MyInputArea>
            <MyInput type="text" placeholder="'-' 제외하고 입력" />
          </MyInputArea>
        </MyInfoArea>
        <MyErrArea />
        <MyInfoArea>
          <MyReqArea>
            <p>이메일*</p>
          </MyReqArea>
          <MyInputArea>
            <MyInput type="text" style={{ width: '100px' }} />
            <p style={{ textAlign: 'center', margin: 'auto 0' }}>@</p>
            <MyInput
              type="text"
              defaultValue={email}
              style={{ width: '100px' }}
            />
            <select onChange={onChnageEmail} value={email}>
              {emailList.map(el => {
                return (
                  <option value={el} key={el}>
                    {el}
                  </option>
                );
              })}
            </select>
          </MyInputArea>
        </MyInfoArea>
        <MyErrArea />
        <MyInfoArea>
          <MyReqArea>
            <p>포지션*</p>
          </MyReqArea>
          <MyInputArea>
            <select
              onChange={onChangePosition}
              value={position}
              style={{ height: '35px', marginLeft: '15px' }}
            >
              {positionList.map(el => {
                return (
                  <option value={el} key={el}>
                    {el}
                  </option>
                );
              })}
            </select>
          </MyInputArea>
        </MyInfoArea>
        <MyErrArea />
      </MyDirectArea>
      <MySocialArea>
        <div>
          <p>간편 로그인</p>
        </div>
        <MyIconArea>
          <div />
          <div />
          <div />
        </MyIconArea>
      </MySocialArea>
    </div>
  );
}
