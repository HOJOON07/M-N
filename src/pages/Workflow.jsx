import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import bookmarkIcon from '../assets/images/bookmark-icon.png';

const MyWorkspaceArea = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
`;

const MyTitle = styled.p`
  font-size: 20px;
  font-family: 'LINESeedKR-Bd';
`;

const MyWorkspaceList = styled.div`
  background-color: #d3dae4;
  width: 180px;
  padding: 20px 0;

  & > p {
    margin: 0 15px 10px;
  }
`;

const MyList = styled.div`
  margin-top: 20px;

  & > p {
    margin: 10px 15px;
    font-weight: 700;
    color: darkgrey;
  }

  & > div {
    padding: 10px 15px;
    display: flex;
    cursor: pointer;

    &:hover {
      background-color: white;
    }
  }
  & > div > img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`;
const MyKanbanBoard = styled.div`
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
  const workspaceList = useSelector(
    state => state.workspace.workspaceList
  ).filter(el => el.bookmarked);
  const bookmarkedList = useSelector(
    state => state.workspace.workspaceList
  ).filter(el => !el.bookmarked);
  return (
    <MyWorkspaceArea>
      <MyWorkspaceList>
        <MyTitle>Workspace</MyTitle>
        <MyList>
          <p>Bookmark</p>
          {bookmarkedList.map(el => {
            return (
              <div key={el.id}>
                <MyBookmark alt="북마크 완료 아이콘" src={bookmarkIcon} />
                <div>{el.name}</div>
              </div>
            );
          })}
        </MyList>
        <MyList>
          <p>List</p>
          {workspaceList.map(el => {
            return (
              <div key={el.id}>
                <MyNoneBookmark alt="북마크 미완료 아이콘" src={bookmarkIcon} />
                <div>{el.name}</div>
              </div>
            );
          })}
        </MyList>
      </MyWorkspaceList>
      <MyKanbanBoard>workflow board</MyKanbanBoard>
    </MyWorkspaceArea>
  );
}
