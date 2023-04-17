import React, { useState } from 'react';
import styled from 'styled-components';
import menu from '../../../assets/images/menu.png';
import NewTask from './NewTask';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { deleteItem } from '../../../store/modules/workspace';
import ProgressItem from './ProgressItem';

// Color Variables
const contentColor = '#fff';
const subColor = '#cbcbcb';

// Styled Components
const MyTitle = styled.p`
  font-size: ${props => props.fontSize};
  font-family: 'LINESeedKR-Bd';

  &:hover {
    background-color: ${subColor};
  }
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
  height: 30px;
  margin: 0 0 20px 0;
  cursor: pointer;

  & > p {
    padding: 8px 5px 9px 8px;
  }
`;

export default function KanbanProgress({
  workflowList,
  progress,
  icon,
  handleRender,
}) {
  const [status, setStatus] = useState(false);
  const workspaceList = useSelector(state => state.workspace.workspaceList);
  const dispatch = useDispatch();

  // 프로그레스명으로 DB 데이터를 구분하는 함수
  const findProgress = progress => {
    let specificProgress;
    if (progress === 'Request') {
      specificProgress = workspaceList[0].workflow.requestList;
    } else if (progress === 'In Progress') {
      specificProgress = workspaceList[0].workflow.inProgressList;
    } else if (progress === 'In Review') {
      specificProgress = workspaceList[0].workflow.inReviewList;
    } else if (progress === 'Blocked') {
      specificProgress = workspaceList[0].workflow.blockedList;
    } else {
      specificProgress = workspaceList[0].workflow.completedList;
    }

    return specificProgress;
  };

  // react dnd
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: '1',
    drop: item => {
      let list = findProgress(progress);
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
      const specificProgress = findProgress(progress);
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
  const brightSubColor = '#e9e4f5';
  let backColor = isOver ? `${brightSubColor}` : '';
  return (
    <div
      ref={drop}
      style={{
        overflowY: 'auto',
        backgroundColor: backColor,
      }}
    >
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

      {status && <NewTask progress={progress} handleRender={handleRender} />}
      {workflowList?.map((el, idx) => {
        console.log('el: ', el);
        return (
          <ProgressItem
            key={el.id}
            id={el.id}
            item={el} //각각의 아이템 정보를 객체로 전달
            workflowList={workflowList}
            progress={progress}
            handleRender={handleRender}
          />
        );
      })}
    </div>
  );
}
