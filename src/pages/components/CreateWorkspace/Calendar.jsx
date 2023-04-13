import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

const MyDateTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #777;
  margin-bottom: 50px;
`;

const MyDateWrap = styled.div`
  width: 100%;
  height: 300px;
`;

const MyProjectDateTextWrap = styled.div`
  text-align: center;
  /* background-color: #f8e0dc; */
  background-color: #d5cee8;
  border-radius: 10px;
  padding: 10px;
`;

const StyledDatePicker = styled(ReactDatePicker)`
  margin-top: 1.5rem;
  max-width: 300px;
  height: 42px;
  box-sizing: border-box;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid lightgray;
  font-size: 15px;
  text-align: center;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 800;
`;

const StartText = styled.p`
  margin-top: 20px;
`;
const EndText = styled.p``;

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <MyDateTitle>Period of Development</MyDateTitle>
      <MyDateWrap>
        <MyProjectDateTextWrap>
          <StartText>프로젝트 시작일</StartText>
          <StyledDatePicker
            locale={ko}
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy년 MM월 dd일"
            // isClearable={true}
            minDate={new Date()}
            withPortal
          />
          <EndText>프로젝트 종료일</EndText>
          <StyledDatePicker
            locale={ko}
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="yyyy년 MM월 dd일"
            // isClearable={true}
            withPortal
          />
        </MyProjectDateTextWrap>
      </MyDateWrap>
    </>
  );
}
