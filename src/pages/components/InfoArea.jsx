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

export default function InfoArea() {
  const emailList = ['naver.com', 'kakao.com', 'github.com'];
  const [email, setEmail] = useState('');

  const onChnageEmail = e => {
    setEmail(e.target.value);
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
      </MyDirectArea>
    </div>
  );
}
