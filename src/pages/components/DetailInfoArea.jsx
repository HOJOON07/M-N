import React, { useState } from 'react';
import styled from 'styled-components';

const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  text-align: center;
  margin: 40px auto;

  & > form > div {
    background-color: #efefef;
    width: 100%;
    height: 220px;
  }

  & > form > input {
    position: relative;
    bottom: 40px;
    opacity: 0;
    cursor: pointer;
    width: 100%;
  }

  & > form > label {
    background-color: #3c62e5;
    border-style: none;
    height: 55px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MyDetailInfo = styled.div``;

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

const MyInputArea = styled.span`
  margin: auto 30px;
  display: flex;
  width: 80%;
`;

const MyErrArea = styled.div`
  height: 30px;
`;

export default function DetailInfoArea() {
  const positionList = [
    '프론트엔드 개발자',
    '백엔드 개발자',
    '풀 스택 개발자',
    '앱 개발자',
    '게임 개발자',
  ];
  const [position, setPosition] = useState('');

  const onChangePosition = e => {
    setPosition(e.target.value);
  };

  return (
    <>
      <MyProfile>
        <form encType="multipart/form-data">
          <div>{/* <img alt="profile" /> */}</div>
          <label htmlFor="file">이미지 업로드</label>
          <input type="file" accept="image/jpg, image/jpeg, image/png" />
        </form>
      </MyProfile>
      <MyDetailInfo>
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
      </MyDetailInfo>
    </>
  );
}
