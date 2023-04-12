import React, { useState } from 'react';
import styled from 'styled-components';
import menu from '../../assets/images/menu.png';
import defaultProfile from '../../assets/images/default-profile.png';
import NewTask from './NewTask';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrder } from '../../store/modules/workspace';

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
  position: absolute;
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
  //Workflow Drag
  const [originPos, setOriginPos] = useState({ x: 0, y: 0 });
  const [clientPos, setClientPos] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ top: 100, left: 0 });

  const kanbanRef = useRef();
  const dispatch = useDispatch();

  const onDragOver = e => {
    e.preventDefault();
  };

  const onDragStart = e => {
    e.dataTransfer.effectAllowed = 'move';
    const originPosTemp = { ...originPos };
    originPosTemp.x = e.target.offsetLeft; //칸반보드 컨텐츠 부분부터
    originPosTemp.y = e.target.offsetTop;
    setOriginPos(originPosTemp);
    console.log(originPosTemp);

    const clientPosTemp = { ...clientPos };
    clientPosTemp.x = e.clientX; // 브라우저 왼쪽 상단부터
    clientPosTemp.y = e.clientY;
    setClientPos(clientPosTemp);
    console.log('clientPosTemp', clientPosTemp);
  };

  const onDrag = e => {
    const PosTemp = { ...pos };
    console.log(pos.left, pos.top);
    // 자신이 위치한 칸반섹션 부터
    PosTemp.left = e.target.offsetLeft + e.clientX - clientPos.x;
    PosTemp.top = e.target.offsetTop + e.clientY - clientPos.y;
    setPos(PosTemp);

    console.log(PosTemp);

    const clientPosTemp = { ...clientPos };
    clientPosTemp.x = e.clientX;
    clientPosTemp.y = e.clientY;
    setClientPos(clientPosTemp);
  };

  let isClick = false;
  // 보드판 내용이 쌓이게 만드는 함수...
  let topPos = idx => {
    const init = 100;
    const diff = 90;
    isClick = true;
    return idx > 0 ? idx * diff + init : init;
  };

  const onDragEnd = e => {
    e.dataTransfer.dropEffect = 'move';
    // if (!isInsideDragArea(e)) {
    //   const posTemp = { ...pos };
    //   posTemp.left = originPos.x;
    //   posTemp.top = originPos.y;
    //   setPos(posTemp);
    // }
  };

  return (
    <div>
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
            draggable
            ref={kanbanRef}
            key={el.createDate}
            onDragStart={onDragStart}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            style={{
              top: idx > 0 ? topPos(idx) : pos.top,
              left: pos.left,
            }}
          >
            <div>
              <MyContent>{el.content}</MyContent>
              <div>
                <span>✏️</span>
                <span>❌</span>
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
