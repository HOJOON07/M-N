import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import menu from '../../assets/images/menu.png';
import defaultProfile from '../../assets/images/default-profile.png';
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
  background-color: ${backColor};
  width: 100%;
  height: 87%;
  display: flex;
  justify-content: space-around;

  & > div {
    border-radius: 5px;
    width: 15%;
    padding: 10px;
  }
`;

export default function Kanban() {
  /** 임시로 특정 워크스페이스(id가 0) 지정 */
  const workspaceList = useSelector(state => state.workspace.workspaceList)[0];
  const workflowList = workspaceList.workflow[0].list;
  const iconList = ['✉️', '🔨', '📌', '🔒', '🎉'];
  // console.log(workspaceList);
  return (
    <div>
      <MyTitleArea>
        <MyTitle fontSize="25px">Workflow</MyTitle>
        <MySubTitle fontSize="14px">{workspaceList.name}</MySubTitle>
      </MyTitleArea>
      <MyProgressArea>
        <KanbanProgress
          workflowList={workflowList.todo}
          progress="Request"
          icon={iconList[0]}
        />
        <KanbanProgress
          workflowList={workflowList.inprogress}
          progress="In Progress"
          icon={iconList[1]}
        />
        <KanbanProgress
          workflowList={workflowList.inreview}
          progress="In Review"
          icon={iconList[2]}
        />
        <KanbanProgress
          workflowList={workflowList.blocked}
          progress="Blocked"
          icon={iconList[3]}
        />
        <KanbanProgress
          workflowList={workflowList.done}
          progress="Completed"
          icon={iconList[4]}
        />
      </MyProgressArea>
    </div>
  );
}
