import React from 'react';
import styled from 'styled-components';
import menu from '../../assets/images/menu.png';
import defaultProfile from '../../assets/images/default-profile.png';

// Color Variables
const contentColor = '#fff';
const subColor = '#cbcbcb';

// Styled Components
const MyTitle = styled.p`
  font-size: ${props => props.fontSize};
  font-family: 'LINESeedKR-Bd';
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

const MyMenuBar = styled.img`
  width: 15px;
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

export default function KanbanProgress({ workflowList, progress, icon }) {
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
        <MyTitle fontSize="13px">➕ Add New Task</MyTitle>
      </MyTask>
      {workflowList.map(el => {
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
              <MyImportanceButton {...el}>{el.importance}</MyImportanceButton>
              <img src={defaultProfile} alt="기본 프로필 이미지" />
            </div>
          </MyTask>
        );
      })}
    </div>
  );
}