import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import bookmarkIcon from '../assets/images/bookmark-icon.png';
import Kanban from './components/Workflow/Kanban';
import { initList } from '../store/modules/workspace';
import Loading from '../pages/Loading';

const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';

const MyWorkspaceArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  & > div:nth-child(2) {
    width: 100%;
    height: 100%;
    margin: 10px;
  }
`;

const MyTitle = styled.h2`
  font-size: 20px;
  margin-left: 15px;
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
    cursor: pointer;
    display: flex;

    &:hover {
      background-color: white;
    }

    & > div > div {
      display: flex;
    }
  }
  & > div > img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
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
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resGetAllWS = await fetch(
          'http://192.168.0.230:8001/workspace/643818de0a5dddd886bff311', // 임시 id값
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (resGetAllWS.status !== 200) return 'fail';
        const data = await resGetAllWS.json();
        dispatch(initList(data));
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // const workspaceList = useSelector(
  //   state => state.workspace.workspaceList
  // ).filter(el => el.bookmarked);
  // const bookmarkedList = useSelector(
  //   state => state.workspace.workspaceList
  // ).filter(el => !el.bookmarked);

  return (
    <MyWorkspaceArea>
      <MyWorkspaceList>
        <MyTitle>Workspace</MyTitle>
        {/* <MyList>
          <p>Bookmark</p>
          {bookmarkedList.map(el => {
            return (
              <div key={el.id}>
                <MyBookmark alt="북마크 완료 아이콘" src={bookmarkIcon} />
                <div>{el.workspace_name}</div>
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
                <div>{el.workspace_name}</div>
              </div>
            );
          })}
        </MyList> */}
      </MyWorkspaceList>
      {!loading ? <Kanban /> : <Loading />}
    </MyWorkspaceArea>
  );
}
