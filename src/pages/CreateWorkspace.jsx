import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Color Variables
const mainColor = '#623ad6';
const resetColor = '#dc4e4e';
const hoverResetColor = '#f06464';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';

const MySectionContainer = styled.div`
  max-width: 1000px;
  height: 750px;
  margin: 40px auto 0 auto;
  box-sizing: border-box;
`;

const MyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
`;

const MyH2 = styled.h2`
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

const MyLeftName = styled.input`
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

const MyRightName = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;

  margin: 25px 0 30px 0;
`;

const MyRightContent = styled.div`
  width: 16%;
  height: 100%;
  background-color: ${subColor};
  border: 1px solid #777;
  border-radius: 10px;

  margin-left: 25px;
`;

const MyP = styled.p`
  margin: auto 1% auto 0;
  text-align: left;
`;

const MyGithubInput = styled.input`
  display: block;
  width: 90%;
  height: 35px;
  margin: auto;
`;

export default function CreateWorkspace() {
  const navigation = useNavigate();
  return (
    <MySectionContainer>
      <MyDiv>
        <div>
          <MyH2>New Workspace</MyH2>
          <MyBar />
        </div>
        <div>
          <MyResetButton>Reset</MyResetButton>
          <MySignupButton onClick={() => navigation('/workspace')}>
            Submit
          </MySignupButton>
        </div>
      </MyDiv>

      <MyContentCotainer>
        <MyLeftContent>
          <MyDiv>
            <MyLeftName type="text" placeholder="Name" />
            <input checked type="radio" name="sort" />
            <MyP>Private</MyP>
            <input type="radio" name="sort" />
            <MyP>Company</MyP>
          </MyDiv>
          <div>
            <MyGithubInput type="text" placeholder="Github Repository" />
          </div>
        </MyLeftContent>
        <MyRightContent>
          <MyRightName>Invited Member</MyRightName>
        </MyRightContent>
        <div />
      </MyContentCotainer>
    </MySectionContainer>
  );
}
