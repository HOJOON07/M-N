import React from 'react';
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

export default function DetailInfoArea() {
  return (
    <MyProfile>
      <form encType="multipart/form-data">
        <div>{/* <img alt="profile" /> */}</div>
        <label htmlFor="file">이미지 업로드</label>
        <input type="file" accept="image/jpg, image/jpeg, image/png" />
      </form>
    </MyProfile>
  );
}
