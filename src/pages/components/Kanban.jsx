import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import KanbanProgress from './KanbanProgress';

// Color Variables
const backColor = '#eef1f5';
const mainColor = '#623ad6';

// Styled Components
const MyTitle = styled.h2`
  margin: 30px 0 10px 10px;
  font-size: 2.5rem;
  font-family: 'LINESeedKR-Bd';
`;

const MyBar = styled.div`
  width: 75px;
  height: 8px;
  background-color: ${mainColor};
  border-radius: 5px;
  margin: 10px 0 15px 10px;
`;

const MySubTitle = styled.p`
  font-size: ${props => props.fontSize};
  margin: 15px 0 0 10px;
  text-decoration-line: underline;
`;

const MyTitleArea = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  margin: 10px;
`;

const MyProgressArea = styled.div`
  width: 100%;

  background-color: ${backColor};

  display: flex;
  justify-content: space-around;

  & > div {
    position: relative;
    border-radius: 5px;
    flex-shrink: 0;
    flex-grow: 1;
    margin: 5px 10px;
    height: 500px;
  }
`;

export default function Kanban() {
  /** 임시로 특정 워크스페이스(id가 0) 지정 */
  // const workspaceList = useSelector(state => state.workspace.workspaceList)[0];
  const workspace = useSelector(state => state.workspace);
  const workflowList = workspace.workflow;
  const iconList = ['✉️', '🔨', '📌', '🔒', '🎉'];

  return (
    <div>
      <MyTitleArea>
        <div>
          <MyTitle>Workflow</MyTitle>
          <MyBar />
        </div>
        <MySubTitle fontSize="14px">{workspace?.name}워크스페이스명</MySubTitle>
      </MyTitleArea>
      <MyProgressArea>
        <KanbanProgress
          workflowList={workflowList?.requestList}
          progress="Request"
          icon={iconList[0]}
        />
        <KanbanProgress
          workflowList={workflowList?.inProgressList}
          progress="In Progress"
          icon={iconList[1]}
        />
        <KanbanProgress
          workflowList={workflowList?.inReviewList}
          progress="In Review"
          icon={iconList[2]}
        />
        <KanbanProgress
          workflowList={workflowList?.blockedList}
          progress="Blocked"
          icon={iconList[3]}
        />
        <KanbanProgress
          workflowList={workflowList?.completedList}
          progress="Completed"
          icon={iconList[4]}
        />
      </MyProgressArea>
    </div>
  );
}
