import axios from 'axios';
import { id } from 'date-fns/locale';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignUpSuccess from './SignUpSuccess';
// Color Variables
const mainColor = '#623AD6';
const hoverMainColor = '#7855DB';
// Styled Components
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
const MyInfoBtn = styled.button`
  padding: 10px 10px;
  width: 120px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background-color: ${mainColor};
  color: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${hoverMainColor};
  }
`;

const MyConfirmBtn = styled.button`
  position: absolute;
  padding: 10px 10px;
  width: 120px;
  box-sizing: border-box;
  right: 240px;
  top: 370px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background-color: ${mainColor};
  color: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${hoverMainColor};
  }
`;
const MyErrArea = styled.div`
  height: 30px;
`;
export default function InfoArea(props) {
  const navigate = useNavigate();
  const {
    userData,
    idOnChage,
    PWOnchange,
    PWCFOnchange,
    nameOnchage,
    telOnChage,
    onChageEmail1,
    onChnageEmail2,
    emailList,
    PW2,
    handleCheck,
    idCheck,
  } = props;

  const firstPassword = useRef('');
  const secondPassword = useRef('');

  return (
    <div style={{ padding: '50px' }}>
      <MyDirectArea>
        <MyInfoArea>
          <MyReqArea>
            <p>아이디 *</p>
          </MyReqArea>
          <MyInputArea>
            <MyInput
              type="text"
              placeholder="아이디를 입력해주세요"
              onChange={idOnChage}
            />
            <MyInfoBtn backgroundColor="#333333" color="#fff" onClick={idCheck}>
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
            <MyInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={PWOnchange}
              // value={PWOnchange}
              ref={firstPassword}
            />
          </MyInputArea>
        </MyInfoArea>
        <MyErrArea />
        <MyInfoArea>
          <MyReqArea>
            <p>비밀번호 확인*</p>
          </MyReqArea>
          <MyInputArea>
            <MyInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={PW2}
              ref={secondPassword}
            />
            <MyConfirmBtn
              type="button"
              onClick={() =>
                handleCheck(
                  firstPassword.current.value,
                  secondPassword.current.value
                )
              }
              backgroundColor="#333333"
              color="#fff"
            >
              비밀번호 확인
            </MyConfirmBtn>
          </MyInputArea>
        </MyInfoArea>
        <MyErrArea />
        <MyInfoArea>
          <MyReqArea>
            <p>이름*</p>
          </MyReqArea>
          <MyInputArea>
            <MyInput type="text" onChange={nameOnchage} />
          </MyInputArea>
        </MyInfoArea>
        <MyErrArea />
        <MyInfoArea>
          <MyReqArea>
            <p>전화번호*</p>
          </MyReqArea>
          <MyInputArea>
            <MyInputArea />
            <MyInput
              type="text"
              placeholder="'-' 제외하고 입력"
              onChange={telOnChage}
            />
          </MyInputArea>
        </MyInfoArea>
        <MyErrArea />
        <MyInfoArea>
          <MyReqArea>
            <p>이메일*</p>
          </MyReqArea>
          <MyInputArea>
            <MyInput
              type="text"
              style={{ width: '100px' }}
              onChange={onChageEmail1}
            />
            <p style={{ textAlign: 'center', margin: 'auto 0' }}>@</p>
            <MyInput
              type="text"
              style={{ width: '100px' }}
              value={userData.user_email_2}
            />
            <select
              onChange={e => {
                onChnageEmail2(e);
              }}
              // value={email}
            >
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
      </MyDirectArea>
    </div>
  );
}
