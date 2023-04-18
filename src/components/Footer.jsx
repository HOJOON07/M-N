import React from 'react';
import styled from 'styled-components';

const MyFooter = styled.footer`
  width: 100%;
  height: 170px;
  background-color: #373737;
  position: relative;
  bottom: 0;
`;

const MyUlContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  color: #717171;
`;

const MyLiContainer = styled.li`
  width: 200px;
`;

const MyLiTitle = styled.li`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 14px;
`;

const MyLi = styled.li`
  font-size: 0.8rem;
  margin: 8px 0;
`;

export default function Footer() {
  return (
    <MyFooter>
      <MyUlContainer>
        <MyLiContainer>
          <ul>
            <MyLiTitle>Project Management Tools</MyLiTitle>
            <MyLi>MeetNotes</MyLi>
            <MyLi>애자일 방식의 팀 프로젝트</MyLi>
          </ul>
        </MyLiContainer>
        <MyLiContainer>
          <ul>
            <MyLiTitle>Meet&Notes</MyLiTitle>
            <MyLi>Team Leader : 김호준</MyLi>
            <MyLi>Team Member : 백진솔</MyLi>
            <MyLi>Team Member : 박성재</MyLi>
            <MyLi>Team Member : 김은정</MyLi>
            <MyLi>Team Member : 구슬기</MyLi>
          </ul>
        </MyLiContainer>
        <MyLiContainer>
          <ul>
            <MyLiTitle>Coments</MyLiTitle>
            <MyLi>제가 리더..? JWT토큰 ㅈㄴ싫다.</MyLi>
            <MyLi>Temporary</MyLi>
            <MyLi>웹 개발자가 되기 위한 좋은 밑거름이 되었습니다.</MyLi>
            <MyLi>Temporary</MyLi>
            <MyLi>도전적인 작업이었습니다.</MyLi>
          </ul>
        </MyLiContainer>
      </MyUlContainer>
    </MyFooter>
  );
}
