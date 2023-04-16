import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import './calendar.css';

// const CustomDatePicker = styled(DatePicker)``;

export default function ProgressDate() {
  const [startDate, setStartDate] = useState(new Date('2023/04/05'));
  const [endDate, setEndDate] = useState(new Date('2023/04/19'));
  return (
    <>
      <span style={{ fontSize: '.7rem' }}>기간</span>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <span style={{ fontSize: '.7rem' }}> ~</span>
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
}
