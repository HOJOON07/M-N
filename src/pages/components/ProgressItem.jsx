import React, { useState } from 'react';
import defaultProfile from '../../assets/images/default-profile.png';
import NewTask from './NewTask';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { addList, subtractList } from '../../store/modules/workspace';
import { deleteItem } from '../../store/modules/workspace';
import styled from 'styled-components';
import { useRef } from 'react';

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
    right: 8px;
    bottom: 8px;
    width: 20px;
    height: 20px;
  }

  & span:first-child {
    position: absolute;
    display: block;
    font-size: 13px;
    right: 26px;
    top: 8px;
  }
  & span:last-child {
    position: absolute;
    display: block;
    font-size: 13px;
    right: 8px;
    top: 8px;
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
  right: 35px;
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
  bottom: 8px;
  left: 8px;
  transition: 0.2s;

  &:hover {
    background-color: 'black';
  }
`;

export default function ProgressItem({ workflowList, item, id, progress }) {
  const [status, setStatus] = useState(false);
  const workspaceList = useSelector(state => state.workspace.workspaceList);
  const dispatch = useDispatch();
  const selectedDragItem = useRef(null);
  //react dnd
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: '1',
    item: {
      workflowList: workflowList,
      progress: progress,
    },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        const subtractLists = item.workflowList; // 빼줄 리스트
        const addLists = dropResult.list; // 더해줄 리스트
        if (selectedDragItem.current) {
          dispatch(
            subtractList(item.progress, selectedDragItem.current, subtractLists)
          );
          dispatch(
            addList(dropResult.name, selectedDragItem.current, addLists)
          );
        }
      }
    },
  }));

  const findClickItem = (id, progress) => {
    let selectedItem = null;
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
        selectedDragItem.current = selectedItem;
      }
    }
  };

  /** 버튼 클릭 시 특정 createDate에 해당하는 배열 찾기 함수 */
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
  const startDate = item.createDate.split(':')[0];
  return (
    <MyTaskContainer
      ref={dragRef}
      progress={progress}
      draggable
      key={id}
      onDragStart={() => findClickItem(id, progress)}
    >
      <div key={id}>
        <MyContent>{item.content}</MyContent>
        <div>
          <span>✏️</span>
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
