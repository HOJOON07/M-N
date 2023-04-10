import React from 'react';
import styled from 'styled-components';
import myrepo from '../images/git.png';
import myface from '../images/face.png';
import mymagnify from '../images/magnify.png';
import mybar from '../images/dots.png';

const MyContainer = styled.div`
  max-width: 1200px;
  height: 70vh;
  margin: auto;
`;

const MySpaceList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const MySpaceWord = styled.span`
  display: flex;
`;
const MySpaceListMain = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
`;
const MySpaceListSub = styled.p`
  font-size: 15px;
  font-weight: 300;
  margin-top: 50px;
`;

const MySpaceContent = styled.span`
  display: flex;
  justify-content: center;
`;
const MySpaceInput = styled.input`
  text-align: center;
  width: 15%;
  margin-top: 30px;
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
  width: 30px;
  height: 30px;
  margin-top: 35px;
`;
const MySpaceNewBtn = styled.button`
  width: 20%;
  height: 40px;
  margin-left: 10px;
  margin-top: 30px;
  box-sizing: border-box;
  font-size: 1.1rem;
  border-radius: 6px;
  background-color: #ffdb29;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    border-color: #11110d;
  }
`;
const MyWorkSpace = styled.section`
  justify-content: space-between;
`;

const MySpaceContainer = styled.div`
  display: flex;
  margin-top: 50px;
  max-width: 1200px;
`;

const MySpaceLeft = styled.div`
  width: 100%;
  height: 100px;
  background-color: #a1bccf;
`;
const MySpaceStar = styled.input.attrs({ type: 'checkbox' })``;
const MyInfo = styled.div`
  display: flex;
  position: absolute;
`;

const MyWork = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  padding: 10px;
`;
const MySpaceDate = styled.p`
  position: absolute;
  font-size: 1rem;
  font-weight: 300;
  text-align: left;
  margin-top: 30px;
  padding: 10px;
`;
const MyWorkImage = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 600px;
`;

const MyRepoName = styled.img`
  width: 50px;
  margin-bottom: 10px;
  padding: 10px;
`;
const MySpaceFace = styled.img`
  width: 40px;
  height: 40px;
  padding: 10px;
`;

const MyWorkBar = styled.div`
  position: absolute;
`;
const MySpaceProgress = styled.div`
  background-color: red;
  width: 200px;
  padding: 10px;
`;
const MyProgressBar = styled.div`
  background-color: yellow;
  width: 150px;
  padding: 10px;
`;
const MySpaceRight = styled.div`
  width: 30%;
  background-color: #46799d;
  border-style: 3px solid black;
`;
const MyPrivateBtn = styled.button`
  width: 50%;
  height: 30px;
  margin-top: 20px;
  margin-left: 40px;
  box-sizing: border-box;
  font-size: 1.1rem;
  border-radius: 6px;
  background-color: #f7550a;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    border-color: #11110d;
  }
`;
const MyCategoryBtn = styled.button`
  width: 50%;
  height: 30px;
  margin-top: 10px;

  margin-left: 40px;

  box-sizing: border-box;
  font-size: 1.1rem;
  border-radius: 6px;
  background-color: #3c3ceb;
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
  width: 20px;
  height: 20px;
  margin-right: 0px;
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
            <MySpaceStar />
            <MyInfo>
              <MyWork>Workspace 1</MyWork>
              <MySpaceDate>2023/04/04 - 2023/04/19</MySpaceDate>
            </MyInfo>
            <MyWorkImage>
              <MyRepoName src={myrepo} alt="깃이미지" />
              <MySpaceFace src={myface} alt="얼굴이미지" />
            </MyWorkImage>
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
