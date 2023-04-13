import React, { useRef, useState } from 'react';
import defaultProfile from '../../assets/images/default-profile.png';
import NewTask from './NewTask';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { addList, subtractList } from '../../store/modules/workspace';
import { deleteItem, modifyItem } from '../../store/modules/workspace';
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
  const [modify, setModify] = useState(false);
  const workspaceList = useSelector(state => state.workspace.workspaceList);
  const dispatch = useDispatch();
  const contentRef = useRef();
  const endDateRef = useRef();
  let contentInput, endDateInput, checkedImportance;
  // const [importance, setImportance] = useState('');
  // const handleImportanceChange = e => {
  //   setImportance(e.target.value);
  // };
  const selectList = ['high', 'medium', 'low'];
  const [selected, setSelected] = useState(item.importance);

  const selectHandler = e => {
    setSelected(e.target.value);
  };

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
      if (modify) {
        // useRef 값 받아오기
        contentInput = contentRef.current.value;
        endDateInput = endDateRef.current.value;
        checkedImportance = selected;

        // 값 바꿔치기
        item.content = contentInput;
        item.endDate = endDateInput;
        item.importance = checkedImportance;
      }
      payload = {
        workspaceId: workspace.id,
        selectedItem: selectedItem,
      };
      console.log(payload);
      // dispatch(modifyItem(payload));
    }
  };
  const startDate = item.createDate.split(':')[0];

  let contentSpace, dateSpace, importantSpace;
  if (modify === false) {
    contentSpace = <MyContent>{item.content}</MyContent>;
    dateSpace = (
      <MyCreateData>
        {startDate} ~ {item.endDate}
      </MyCreateData>
    );
    importantSpace = (
      <MyImportanceButton {...item}>{item.importance}</MyImportanceButton>
    );
  } else {
    contentSpace = <input defaultValue={item.content} ref={contentRef} />;
    dateSpace = (
      <input type="date" defaultValue={item.endDate} ref={endDateRef} />
    );

    importantSpace = (
      <div>
        <select onChange={selectHandler} value={selected}>
          {selectList.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <MyTaskContainer progress={progress} draggable key={id}>
      <div key={id}>
        {contentSpace}
        <div>
          <span
            onClick={() => {
              updateContentClickHandler(id, progress);
              setModify(state => !state);
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
        {dateSpace}
        <div>
          {importantSpace}
          <img src={defaultProfile} alt="기본 프로필 이미지" />
        </div>
      </div>
    </MyTaskContainer>
  );
}
