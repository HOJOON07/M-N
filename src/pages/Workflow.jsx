import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import bookmarkIcon from '../assets/images/bookmark-icon.png';
import Kanban from './components/Workflow/Kanban';
import workspace, { initList } from '../store/modules/workspace';
import Loading from '../pages/Loading';
import { useLocation } from 'react-router-dom';

const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';

const MyWorkspaceArea = styled.div`
  display: flex;
  width: 99%;
  height: 90vh;

  & > div:nth-child(2) {
    width: 100%;
    height: 100%;
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
  const workspace = useSelector(state => state.workspace);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { state } = useLocation();

  const workspaceIdTest = '643d124367f11568276fbfee';
  const [render, setRender] = useState(false);
  const [dataArr, setDataArr] = useState([]);

  const getAllWS = async () => {
    try {
      const resGetAllWS = await fetch('http://localhost:8001/workspace', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (resGetAllWS.status !== 200) return 'fail';
      const data = await resGetAllWS.json();
      setDataArr(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRender = () => {
    setRender(cur => !cur);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resGetAllWS = await fetch(
          `http://localhost:4000/workspace/${state}`,
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
    getAllWS();
    fetchData();
  }, [render]);

  // dnd
  useEffect(() => {
    const updateWF = async () => {
      try {
        const resUpdateWF = await fetch(
          'http://localhost:8001/workspace/643d124367f11568276fbfee/updatewf',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              workflow: workspace.workflow,
            }),
          }
        );
        if (resUpdateWF.status !== 200) return 'fail';
      } catch (err) {
        console.error(err);
      }
    };
    updateWF();
  }, [workspace]);

  return (
    <MyWorkspaceArea>
      {!loading ? (
        <MyWorkspaceList>
          <MyTitle>Workspace</MyTitle>
          <MyList>
            <p>List</p>
            {dataArr.map(el => {
              console.log(el._id);
              // console.log(workspace.workspace_name === el.workspace_name);
              // if (workspace.workspace_name === el.workspace_name)
              // el.style.backgroundColor = 'black';
              return (
                <div key={el.id}>
                  <MyNoneBookmark
                    alt="북마크 미완료 아이콘"
                    src={bookmarkIcon}
                  />
                  <div>{el.workspace_name}</div>
                </div>
              );
            })}
          </MyList>
        </MyWorkspaceList>
      ) : null}

      {!loading ? <Kanban handleRender={handleRender} /> : <Loading />}
    </MyWorkspaceArea>
  );
}
