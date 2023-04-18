import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import mymagnify from '../assets/images/search.png';
import Workspace from './components/workspaceList/Workspace';
import { useNavigate } from 'react-router-dom';

// Color Variables
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';
const progressColor = '#9781dd';
const bookmarkDefault = `#ddd`;

const MyContainer = styled.div`
  max-width: 1200px;
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
  width: 27px;
  height: 27px;
  top: 62px;
  right: 9px;
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
  const navigation = useNavigate();
  const [dataArr, setDataArr] = useState([]);

  const [inputs, setInputs] = useState(''); //검색 기능을 위한 state
  const user_id = localStorage.getItem('user_id');
  const getAllWS = async () => {
    try {
      const resGetAllWS = await fetch(
        `http://localhost:8001/workspace/${user_id}/workspace`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (resGetAllWS.status !== 200) return 'fail';
      const data = await resGetAllWS.json();

      setDataArr(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllWS();
  }, []);

  const getInputs = e => {
    e.preventDefault();
    setInputs(e.target.value.toLowerCase());
  };

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
            {/* 검색기능 작업 */}
            <MySpaceInput
              type="text"
              placeholder="Search by Workspace"
              onChange={getInputs}
              maxLength="13"
            />
            <MySpaceMagify src={mymagnify} alt="돋보기" />
          </div>
          <MySpaceNewBtn onClick={() => navigation('/create')}>
            New Workspace
          </MySpaceNewBtn>
        </MySpaceContent>
      </MySpaceList>
      {dataArr ? (
        dataArr
          .filter(e =>
            e.workspace_name
              ? e.workspace_name.toLowerCase().includes(inputs)
              : ''
          )
          .reverse()
          .map((el, idx) => (
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
                el.workflow.completedList.length /
                (el.workflow.requestList.length +
                  el.workflow.inProgressList.length +
                  el.workflow.completedList.length)
              }
              _id={el._id}
            />
          ))
      ) : (
        <Workspace />
      )}
    </MyContainer>
  );
}
