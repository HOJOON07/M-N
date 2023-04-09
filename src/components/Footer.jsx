import React from 'react';
import styled from 'styled-components';

const MyFooter = styled.footer`
  width: 100%;
  height: 150px;
  background-color: #4e4e4e;
`;

const MyUlContents = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
`;

export default function Footer() {
  return (
    <MyFooter>
      <MyUlContents>
        <li>MeetNotes - 팀이름</li>
        <li>작업 내용</li>
        <li>코멘트</li>
      </MyUlContents>
    </MyFooter>
  );
}
