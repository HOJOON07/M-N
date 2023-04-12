import React from 'react';
import styled from 'styled-components';

const MyDateTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #777;
  margin-bottom: 10px;
`;

const MyDateWrap = styled.div`
  width: 100%;
  height: 300px;
`;

const MyProjectDateTextWrap = styled.div`
  text-align: center;
  background-color: lightgray;
  padding: 10px;
`;
const MyProjectStartDate = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
`;

const MyProjectFinishDate = styled.p`
  font-size: 18px;
`;

const MyCalendarWrap = styled.div`
  width: 100%;
  height: 250px;
`;

const MyCalendarInput = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

export default function Calendar() {
  return (
    <>
      <MyDateTitle>Period of Development</MyDateTitle>
      <MyDateWrap>
        <MyProjectDateTextWrap>
          <MyProjectStartDate>Start 0412 2023</MyProjectStartDate>
          <MyProjectFinishDate>Finish 0422 2023</MyProjectFinishDate>
        </MyProjectDateTextWrap>
        <MyCalendarWrap>
          <MyCalendarInput />
        </MyCalendarWrap>
      </MyDateWrap>
    </>
  );
}
