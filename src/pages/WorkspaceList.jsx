import React from 'react';
import styled from 'styled-components';
import myrepo from '../images/gitcat.png';
import myface from '../images/face.png';
import myface_a from '../images/face.png';
import myface_b from '../images/face.png';
import mymagnify from '../images/magnify.png';
import mystar from '../images/star.png';
import mybar from '../images/dots.png';

const MyContainer = styled.div`
  max-width: 1200px;
  height: 70vh;
  margin: auto;
`;

const MySpaceList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MySpaceWord = styled.span`
  display: flex;
  margin-top: 10px;
`;
const MySpaceListMain = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;
const MySpaceListSub = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-top: 60px;
  margin-left: 10px;
`;

const MySpaceContent = styled.span`
  display: flex;
  justify-content: center;
`;
const MySpaceInput = styled.input`
  text-align: center;
  width: 300px;
  margin-top: 50px;
  margin-left: 150px;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid #516974;
  border-radius: 6px;
  outline: none;
  &:focus {
    border-color: #ffdb29;
  }
`;

const MySpaceMagify = styled.img`
  display: flex;
  position: absolute;
  font-size: 1rem;
  width: 25px;
  height: 25px;
  margin-top: 60px;
  margin-left: 50px;
`;
const MySpaceNewBtn = styled.button`
  width: 300px;
  height: 40px;
  margin-left: 10px;
  margin-top: 50px;
  box-sizing: border-box;
  font-size: 1.1rem;
  background-color: #623ad6;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  color: white;
`;
const MyWorkSpace = styled.section`
  justify-content: space-between;
`;

const MySpaceContainer = styled.div`
  display: flex;
  margin-top: 30px;
  max-width: 1200px;
`;

const MySpaceLeft = styled.div`
  width: 100%;
  height: 120px;
  background-color: #e9e4f5;
`;
const MySpaceStar = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  margin-top: 5px;
  margin-left: 5px;
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

const Myline = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
`;

const MySpaceDate = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  text-align: left;
`;
// const MyWorkImage = styled.div`
//   width: 100px;
// `;
const MyRepository = styled.div`
  display: flex;
  position: absolute;
  margin-left: 250px;
  margin-top: 30px;
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
const MySpaceFace = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  margin-left: 750px;
  margin-top: 15px;
  padding: 5px;
`;
const MySpaceFaceA = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  margin-left: 800px;
  margin-top: 25px;
  padding: 5px;
`;
const MySpaceFaceB = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  margin-left: 820px;
  margin-top: 25px;
  padding: 5px;
`;
const MyWorkBar = styled.div`
  display: flex;
  margin-left: 250px;
  margin-top: 75px;
`;
const MySpaceProgress = styled.div`
  width: 650px;
  height: 35px;
  background-color: #d5d3db;
  border-radius: 3px;
  /* 왜보더가 안먹힐까..? */
`;
const MyProgressBar = styled.div`
  background-color: #9b80d5;
  width: 400px;
  height: 25px;
  margin-top: 5px;
  margin-left: 5px;
`;
const MySpaceRight = styled.div`
  width: 30%;
  background-color: #9781dd;
  border-style: 3px solid black;
`;
const MyPrivateBtn = styled.button`
  width: 60%;
  height: 35px;
  margin-top: 20px;
  margin-left: 30px;
  box-sizing: border-box;
  font-size: 1.1rem;
  text-align: center;
  border-radius: 6px;
  background-color: #ddd7ed;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    border-color: #11110d;
  }
`;
const MyCategoryBtn = styled.button`
  width: 60%;
  height: 35px;
  margin-top: 10px;
  margin-left: 30px;
  box-sizing: border-box;
  font-size: 1.1rem;
  border-radius: 6px;
  background-color: #726b87;
  border-radius: 6px;
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
  margin-left: 50px;
`;

export default function Workspacelist() {
  return (
    <MyContainer>
      <MySpaceList>
        <MySpaceWord>
          <MySpaceListMain>Workspace List</MySpaceListMain>
          <MySpaceListSub>latest</MySpaceListSub>
        </MySpaceWord>
        <MySpaceContent>
          <MySpaceInput type="text" placeholder="Search by Workspace" />
          <MySpaceMagify src={mymagnify} alt="돋보기" />
          <MySpaceNewBtn> New Workspace</MySpaceNewBtn>
        </MySpaceContent>
      </MySpaceList>
      <MyWorkSpace>
        <MySpaceContainer>
          <MySpaceLeft>
            <MySpaceStar src={mystar} alt="즐겨찾기 이미지" />
            <MyInfo>
              <MyWork>Workspace 1</MyWork>
              <Myline>------------------</Myline>
              <MySpaceDate>2023/04/04 - 2023/04/19</MySpaceDate>
            </MyInfo>
            {/* <MyWorkImage> */}
            <MyRepository>
              <MyRepoName src={myrepo} alt="깃이미지" />
              <MyRepoText>Repository Name</MyRepoText>
            </MyRepository>
            <MySpaceFace src={myface} alt="얼굴이미지" />
            <MySpaceFaceA src={myface_a} alt="얼굴이미지" />
            <MySpaceFaceB src={myface_b} alt="얼굴이미지" />
            {/* </MyWorkImage> */}
            <MyWorkBar>
              <MySpaceProgress>
                <MyProgressBar />
              </MySpaceProgress>
            </MyWorkBar>
          </MySpaceLeft>
          <MySpaceRight>
            <MyPrivateBtn>Private</MyPrivateBtn>
            <MyCategoryBtn> Game</MyCategoryBtn>
            <MyMenuBar src={mybar} alt="메뉴바" />
          </MySpaceRight>
        </MySpaceContainer>
      </MyWorkSpace>
    </MyContainer>
  );
}
