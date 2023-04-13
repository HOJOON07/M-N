import React, { useState } from 'react';
import defaultProfile from '../../assets/images/default-profile.png';
import NewTask from './NewTask';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { addList, subtractList } from '../../store/modules/workspace';
import { deleteItem } from '../../store/modules/workspace';
import styled from 'styled-components';

// Color Variables
const contentColor = '#fff';
const subColor = '#cbcbcb';

// Styled Components
const MyTaskContainer = styled.div`
  position: relative;
  border: 1px solid #bcc2d1;
  border-radius: 5px;
  background-color: ${contentColor};
  width: 95%;
  height: 70px;
  display: block;
  cursor: pointer;
  margin-bottom: 15px;

  & img {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 20px;
    height: 20px;
  }

  & span:first-child {
    position: absolute;
    display: block;
    font-size: 13px;
    right: 22px;
    top: 5px;
  }
  & span:last-child {
    position: absolute;
    display: block;
    font-size: 13px;
    right: 5px;
    top: 5px;
  }
`;

const MyContent = styled.p`
  font-weight: 700;
  position: absolute;
  display: block;
  width: 60%;

  left: 8px;
  top: 8px;
`;

const MyCreateData = styled.p`
  position: absolute;
  right: 2vw;
  bottom: 9px;
  color: ${subColor};
  font-size: 10px;
`;

const MyImportanceButton = styled.button`
  padding: 5px 10px;
  box-sizing: border-box;
  font-size: 10px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  background-color: ${props =>
    props.importance === 'high'
      ? '#EB5851'
      : props.importance === 'medium'
      ? '#F7CF4C'
      : '#3862B1'};
  color: white;
  cursor: pointer;

  position: absolute;
  bottom: 5px;
  left: 5px;
  transition: 0.2s;

  &:hover {
    background-color: 'black';
  }
`;

export default function ProgressItem({ workflowList, item, id, progress }) {
  const [status, setStatus] = useState(false);
  const workspaceList = useSelector(state => state.workspace.workspaceList);
  const dispatch = useDispatch();

  /** 버튼 클릭 시 특정 id에 해당하는 배열 찾기 함수 */
  const createDateClickHandler = (id, progress) => {
    buttonClickHandler(id, progress);
  };

  const buttonClickHandler = (id, progress) => {
    let payload = {};
    let selectedItem = null;
    let workspace = null;
    for (const ws of workspaceList) {
      let specificProgress;
      if (progress === 'Request') {
        specificProgress = ws.workflow.todoList;
      } else if (progress === 'In Progress') {
        specificProgress = ws.workflow.inprogressList;
      } else if (progress === 'In Review') {
        specificProgress = ws.workflow.inreviewList;
      } else if (progress === 'Blocked') {
        specificProgress = ws.workflow.blockedList;
      } else {
        specificProgress = ws.workflow.doneList;
      }
      selectedItem = specificProgress.find(item => item.id === id);
      if (selectedItem) {
        workspace = ws;
        break;
      }
    }
    if (workspace && selectedItem) {
      payload = {
        workspaceId: workspace.id,
        selectedId: selectedItem.id,
      };
      dispatch(deleteItem(payload));
    }
  };

  const updateContentClickHandler = (id, progress) => {
    updateHandler(id, progress);
  };

  const updateHandler = (id, progress) => {
    let payload = {};
    let selectedItem = null;
    let workspace = null;
    for (const ws of workspaceList) {
      let specificProgress;
      if (progress === 'Request') {
        specificProgress = ws.workflow.todoList;
      } else if (progress === 'In Progress') {
        specificProgress = ws.workflow.inprogressList;
      } else if (progress === 'In Review') {
        specificProgress = ws.workflow.inreviewList;
      } else if (progress === 'Blocked') {
        specificProgress = ws.workflow.blockedList;
      } else {
        specificProgress = ws.workflow.doneList;
      }
      selectedItem = specificProgress.find(item => item.id === id);
      if (selectedItem) {
        workspace = ws;
        break;
      }
    }
    if (workspace && selectedItem) {
      payload = {
        workspaceId: workspace.id,
        selectedItem: selectedItem,
      };
      console.log(payload);
      // console.log(selectedItem.content);
    }
  };
  const startDate = item.createDate.split(':')[0];
  return (
    <MyTaskContainer progress={progress} draggable key={id}>
      <div key={id}>
        <MyContent>{item.content}</MyContent>
        <div>
          <span
            onClick={() => {
              updateContentClickHandler(id, progress);
              setStatus(status => !status);
              console.log('status', status);
            }}
          >
            ✏️
          </span>
          <span
            onClick={() => {
              createDateClickHandler(id, progress);
            }}
          >
            ❌
          </span>
        </div>
        <MyCreateData>
          {startDate} ~ {item.endDate}
        </MyCreateData>
        <div>
          <MyImportanceButton {...item}>{item.importance}</MyImportanceButton>
          <img src={defaultProfile} alt="기본 프로필 이미지" />
        </div>
      </div>
    </MyTaskContainer>
  );
}
