import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import KanbanProgress from './KanbanProgress';

// Color Variables
const backColor = '#eef1f5';

// Styled Components
const MyTitle = styled.p`
  font-size: ${props => props.fontSize};
  font-family: 'LINESeedKR-Bd';
`;

const MySubTitle = styled.p`
  font-size: ${props => props.fontSize};
  text-decoration-line: underline;
`;

const MyTitleArea = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  margin: 10px;
  & > p {
    margin: 10px;
  }
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
  const workspaceList = useSelector(state => state.workspace.workspaceList)[0];
  const workflowList = workspaceList.workflow;
  const iconList = ['✉️', '🔨', '📌', '🔒', '🎉'];
  return (
    <div>
      <MyTitleArea>
        <MyTitle fontSize="25px">Workflow</MyTitle>
        <MySubTitle fontSize="14px">{workspaceList.name}</MySubTitle>
      </MyTitleArea>
      <MyProgressArea>
        <KanbanProgress
          workflowList={workflowList.todoList}
          progress="Request"
          icon={iconList[0]}
        />
        <KanbanProgress
          workflowList={workflowList.inprogressList}
          progress="In Progress"
          icon={iconList[1]}
        />
        <KanbanProgress
          workflowList={workflowList.inreviewList}
          progress="In Review"
          icon={iconList[2]}
        />
        <KanbanProgress
          workflowList={workflowList.blockedList}
          progress="Blocked"
          icon={iconList[3]}
        />
        <KanbanProgress
          workflowList={workflowList.doneList}
          progress="Completed"
          icon={iconList[4]}
        />
      </MyProgressArea>
    </div>
  );
}
