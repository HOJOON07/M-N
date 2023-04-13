import React, { useState } from 'react';
import styled from 'styled-components';
import menu from '../../assets/images/menu.png';
import defaultProfile from '../../assets/images/default-profile.png';
import NewTask from './NewTask';
import { useDispatch, useSelector } from 'react-redux';
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

const MyTaskContainer = styled.div`
  position: relative;
  border: 1px solid #bcc2d1;
  border-radius: 5px;
  background-color: ${contentColor};
  width: 95%;
  height: 70px;
  display: block;
  cursor: pointer;

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
  color: ${subColor};
  font-size: 10px;
`;

export default function KanbanProgress({ workflowList, progress, icon }) {
  const [status, setStatus] = useState(false);
  const workspaceList = useSelector(state => state.workspace.workspaceList);
  const dispatch = useDispatch();

  // react dnd
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: '1',
    item: {
      workflowList: workflowList,
      progress: progress,
    },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log('선택된 프로그레스', item); // 선택 프로그레스
      if (dropResult) {
        console.log('드롭된 프로그레스', dropResult.name); // 드롭 프로그레스

        const subtractLists = item.workflowList; // 빼줄 리스트
        const addLists = dropResult.list; // 더해줄 리스트

        // 에러
        dispatch(subtractList(item.progress, subtractLists));
        if (selectedDragItem)
          dispatch(addList(dropResult.name, selectedDragItem, addLists));

        switch (dropResult.item.progress) {
          case 'Request':
            return;
          case 'In Progress':
            break;
          case 'In Review':
            break;
          case 'Blocked':
            break;
          case 'Completed':
            break;
          default:
            break;
        }
      }
    },
  }));

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
  let selectedDragItem = null;
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
        console.log(selectedItem, 'selectedItem');
        // 선택된 아이템 을 가지고..?
        selectedDragItem = selectedItem;
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

  return (
    <div ref={drop}>
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
        console.log(el);
        return (
          <ProgressItem
            key={el.id}
            id={el.id}
            workflowList={workflowList}
            progress={progress}
          />
        );
      })}
    </div>
  );
}
