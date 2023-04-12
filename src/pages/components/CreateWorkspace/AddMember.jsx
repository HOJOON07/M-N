import React from 'react';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyInfoRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 40%;
  background-color: #d5cee8;

  border-bottom: 2px solid #725884;
  border-right: 2px solid #725884;
  /* box-shadow: 7px 7px 7px 0px #725884; */
  border-radius: 15px;
`;

const MyAddMember = styled.p`
  font-size: 1.3rem;
  color: #777;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const MyAddMemberInputWrap = styled.div`
  display: flex;
  background-color: white;
  width: 80%;
  height: 35px;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  border: 2px solid #777;
  margin-bottom: 40px;
`;

const MyaddMemberInput = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  color: #777;
  padding-left: 15px;
`;

const MyAddSearchIconWrap = styled.div``;
const MyMemberWrap = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;
const MyProfileImgWrap = styled.div`
  width: 50px;
  height: 50px;
`;

const MyMemberProfileImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const MyMemberName = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 800;
`;

const MyMemberCheckBox = styled.input`
  width: 30px;
  height: 30px;
  accent-color: #777;
  border-radius: 50%;
  cursor: pointer;
  border: none;
`;

export default function AddMember() {
  return (
    <MyInfoRightWrap>
      <MyAddMember>Add Member</MyAddMember>
      <MyAddMemberInputWrap>
        <MyaddMemberInput placeholder="Search by Name" />
        <MyAddSearchIconWrap>
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: '22px' }} />
        </MyAddSearchIconWrap>
      </MyAddMemberInputWrap>
      <MyMemberWrap>
        <MyProfileImgWrap>
          <MyMemberProfileImg src="/images/icon/user.png" alt="멤버 이미지" />
        </MyProfileImgWrap>
        <MyMemberName>김호준</MyMemberName>
        <MyMemberCheckBox type="checkbox" />
      </MyMemberWrap>
    </MyInfoRightWrap>
  );
}
