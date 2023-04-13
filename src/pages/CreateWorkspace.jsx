import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Select from './components/CreateWorkspace/Select';
import Calendar from './components/CreateWorkspace/Calendar';
import AddMember from './components/CreateWorkspace/AddMember';
import InvitedMember from './components/CreateWorkspace/InvitedMember';

// Color Variables
const mainColor = '#623ad6';
const resetColor = '#dc4e4e';
const hoverResetColor = '#f06464';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';
const connectColor = '#76d63a';
const hoverConnectColor = '#64bc2d';

const MySectionContainer = styled.div`
  max-width: 1000px;
  height: 750px;
  margin: 40px auto 0 auto;
  box-sizing: border-box;
`;

const MyTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
`;

const MyNewWorkspaceTitle = styled.h2`
  font-family: 'LINESeedKR-Bd';
  font-size: 2.5rem;
`;

const MyBar = styled.div`
  width: 75px;
  height: 8px;
  background-color: ${mainColor};
  border-radius: 5px;
  margin: 10px 0 25px;
`;

const MyResetButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  width: 115px;
  padding: 13px 20px;
  background-color: ${resetColor};
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: ${hoverResetColor};
  }
`;

const MySignupButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  width: 115px;
  padding: 13px 20px;
  background-color: ${mainColor};
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;
  margin-left: 15px;

  &:hover {
    background-color: ${hoverMainColor};
  }
`;

const MyContentCotainer = styled.div`
  width: 100%;
  height: 83%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;
const MyContentNameWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 5px;
`;

const MyProjectName = styled.input`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'S-CoreDream-3Light';
  text-align: left;
  margin: 25px;
  padding: 5px 10px;
  background-color: ${brightSubColor};
  outline: none;
  border: none;
  border-bottom: 2px solid #777;
  width: 400px;
`;

const MyLeftContent = styled.div`
  width: 79%;
  height: 100%;
  background-color: ${brightSubColor};
  border: 1px solid #777;
  border-radius: 10px;
`;

const MyP = styled.p`
  margin: auto 1% auto 0;
  text-align: left;
  color: #5f5f5f;
`;

const MyGithubInput = styled.input`
  display: block;
  font-size: 1rem;
  width: 90%;
  height: 45px;
  margin: auto;
  box-sizing: border-box;
  padding-left: 55px;
  border: none;
  border-radius: 10px;
  outline: none;
  color: #777;
`;

const MyDivRelative = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
`;

const MyGithubLogo = styled.img`
  width: 40px;
  position: absolute;
  top: 3px;
  left: 45px;
`;
const MyConnectBtn = styled.button`
  position: absolute;
  right: 45px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  font-weight: 700;
  width: 95px;
  padding: 9px 0px;
  background-color: ${connectColor};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: ${hoverConnectColor};
  }
`;
//

const MyProjectInfoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const MyInfoLeftWrap = styled.div`
  width: 40%;
`;
export default function CreateWorkspace() {
  const navigation = useNavigate();
  return (
    <MySectionContainer>
      <MyTitleWrap>
        <div>
          <MyNewWorkspaceTitle>New Workspace</MyNewWorkspaceTitle>
          <MyBar />
        </div>
        <div>
          <MyResetButton>Reset</MyResetButton>
          <MySignupButton onClick={() => navigation('/workspace')}>
            Submit
          </MySignupButton>
        </div>
      </MyTitleWrap>
      <MyContentCotainer>
        <MyLeftContent>
          <MyContentNameWrap>
            <MyProjectName type="text" placeholder="Name" />
            <MyP>
              Private
              <input checked type="radio" name="sort" />
            </MyP>
            <MyP>
              Company
              <input type="radio" name="sort" />
            </MyP>
          </MyContentNameWrap>
          <MyDivRelative>
            <MyGithubLogo src="/images/icon/github.png" />
            <MyGithubInput
              type="text"
              placeholder="Github Repository Address"
            />
            <MyConnectBtn>Connect</MyConnectBtn>
          </MyDivRelative>
          {/* 깃허브 주소 밑에 부분시작 */}
          <MyProjectInfoWrap>
            <MyInfoLeftWrap>
              <Select />
              <Calendar />
            </MyInfoLeftWrap>
            <AddMember />
          </MyProjectInfoWrap>
        </MyLeftContent>
        {/* 여기는 오른쪽 초대 멤버 */}
        <InvitedMember />
      </MyContentCotainer>
    </MySectionContainer>
  );
}
