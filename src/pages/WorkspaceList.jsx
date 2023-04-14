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
  height: 100vh;
  margin: auto;
`;

const MySpaceList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MySpaceWord = styled.div`
  display: flex;
  margin-top: 10px;
`;
const MySpaceListMain = styled.p`
  font-family: 'LINESeedKR-Bd';
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-top: 40px;
`;
const MyBar = styled.div`
  width: 75px;
  height: 8px;
  background-color: ${mainColor};
  border-radius: 5px;
  margin: 10px 0 25px;
`;
const MySpaceListSub = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-top: 63px;
  margin-left: 10px;
`;

const MySpaceContent = styled.div`
  display: flex;
  justify-content: center;
`;
const MySpaceInput = styled.input`
  font-size: 1.1rem;
  width: 251px;
  height: 52px;
  margin-top: 50px;
  color: #777;
  box-sizing: border-box;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid #516974;
  border-radius: 6px;
  outline: none;
  &:focus {
    border: 2px solid ${mainColor};
  }
`;

const MySpaceMagify = styled.img`
  position: absolute;
  font-size: 1rem;
  width: 35px;
  height: 35px;
  top: 58px;
  right: 7px;
`;
const MySpaceNewBtn = styled.button`
  width: 251px;
  height: 52px;

  margin: 50px 0 0 15px;
  box-sizing: border-box;
  font-size: 1.1rem;
  background-color: ${mainColor};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  color: white;
  transition: 0.4s;

  &:hover {
    background-color: ${hoverMainColor};
  }
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
          <div>
            <MySpaceListMain>Workspace List</MySpaceListMain>
            <MyBar />
          </div>
          <MySpaceListSub>latest</MySpaceListSub>
        </MySpaceWord>
        <MySpaceContent>
          <div style={{ position: 'relative' }}>
            <MySpaceInput type="text" placeholder="Search by Workspace" />
            <MySpaceMagify src={mymagnify} alt="돋보기" />
          </div>
          <MySpaceNewBtn> New Workspace</MySpaceNewBtn>
        </MySpaceContent>
      </MySpaceList>
      {!dataArr ? (
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
