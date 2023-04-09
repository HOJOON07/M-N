import React from 'react';
import styled from 'styled-components';

const MyMainContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 600px;

  margin: auto;
  padding-top: 25px;
`;

const MyH3 = styled.h3`
  max-width: 450px;
  font-size: 4rem;
`;

export default function Main() {
  return (
    <MyMainContainer>
      <div>
        <MyH3>MeetNotes로 스마트하게 프로젝트를 관리해보세요!</MyH3>
        <p>개발자가 개발에만 집중할 수 있도록</p>
        <button>무료로 시작</button>
      </div>
    </MyMainContainer>
  );
}
