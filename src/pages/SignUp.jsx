import React, { useState } from 'react';
import InfoArea from './components/SignUp/InfoArea';
import styled from 'styled-components';
import SocialInfo from './components/SignUp/SocialInfo';
import DetailInfoArea from './components/SignUp/DetailInfoArea';
import SignUpSuccess from './components/SignUp/SignUpSuccess';
import axios from 'axios';
// Color Variables
const mainColor = '#623AD6';
const hoverMainColor = '#7855DB';
const prevColor = '#333333';
const hoverPrevColor = '#6E6E6E';
const btnFontColor = '#fff';
// Styled Components
const MyStageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 20px 0 30px 0;
`;
const MyEmptyArea = styled.div`
  width: 50px;
`;
const MyPageBtn = styled.button`
  padding: 10px 10px;
  width: 110px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.backgroundColor};
  color: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;
export default function SignUp() {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);
  const changeState = () => {
    setShow(prev => !prev);
  };
  const prevChange = () => {
    setNum(prev => prev - 1);
  };
  const nextChange = () => {
    setNum(prev => prev + 1);
    if (num !== 0 && num !== 2) {
      signUpSign();
    }
  };
  const [userData, setUserData] = useState({
    user_id: '',
    user_password: '',
    user_name: '',
    user_email_1: '',
    user_emaail_2: '',
    tel: '',
  });
  const idOnChage = e => {
    setUserData({ ...userData, user_id: e.target.value });
    // userData.user_id = e.target.value;
  };
  const PWOnchange = e => {
    setUserData({ ...userData, user_password: e.target.value });
    // userData.user_password = e.target.value;
  };
  const nameOnchage = e => {
    setUserData({ ...userData, user_name: e.target.value });
    // userData.user_name = e.target.value;
  };
  const telOnChage = e => {
    setUserData({ ...userData, tel: e.target.value });
    // userData.tel = e.target.value;
  };
  const onChnageEmail2 = e => {
    setUserData({ ...userData, user_emaail_2: e.target.value });
    // userData.useremail[1] = e.target.value;
  };
  const onChageEmail1 = e => {
    setUserData({ ...userData, user_email_1: e.target.value });
    // userData.useremail[0] = e.target.value;
  };
  const add = () => {
    userData.useremail = `${userData.user_email_1}@${userData.user_emaail_2}`;
  };
  add();
  console.log(userData);
  const emailList = ['naver.com', 'kakao.com', 'github.com'];
  const signUpSign = () => {
    add();
    axios
      .post('http://localhost:5500/user/signup', userData, {
        withCredentials: true,
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res);
        }
      })
      .catch(err => {
        // setMsg(err));
        alert('ID 또는 비밀번호가 일치하지 않습니다');
        console.log(err.response.data, err);
      });
  };
  return (
    <div style={{ padding: '5% 25%' }}>
      {num === 0 && (
        <>
          <h1>회원가입</h1>
          <p>소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
          <hr />
          <SocialInfo
            show={show}
            changeState={changeState}
            nextChange={nextChange}
          />
        </>
      )}
      {num === 1 && (
        <>
          <h1>회원가입</h1>
          <p>소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
          <hr />
          <InfoArea
            userData={userData}
            idOnChage={idOnChage}
            PWOnchange={PWOnchange}
            nameOnchage={nameOnchage}
            telOnChage={telOnChage}
            onChnageEmail2={onChnageEmail2}
            onChageEmail1={onChageEmail1}
            emailList={emailList}
          />
        </>
      )}
      {/* {num === 2 && (
        <>
          <h1>회원가입</h1>
          <p>소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
          <hr />
          <DetailInfoArea />
        </>
      )} */}
      {num === 2 && <SignUpSuccess />}
      {num !== 0 && num !== 2 && (
        <MyStageArea>
          <MyPageBtn
            backgroundColor={prevColor}
            color={btnFontColor}
            hoverColor={hoverPrevColor}
            onClick={prevChange}
          >
            이전
          </MyPageBtn>
          <MyEmptyArea />
          <MyPageBtn
            backgroundColor={mainColor}
            color={btnFontColor}
            hoverColor={hoverMainColor}
            onClick={nextChange}
          >
            다음 단계로
          </MyPageBtn>
        </MyStageArea>
      )}
    </div>
  );
}
