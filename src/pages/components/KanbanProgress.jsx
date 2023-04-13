import React, { useState } from 'react';
import styled from 'styled-components';
import menu from '../../assets/images/menu.png';
import defaultProfile from '../../assets/images/default-profile.png';
import NewTask from './NewTask';
import { useDispatch, useSelector } from 'react-redux';

import { changeOrder } from '../../store/modules/workspace';
import { useRef } from 'react';

import { useDrag, useDrop } from 'react-dnd';
import { addList, subtractList } from '../../store/modules/workspace';
import { deleteItem } from '../../store/modules/workspace';
import ProgressItem from './ProgressItem';


// Color Variables
const contentColor = '#fff';
const subColor = '#cbcbcb';

// Styled Components
const MyTitle = styled.p`
  font-size: ${props => props.fontSize};
  font-family: 'LINESeedKR-Bd';
`;

const MyProgressTitle = styled.div`
  margin: 20px 0;
  & > div {
    display: flex;
    & > p {
      margin-right: 10px;
    }
  }
`;

const MyMenuBar = styled.img`
  position: absolute;
  right: 5px;
  top: 20px;
  width: 15px;
  height: 15px;
`;

const MyTask = styled.div`
  border: 1px solid #bcc2d1;
  border-radius: 5px;
  background-color: ${contentColor};
  width: 95%;
  height: 30px;
  margin: 0 0 20px 0;
  cursor: pointer;

  & > p {
    padding: 8px 5px 0 8px;
  }
`;

export default function KanbanProgress({ workflowList, progress, icon }) {
  const [status, setStatus] = useState(false);
  const workspaceList = useSelector(state => state.workspace.workspaceList);
  const dispatch = useDispatch();

  // react dnd
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: '1',
    drop: item => {
      let list = [];
      switch (progress) {
        case 'Request':
          list = workspaceList[0].workflow.todoList;
          break;
        case 'In Progress':
          list = workspaceList[0].workflow.inprogressList;
          break;
        case 'In Review':
          list = workspaceList[0].workflow.inreviewList;
          break;
        case 'Blocked':
          list = workspaceList[0].workflow.blockedList;
          break;
        case 'Completed':
          list = workspaceList[0].workflow.doneList;
          break;
        default:
          break;
      }
      return { item, name: progress, list: list };
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

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

  return (
    <div ref={drop} style={{ overflowY: 'auto' }}>
      <MyProgressTitle>
        <div>
          <p>{icon}</p>
          <MyTitle fontSize="16px">{progress}</MyTitle>
        </div>
        <MyMenuBar src={menu} alt="menu-bar" />
      </MyProgressTitle>
      <MyTask>
        <MyTitle
          fontSize="13px"
          onClick={() => {
            setStatus(el => !el);
          }}
          name={progress}
        >
          ➕ Add New Task
        </MyTitle>
      </MyTask>
      {status && <NewTask progress={progress} />}
      {workflowList.map((el, idx) => {
        return (
          <ProgressItem
            key={el.id}
            id={el.id}
            item={el} //각각의 아이템 정보를 객체로 전달
            workflowList={workflowList}
            progress={progress}
          />
        );
      })}
    </div>
  );
}
