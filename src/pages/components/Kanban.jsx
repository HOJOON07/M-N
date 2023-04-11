import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import menu from '../../assets/images/menu.png';
import defaultProfile from '../../assets/images/default-profile.png';

// Color Variables
const backColor = '#eef1f5';
const contentColor = '#fff';
const subColor = '#cbcbcb';

// Styled Components
const MyTitle = styled.p`
  font-size: ${props => props.fontSize};
  font-family: 'LINESeedKR-Bd';
`;

const MySubTitle = styled.p`
  font-size: ${props => props.fontSize};
  text-decoration-line: underline;
`;

const MyMenuBar = styled.img`
  width: 15px;
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
  transition: 0.2s;

  &:hover {
    background-color: 'black';
  }
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

const MyProgressTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin-bottom: 15px;
  & > div {
    display: flex;
    & > p {
      margin-right: 10px;
    }
  }
`;

const MyTask = styled.div`
  border: 1px solid #bcc2d1;
  border-radius: 5px;
  background-color: ${contentColor};
  padding: 10px 10px 5px;
  margin-bottom: 20px;
  cursor: pointer;

  & > div {
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  & img {
    width: 18px;
    height: 18px;
  }
  & > p {
    margin: 7px 0;
  }
  & span {
    font-size: 12px;
    margin-left: 5px;
  }
`;

const MyContent = styled.p`
  font-weight: 700;
`;
const MyCreateData = styled.p`
  color: ${subColor};
  font-size: 10px;
`;

export default function Kanban() {
  /** 임시로 특정 워크스페이스(id가 0) 지정 */
  const workspaceList = useSelector(state => state.workspace.workspaceList)[0];
  const workflowList = workspaceList.workflow[0].list;
  return (
    <div>
      <MyTitleArea>
        <MyTitle fontSize="25px">Workflow</MyTitle>
        <MySubTitle fontSize="14px">{workspaceList.name}</MySubTitle>
      </MyTitleArea>
      <MyProgressArea>
        <div>
          <MyProgressTitle>
            <div>
              <p>✉️</p>
              <MyTitle fontSize="16px">Request</MyTitle>
            </div>
            <MyMenuBar src={menu} alt="menu-bar" />
          </MyProgressTitle>

          <MyTask>
            <MyTitle fontSize="13px">➕ Add New Task</MyTitle>
          </MyTask>
          {workflowList.todo.map(el => {
            return (
              <MyTask key={el.id}>
                <div>
                  <MyContent>{el.content}</MyContent>
                  <div>
                    <span>✏️</span>
                    <span>❌</span>
                  </div>
                </div>
                <MyCreateData>{el.createData}</MyCreateData>
                <div>
                  <MyImportanceButton {...el}>
                    {el.importance}
                  </MyImportanceButton>
                  <img src={defaultProfile} alt="기본 프로필 이미지" />
                </div>
              </MyTask>
            );
          })}
        </div>
        <div>
          <MyProgressTitle>
            <div>
              <p>🔨</p>
              <MyTitle fontSize="16px"> In progress</MyTitle>
            </div>
            <MyMenuBar src={menu} alt="menu-bar" />
          </MyProgressTitle>
          <MyTask>
            <MyTitle fontSize="13px">➕ Add New Task</MyTitle>
          </MyTask>
          {workflowList.inprogress.map(el => {
            return (
              <MyTask key={el.id}>
                <div>
                  <MyContent>{el.content}</MyContent>
                  <div>
                    <span>✏️</span>
                    <span>❌</span>
                  </div>
                </div>
                <MyCreateData>{el.createData}</MyCreateData>
                <div>
                  <MyImportanceButton {...el}>
                    {el.importance}
                  </MyImportanceButton>
                  <img src={defaultProfile} alt="기본 프로필 이미지" />
                </div>
              </MyTask>
            );
          })}
        </div>
        <div>
          <MyProgressTitle>
            <div>
              <p>📌</p>
              <MyTitle fontSize="16px">In Review</MyTitle>
            </div>
            <MyMenuBar src={menu} alt="menu-bar" />
          </MyProgressTitle>
          <MyTask>
            <MyTitle fontSize="13px">➕ Add New Task</MyTitle>
          </MyTask>
          {workflowList.inreview.map(el => {
            return (
              <MyTask key={el.id}>
                <div>
                  <MyContent>{el.content}</MyContent>
                  <div>
                    <span>✏️</span>
                    <span>❌</span>
                  </div>
                </div>
                <MyCreateData>{el.createData}</MyCreateData>
                <div>
                  <MyImportanceButton {...el}>
                    {el.importance}
                  </MyImportanceButton>
                  <img src={defaultProfile} alt="기본 프로필 이미지" />
                </div>
              </MyTask>
            );
          })}
        </div>
        <div>
          <MyProgressTitle>
            <div>
              <p>🔒</p>
              <MyTitle fontSize="16px"> Blocked</MyTitle>
            </div>
            <MyMenuBar src={menu} alt="menu-bar" />
          </MyProgressTitle>
          <MyTask>
            <MyTitle fontSize="13px">➕ Add New Task</MyTitle>
          </MyTask>
          {workflowList.blocked.map(el => {
            return (
              <MyTask key={el.id}>
                <div>
                  <MyContent>{el.content}</MyContent>
                  <div>
                    <span>✏️</span>
                    <span>❌</span>
                  </div>
                </div>
                <MyCreateData>{el.createData}</MyCreateData>
                <div>
                  <MyImportanceButton {...el}>
                    {el.importance}
                  </MyImportanceButton>
                  <img src={defaultProfile} alt="기본 프로필 이미지" />
                </div>
              </MyTask>
            );
          })}
        </div>
        <div>
          <MyProgressTitle>
            <div>
              <p>🎉</p>
              <MyTitle fontSize="16px"> Completed</MyTitle>
            </div>
            <MyMenuBar src={menu} alt="menu-bar" />
          </MyProgressTitle>
          <MyTask>
            <MyTitle fontSize="13px">➕ Add New Task</MyTitle>
          </MyTask>
          {workflowList.done.map(el => {
            return (
              <MyTask key={el.id}>
                <div>
                  <MyContent>{el.content}</MyContent>
                  <div>
                    <span>✏️</span>
                    <span>❌</span>
                  </div>
                </div>
                <MyCreateData>{el.createData}</MyCreateData>
                <div>
                  <MyImportanceButton {...el}>
                    {el.importance}
                  </MyImportanceButton>
                  <img src={defaultProfile} alt="기본 프로필 이미지" />
                </div>
              </MyTask>
            );
          })}
        </div>
      </MyProgressArea>
    </div>
  );
}
