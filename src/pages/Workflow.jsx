import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import bookmarkIcon from '../assets/images/bookmark-icon.png';

const MyWorkspaceArea = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  border: 1px solid green;
`;

const MyTitle = styled.p`
  font-family: 'LINESeedKR-Bd';
`;

const MyWorkspaceList = styled.div`
  border: 1px solid red;
  background-color: orange;
  width: 150px;

  & > p {
    font-size: 18px;
  }
`;

const MyList = styled.div`
  margin-top: 20px;
  & > div {
    display: flex;
  }
  & > div > img {
    width: 15px;
    height: 15px;
    border: 1px solid red;
  }
  & > div > div {
    border: 1px solid red;
  }
`;
const MyKanbanBoard = styled.div`
  border: 1px solid red;
  background-color: skyblue;
  width: 100%;
`;

const MyBookmark = styled.img`
  filter: invert(81%) sepia(47%) saturate(1469%) hue-rotate(356deg)
    brightness(102%) contrast(109%);
`;

const MyNoneBookmark = styled.img`
  filter: invert(83%) sepia(2%) saturate(16%) hue-rotate(21deg) brightness(81%)
    contrast(93%);
`;

export default function Workflow() {
  const workspace = useSelector(state => state.workspace.workspaceList);
  console.log(workspace);
  return (
    <MyWorkspaceArea>
      <MyWorkspaceList>
        <MyTitle>Workspace</MyTitle>
        <MyList>
          <p>Bookmark</p>
          <div>
            <MyBookmark alt="test" src={bookmarkIcon} />
            <div>workspace1</div>
          </div>
          <div>
            <MyBookmark alt="test" src={bookmarkIcon} />
            <div>workspace1</div>
          </div>
        </MyList>
        <MyList>
          <h2>List</h2>
          <div>
            <MyNoneBookmark alt="test" src={bookmarkIcon} />
            <div>workspace2</div>
          </div>
          <div>
            <MyNoneBookmark alt="test" src={bookmarkIcon} />
            <div>workspace2</div>
          </div>
          <div>
            <MyNoneBookmark alt="test" src={bookmarkIcon} />
            <div>workspace2</div>
          </div>
        </MyList>
      </MyWorkspaceList>
      <MyKanbanBoard>workflow board</MyKanbanBoard>
    </MyWorkspaceArea>
  );
}
