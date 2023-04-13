import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import menu from '../../assets/images/menu.png';
import defaultProfile from '../../assets/images/default-profile.png';
import NewTask from './NewTask';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { addList, subtractList } from '../../store/modules/workspace';

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
  //Workflow Drag
  // const [originPos, setOriginPos] = useState({ x: 0, y: 0 });
  // const [clientPos, setClientPos] = useState({ x: 0, y: 0 });
  // const [pos, setPos] = useState({ top: 100, left: 0 });
  // const draggingRef = useRef(null);
  // const draggingOverRef = useRef(null);
  // const dispatch = useDispatch();

  // const onDragOver = e => {
  //   e.preventDefault();
  // };

  // const onDragStart = e => {
  //   e.dataTransfer.effectAllowed = 'move';
  //   const originPosTemp = { ...originPos };
  //   originPosTemp.x = e.target.offsetLeft; //칸반보드 컨텐츠 부분부터
  //   originPosTemp.y = e.target.offsetTop;
  //   setOriginPos(originPosTemp);
  //   console.log(originPosTemp);

  //   const clientPosTemp = { ...clientPos };
  //   clientPosTemp.x = e.clientX; // 브라우저 왼쪽 상단부터
  //   clientPosTemp.y = e.clientY;
  //   setClientPos(clientPosTemp);
  //   console.log('clientPosTemp', clientPosTemp);
  // };

  // const onDrag = e => {
  //   const PosTemp = { ...pos };
  //   console.log(pos.left, pos.top);
  //   // 자신이 위치한 칸반섹션 부터
  //   PosTemp.left = e.target.offsetLeft + e.clientX - clientPos.x;
  //   PosTemp.top = e.target.offsetTop + e.clientY - clientPos.y;
  //   setPos(PosTemp);

  //   console.log(PosTemp);

  //   const clientPosTemp = { ...clientPos };
  //   clientPosTemp.x = e.clientX;
  //   clientPosTemp.y = e.clientY;
  //   setClientPos(clientPosTemp);
  // };

  // let isClick = false;
  // // 보드판 내용이 쌓이게 만드는 함수...
  // let topPos = idx => {
  //   const init = 100;
  //   const diff = 90;
  //   isClick = true;
  //   return idx > 0 ? idx * diff + init : init;
  // };

  // const onDragEnd = e => {
  //   e.dataTransfer.dropEffect = 'move';
  //   // if (!isInsideDragArea(e)) {
  //   //   const posTemp = { ...pos };
  //   //   posTemp.left = originPos.x;
  //   //   posTemp.top = originPos.y;
  //   //   setPos(posTemp);
  //   // }
  // };

  // 드래그앤드롭 시안2
  // const onDragStart = (e, idx, progress) => {
  //   console.log('onDragging');
  //   draggingRef.current = idx;
  //   // console.log('  draggingRef.current', draggingRef.current);
  //   // console.log(' onDragStart progress', progress); //드롭된 놈
  // };

  // const onDragging = (e, idx, progress) => {
  //   console.log('onDragging');
  //   draggingOverRef.current = idx;
  //   // const copyList = [...workflowList];
  //   // const draggingItem = copyList[draggingOverRef.current];
  //   // console.log('draggingOverRef.current ', draggingOverRef.current);
  //   // console.log(' onDragging progress', progress); //드랍위치에 있는 놈
  //   // copyList.splice(draggingRef.current, 1);
  //   // copyList.splice(draggingOverRef.current, 0, draggingItem);

  //   // let newIdx = draggingOverRef.current;
  //   // let oldIdx = draggingItem.current;
  //   // draggingRef.current = draggingOverRef.current;
  //   // draggingOverRef.current = null;

  //   // dispatch(
  //   //   changeOrder({
  //   //     newIdx,
  //   //     oldIdx,
  //   //     draggingItem,
  //   //     workspaceId: 0,
  //   //     progress,
  //   //     copyList,
  //   //   })
  //   // );
  // };

  // const onDrop = (e, idx, progress) => {
  //   console.log('onDrop');
  //   const copyList = [...workflowList];
  //   const draggingItem = {
  //     progress: progress,
  //     item: copyList[draggingOverRef.current],
  //   };
  //   // console.log('draggingOverRef.current ', draggingOverRef.current);
  //   // console.log(' onDragging progress', progress); //드랍위치에 있는 놈
  //   // copyList.splice(draggingRef.current, 1);
  //   // copyList.splice(draggingOverRef.current, 0, draggingItem);

  //   let newIdx = draggingOverRef.current;
  //   let oldIdx = draggingItem.current;
  //   draggingRef.current = draggingOverRef.current;
  //   draggingOverRef.current = null;

  //   dispatch(
  //     changeOrder({
  //       newIdx,
  //       oldIdx,
  //       draggingItem,
  //       workspaceId: 0,
  //       progress,
  //       copyList,
  //     })
  //   );
  // };

  // react dnd
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: '1',
    item: { workflowList: workflowList, progress: progress },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
    end: (item, monitor) => {
      console.log('monitor', monitor.getItem());
      const dropResult = monitor.getDropResult();
      console.log('선택된 프로그레스', item); // 선택 프로그레스
      if (dropResult) {
        console.log('드롭된 프로그레스', dropResult.name); // 드롭 프로그레스

        const subtractLists = item.workflowList; // 빼줄 리스트
        console.log(subtractLists);
        const addLists = dropResult.list; // 더해줄 리스트
        console.log(addLists);

        // 에러
        dispatch(subtractList(item.progress, subtractLists));
        dispatch(addList(dropResult.name, dropResult.item, addLists));

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
      console.log();
      // console.log('드롭 위치', progress);
      switch (progress) {
        case 'Request':
          list = workspaceList[0].workflow.todoList;
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
  const createDateClickHandler = (createDate, progress) => {
    buttonClickHandler(createDate, progress);
  };

  const buttonClickHandler = (createDate, progress) => {
    const workspace = workspaceList.find(workspace => {
      let specificProgress;
      if (progress === 'Request') {
        specificProgress = workspace.workflow.todoList;
      } else if (progress === 'In Progress') {
        specificProgress = workspace.workflow.inprogressList;
      } else if (progress === 'In Review') {
        specificProgress = workspace.workflow.inreviewList;
      } else if (progress === 'Blocked') {
        specificProgress = workspace.workflow.blockedList;
      } else {
        specificProgress = workspace.workflow.doneList;
      }
      return specificProgress.some(item => item.createDate === createDate);
    });
    if (workspace) {
      let specificProgress;
      if (progress === 'Request') {
        specificProgress = workspace.workflow.todoList;
      } else if (progress === 'In Progress') {
        specificProgress = workspace.workflow.inprogressList;
      } else if (progress === 'In Review') {
        specificProgress = workspace.workflow.inreviewList;
      } else if (progress === 'Blocked') {
        specificProgress = workspace.workflow.blockedList;
      } else {
        specificProgress = workspace.workflow.doneList;
      }
      const selectedItem = specificProgress.find(
        item => item.createDate === createDate
      );
      console.log(selectedItem);
      // console.log(workspace.workflow);
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
        const startDate = el.createDate.split(':')[0];
        return (
          <MyTaskContainer
            progress={progress}
            draggable
            key={el.createDate}
            ref={dragRef}
            style={{ opacity: isDragging ? '.5' : '1' }}
            // onDragStart={onDragStart}
            // onDrag={onDrag}
            // onDragEnd={onDragEnd}
            // onDragOver={onDragOver}
            // style={{
            //   top: idx > 0 ? topPos(idx) : pos.top,
            //   left: pos.left,
            // }}
            // onDragStart={() => onDragStart(el, idx, progress)}
            // onDragEnter={() => onDragging(el, idx, progress)}
            // onDrop={() => onDrop(el, idx, progress)}
          >
            <div>
              <MyContent>{el.content}</MyContent>
              <div>
                <span>✏️</span>
                <span
                  onClick={() => {
                    createDateClickHandler(el.createDate, progress);
                  }}
                >
                  ❌
                </span>
              </div>
            </div>
            <MyCreateData>
              {startDate} ~ {el.endDate}
            </MyCreateData>
            <div>
              <MyImportanceButton {...el}>{el.importance}</MyImportanceButton>
              <img src={defaultProfile} alt="기본 프로필 이미지" />
            </div>
          </MyTaskContainer>
        );
      })}
    </div>
  );
}
