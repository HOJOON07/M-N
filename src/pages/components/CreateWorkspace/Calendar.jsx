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
  width: 200px;
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

export default function Calendar(props) {
  const { startDateOnChange, endDateOnChange } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const formatStart = () => {
  //   const year = startDate.getFullYear();
  //   const month = startDate.getMonth() + 1;
  //   const date = startDate.getDate();
  //   return `${year}년 ${month}월 ${date}일`;
  // };
  // const formatEnd = () => {
  //   const year = endDate.getFullYear();
  //   const month = endDate.getMonth() + 1;
  //   const date = endDate.getDate();
  //   return `${year}년 ${month}월 ${date}일`;
  // };
  // console.log(startDate, endDate);
  // console.log(formatStart(startDate), formatEnd(endDate));
  return (
    <>
      <MyDateTitle>Period of Development</MyDateTitle>
      <MyDateWrap>
        <MyProjectDateTextWrap>
          <StartText>프로젝트 시작일</StartText>
          <StyledDatePicker
            locale={ko}
            selected={startDate}
            onChange={(date, startDate) => {
              setStartDate(date);
              startDateOnChange(startDate);
            }}
            // onChange={startDate => {
            //   startDateOnChange(startDate);
            // }}
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
            onChange={(date, endDate) => {
              setEndDate(date);
              endDateOnChange(endDate);
            }}
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
