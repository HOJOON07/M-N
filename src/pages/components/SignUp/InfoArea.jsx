import React, { useState } from 'react';
import styled from 'styled-components';

// Color Variables
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';

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

const MyErrArea = styled.div`
  height: 30px;
`;

export default function InfoArea(props) {
  const emailList = ['naver.com', 'kakao.com', 'github.com'];
  const [userInfo, setUserInfo] = useState({
    user_id: '',
    user_password: '',
    user_comfirmpassword: '',
    user_name: '',
    user_email: '',
    tel: '',
  });

  const onChangeID = e => {
    setUserInfo({
      user_id: e.target.value,
    });
    console.log(userInfo);
  };

  const onChangePassword = e => {
    setUserInfo({
      user_password: e.target.value,
    });
    console.log(userInfo);
  };

  const onConfirmPasswordHandler = e => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onChangeName = e => {
    setUserInfo({
      user_name: e.target.value,
    });
    console.log(userInfo);
  };

  const onChangeEmail = e => {
    setUserInfo({
      user_email: e.target.value,
    });
    console.log(userInfo);
  };

  if (Password !== ConfirmPassword) {
    return alert('비밀번호와 비밀번호 확인이 같지 않습니다.');
  }

  dispatch(registerUser(body)).then(response => {
    if (response.payload.success) {
      props.history.push('/loginPage');
    } else {
      alert('Error');
    }
  });

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
            <MyInput
              type="text"
              style={{ width: '100px' }}
              onChange={onChangeEmail}
            />
            <p style={{ textAlign: 'center', margin: 'auto 0' }}>@</p>
            <MyInput
              type="text"
              // defaultValue={email}
              style={{ width: '100px' }}
            />
            <select onChange={onChangeEmail}>
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
