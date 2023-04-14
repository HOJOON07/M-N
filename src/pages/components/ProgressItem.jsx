import React, { useRef, useState } from 'react';
import defaultProfile from '../../assets/images/default-profile.png';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { addList, subtractList } from '../../store/modules/workspace';
import { deleteItem, modifyItem } from '../../store/modules/workspace';
import styled from 'styled-components';

// 드롭 된 아이템 구분용 전역 변수
let dropItem = null;

// Color Variables
const contentColor = '#fff';
const subColor = '#cbcbcb';

// Styled Components
const MyTaskContainer = styled.div`
  position: relative;
  border: 1px solid #bcc2d1;
  border-radius: 5px;
  background-color: ${contentColor};
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

// 콘텐츠 수정 시, 적용되는 Styled
const MyContentMA = styled.div`
  padding: 10px;
  & > p {
    margin-bottom: 10px;
  }
`;
const MyContentModify = styled.input`
  width: 80%;
  height: 60px;
`;
const MyDateMA = styled.div`
  padding: 10px;
  & > div {
    display: flex;
    align-items: center;

    & > p {
      margin: 0 10px 10px 0;
    }
  }
`;
const MyImportantMA = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;

  & > p {
    margin-right: 10px;
  }
`;

export default function ProgressItem({ workflowList, item, id, progress }) {
  const [modify, setModify] = useState(false);
  const workspaceList = useSelector(state => state.workspace.workspaceList);
  const dispatch = useDispatch();
  const contentRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  let contentInput, startDateInput, endDateInput, checkedImportance;
  const selectList = ['high', 'medium', 'low'];
  const [selected, setSelected] = useState(item.importance);

  const selectHandler = e => {
    setSelected(e.target.value);
  };
  const selectedDragItem = useRef(null);
  const droppedItem = useRef(null);

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
            addList(dropResult.name, selectedDragItem.current, dropItem)
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

  // const findDropItem = (id, progress) => {
  //   let dropItem = null;
  //   for (const ws of workspaceList) {
  //     let specificProgress;
  //     if (progress === 'Request') {
  //       specificProgress = ws.workflow.todoList;
  //     } else if (progress === 'In Progress') {
  //       specificProgress = ws.workflow.inprogressList;
  //     } else if (progress === 'In Review') {
  //       specificProgress = ws.workflow.inreviewList;
  //     } else if (progress === 'Blocked') {
  //       specificProgress = ws.workflow.blockedList;
  //     } else {
  //       specificProgress = ws.workflow.doneList;
  //     }

  //     if (dropItem) {
  //       droppedItem.current = dropItem;
  //       console.log(droppedItem.current, 'dsds');
  //     }
  //   }
  // };

  // tetz, 드랍 된 아이템의 배열 순서를 찾아내는 함수
  const findDroppedItem = (id, progress) => {
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

      // tetz, 아무도 없는 바닥에 올려 놓았을 경우 id 가 null 이 뜨므로, null 이 아닌 경우에만
      // index 값을 찾아서 dropItem 전역 변수에 업데이트
      if (id !== null) {
        dropItem = specificProgress.findIndex(item => item.id === id);
        // 다만 첫번째 아이템이 드롭이 되면, findIndex 함수가 null 을 반환하므로, 이 경우에는 index 가 0 인 케이스
        if (dropItem === null) dropItem = 0;
      } else {
        // 바닥에 드랍한 경우는 null 로 전달
        dropItem = null;
      }

      // droppedItemTemp = specificProgress.findIndex(item => item.id === id);
      // if (droppedItemTemp !== null) droppedItem.current = droppedItemTemp;
      // console.log('함수 안', droppedItem.current);
    }
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
        startDateInput = startDateRef.current.value;
        endDateInput = endDateRef.current.value;
        checkedImportance = selected;
      }
      payload = {
        workspaceId: workspace.id,
        selectedItem: selectedItem,
        content: contentInput,
        startDate: startDateInput,
        endDate: endDateInput,
        importance: checkedImportance,
        progress,
      };
      if (modify) dispatch(modifyItem(payload));
    }
  };

  let contentSpace, dateSpace, importantSpace;
  if (modify === false) {
    contentSpace = <MyContent>{item.content}</MyContent>;
    dateSpace = (
      <MyCreateData>
        {item.startDate} ~ {item.endDate}
      </MyCreateData>
    );
    importantSpace = (
      <MyImportanceButton {...item}>{item.importance}</MyImportanceButton>
    );
  } else {
    contentSpace = (
      <MyContentMA>
        <p>내용: </p>
        <MyContentModify defaultValue={item.content} ref={contentRef} />
      </MyContentMA>
    );
    dateSpace = (
      <MyDateMA>
        <div>
          <p>시작일 : </p>
          <input type="date" defaultValue={item.startDate} ref={startDateRef} />
        </div>
        <br />
        <div>
          <p>종료일 : </p>
          <input type="date" defaultValue={item.endDate} ref={endDateRef} />
        </div>
      </MyDateMA>
    );

    importantSpace = (
      <MyImportantMA>
        <p>중요도 : </p>
        <select onChange={selectHandler} value={selected}>
          {selectList.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </MyImportantMA>
    );
  }

  return (
    <MyTaskContainer
      id={id}
      ref={dragRef}
      progress={progress}
      draggable
      key={id}
      onDragStart={() => findClickItem(id, progress)}
      onDrop={() => findDroppedItem(id, progress)}
      style={modify ? { height: '230px' } : { height: '70px' }}
    >
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
