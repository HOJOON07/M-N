import React from 'react';
import styled from 'styled-components';

import mystar from '../../../assets/images/bookmark-icon.png';
import mybar from '../../../assets/images/menu.png';
import myrepo from '../../../assets/images/gitcat.png';
import myface_a from '../../../assets/images/default-profile.png';

const progressColor = '#9781dd';
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const brightSubColor = '#e9e4f5';
const subColor = '#cbcbcb';

const MyWorkSpace = styled.section`
  justify-content: space-between;
`;

const MySpaceContainer = styled.div`
  display: flex;
  margin: 30px 0;
  max-width: 1200px;
`;

const MySpaceLeft = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${brightSubColor};
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;
const MySpaceStar = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  margin-top: 5px;
  margin-left: 5px;

  filter: invert(38%) sepia(6%) saturate(4%) hue-rotate(345deg) brightness(97%)
    contrast(82%);
  /* 즐겨찾기를 눌렀을 때 색(노랑)
    filter: invert(83%) sepia(92%) saturate(1371%) hue-rotate(360deg) brightness(107%) contrast(105%);
    */
`;

const MyInfo = styled.div`
  position: absolute;
  margin-left: 10px;
  margin-top: 20px;
`;

const MyWork = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  padding: 5px;
`;

const Myline = styled.div`
  margin-left: 7px;
  width: 95%;
  height: 4px;
  background-color: ${mainColor};
`;

const MySpaceDate = styled.p`
  font-size: 0.7rem;
  font-weight: 300;
  margin: 10px 0 0 7px;
`;

const MyRepository = styled.div`
  display: flex;
  position: absolute;
  margin-left: 250px;
  margin-top: 18px;
`;

const MyRepoName = styled.img`
  width: 30px;
  margin-bottom: 10px;
  padding: 5px;
`;

const MyRepoText = styled.p`
  margin-top: 15px;
  padding-left: 10px;
  font-size: 1rem;
  font-weight: bold;
`;

const MySpaceFaceA = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  margin-left: 800px;
  margin-top: 25px;
  padding: 5px;
`;

const MyWorkBar = styled.div`
  display: flex;
  margin-left: 250px;
  margin-top: 70px;
`;

const MySpaceProgress = styled.div`
  width: 650px;
  height: 35px;
  background-color: #d5d3db;
  border-radius: 3px;
  border: 1px solid #c0adad;
`;

const MyProgressBar = styled.div`
  background-color: ${progressColor};
  width: 640px;
  height: 25px;
  margin-top: 5px;
  margin-left: 5px;
`;

const MySpaceRight = styled.div`
  position: relative;
  width: 30%;
  background-color: ${progressColor};

  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const MyPrivateBtn = styled.button`
  width: 60%;
  height: 40px;
  margin-top: 15px;
  margin-left: 30px;
  box-sizing: border-box;
  font-size: 1.1rem;
  text-align: center;
  border-radius: 6px;
  background-color: #ddd7ed;
  border: none;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    border-color: #11110d;
  }
`;
const MyCategoryBtn = styled.button`
  width: 60%;
  height: 40px;
  margin-top: 10px;
  margin-left: 30px;
  box-sizing: border-box;
  font-size: 1.1rem;
  border-radius: 6px;
  background-color: #726b87;
  border: none;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    border-color: #11110d;
  }
`;
const MyMenuBar = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  margin-left: 40px;
  top: 10px;
`;
export default function Workspace({
  workspace_name,
  workspace_category,
  workspace_type,
  workspace_startDate,
  workspace_endDate,
  githubRepository,
  member,
  progressPercent,
}) {
  return (
    <MyWorkSpace>
      <MySpaceContainer>
        <MySpaceLeft>
          <MySpaceStar src={mystar} alt="즐겨찾기 이미지" />
          <MyInfo>
            <MyWork>
              {workspace_name ? workspace_name : 'workspace_name'}
            </MyWork>
            <Myline />
            <MySpaceDate>
              {workspace_startDate ? workspace_startDate : '0000-00-00'}
              &nbsp;-&nbsp;
              {workspace_endDate ? workspace_endDate : '1111-11-11'}
            </MySpaceDate>
          </MyInfo>
          <MyRepository>
            <MyRepoName src={myrepo} alt="깃이미지" />
            <MyRepoText>
              {githubRepository ? githubRepository : 'www.gitgub.com'}
            </MyRepoText>
          </MyRepository>

          {member ? (
            member.map((el, idx) => (
              <MySpaceFaceA
                src={myface_a}
                alt="이미지"
                key={idx}
                style={{ marginLeft: `${800 + idx * 15}px` }}
              />
              // <MySpaceFace src={myface} alt="얼굴이미지" />
            ))
          ) : (
            <MySpaceFaceA src={myface_a} alt="이미지" />
          )}
          {/* <MySpaceFaceB src={myface_b} alt="얼굴이미지" /> */}
          <MyWorkBar>
            <MySpaceProgress>
              <MyProgressBar
                style={{
                  width: `${progressPercent * 640}px`,
                }}
              >
                <span>{progressPercent * 100}%</span>
              </MyProgressBar>
            </MySpaceProgress>
          </MyWorkBar>
        </MySpaceLeft>
        <MySpaceRight>
          <MyPrivateBtn>
            {workspace_type ? workspace_type : 'workspace_type'}
          </MyPrivateBtn>
          <MyCategoryBtn>
            {workspace_category ? workspace_category : 'workspace_category'}
          </MyCategoryBtn>
          <MyMenuBar src={mybar} alt="메뉴바" />
        </MySpaceRight>
      </MySpaceContainer>
    </MyWorkSpace>
  );
}
