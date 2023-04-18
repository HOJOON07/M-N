import React from 'react';
import styled, { keyframes } from 'styled-components';
import MainListItem from './MainListItem';
import Flip from 'react-reveal/Flip';

const flowAnim = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
    /* 100%{
        transform: translateX(0);
    } */
`;

const MyDiv = styled.div`
  width: 100vw;
  overflow: hidden;
`;

const MyMainContainer = styled.div`
  max-width: 1000px;
  height: 700px;
  position: relative;
  margin: auto;
`;

const MyTextContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 10vw;
`;

const MySemiText = styled.p`
  font-size: 1.4rem;
`;

const MyText = styled.p`
  font-size: 2rem;
  margin-top: 15px;
`;

const MyStrong = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
`;

const MyList = styled.div`
  width: 105vw;
  height: 250px;
  position: absolute;
  bottom: 70px;
  display: flex;

  justify-content: space-around;

  animation: ${flowAnim} 30s linear infinite;
`;

const MyListSec = styled.div`
  width: 105vw;
  height: 250px;
  position: absolute;
  left: 105vw;
  bottom: 70px;
  display: flex;

  justify-content: space-around;
  animation: ${flowAnim} 30s linear infinite;
`;

export default function MainSec() {
  const itemData = {
    itemTxt: [
      'Manage Workspace',
      'Check Workflow',
      'Communication',
      'Agile Development',
      'Together Schedule',
    ],
    iconArr: ['📄', '📍', '🗣️', '💻', '📅'],
  };

  let i = 0,
    j = 0;

  return (
    <MyDiv>
      <MyMainContainer>
        <MyTextContainer>
          <MySemiText>
            <Flip left cascade>
              프로젝트 관리를 위한 핵심 기능만 담았습니다
            </Flip>
          </MySemiText>
          <MyText>
            <Flip right cascade>
              협업을 위한 선택이 아닌, 필수
            </Flip>
          </MyText>
        </MyTextContainer>
        <MyList>
          {itemData.itemTxt.map((item, idx) => (
            <MainListItem key={idx} text={item} icon={itemData.iconArr[i++]} />
          ))}
        </MyList>

        <MyListSec>
          {itemData.itemTxt.map((item, idx) => (
            <MainListItem key={idx} text={item} icon={itemData.iconArr[j++]} />
          ))}
        </MyListSec>
      </MyMainContainer>
    </MyDiv>
  );
}
