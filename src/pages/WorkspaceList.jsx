import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mymagnify from '../images/magnify.png';

import Workspace from './components/workspaceList/Workspace';

// Color Variables
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';
const progressColor = '#9781dd';

const MyContainer = styled.div`
  max-width: 1200px;
  height: 70vh;
  margin: auto;
`;

const MySpaceList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MySpaceWord = styled.span`
  display: flex;
  margin-top: 10px;
`;
const MySpaceListMain = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;
const MySpaceListSub = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-top: 60px;
  margin-left: 10px;
`;

const MySpaceContent = styled.span`
  display: flex;
  justify-content: center;
`;
const MySpaceInput = styled.input`
  text-align: center;
  font-size: 1.1rem;
  width: 251px;
  height: 58px;
  margin-top: 50px;
  margin-left: 150px;
  box-sizing: border-box;
  border: 1px solid #516974;
  border-radius: 6px;
  outline: none;
  &:focus {
    border-color: #ffdb29;
  }
`;

const MySpaceMagify = styled.img`
  display: flex;
  position: absolute;
  font-size: 1rem;
  width: 25px;
  height: 25px;
  margin-top: 60px;
  margin-left: 50px;
`;
const MySpaceNewBtn = styled.button`
  width: 251px;
  height: 58px;
  margin-left: 10px;
  margin-top: 50px;
  box-sizing: border-box;
  font-size: 1.1rem;
  background-color: ${mainColor};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  color: white;
`;

export default function Workspacelist() {
  const [dataArr, setDataArr] = useState([]);
  const getAllWS = async () => {
    try {
      const resGetAllWS = await fetch('http://localhost:8001/workspace', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (resGetAllWS.status !== 200) return 'fail';
      const data = await resGetAllWS.json();
      console.log(data);
      setDataArr(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllWS();
  }, []);
  return (
    <MyContainer>
      <MySpaceList>
        <MySpaceWord>
          <MySpaceListMain>Workspace List</MySpaceListMain>
          <MySpaceListSub>latest</MySpaceListSub>
        </MySpaceWord>
        <MySpaceContent>
          <MySpaceInput type="text" placeholder="Search by Workspace" />
          <MySpaceMagify src={mymagnify} alt="돋보기" />
          <MySpaceNewBtn> New Workspace</MySpaceNewBtn>
        </MySpaceContent>
      </MySpaceList>
      {dataArr ? (
        dataArr.map((el, idx) => (
          <Workspace
            workspace_name={el.workspace_name}
            workspace_category={el.workspace_category}
            workspace_type={el.workspace_type}
            workspace_startDate={el.workspace_startDate}
            workspace_endDate={el.workspace_endDate}
            githubRepository={el.githubRepository}
            member={el.member}
            key={idx}
            progressPercent={
              el.workflow.doneList.length /
              (el.workflow.todoList.length +
                el.workflow.inprogressList.length +
                el.workflow.doneList.length)
            }
          />
        ))
      ) : (
        <Workspace />
      )}
    </MyContainer>
  );
}
