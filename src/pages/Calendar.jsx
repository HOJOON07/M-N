// src/utils.ts
// src/components/Calendar.tsx
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export const pad = time => {
  return `0${time}`.slice(-2);
};

export const getSimpleDateFormat = (d, separator = '-') => {
  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join(
    separator
  );
};

export const isSameDay = (a, b) => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const brightSubColor = '#e9e4f5';

const DateHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MeetNotes = styled.div`
  background-color: ${brightSubColor};
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MeetNotesTitle = styled.h1`
  margin: 0;
  padding: 8px 24px;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  color: black;
`;

const Title = styled.h1`
  margin: 0;
  padding: 10px 24px;
  font-size: 42gpx;
  font-weight: normal;
  text-align: center;
  color: black;
`;

const ButtonTitle = styled.p`
  margin: 0;
  padding: 4px 16px;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  color: black;
`;

const ArrowButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  border-spacing: 0;
`;

const TableHeader = styled.thead`
  border-bottom: 2px solid #f2f2f2;
  /* padding-block: 12px; */
  > tr {
    > th {
      &:first-child {
        color: red;
      }
      &:last-child {
        color: blue;
      }
      font-weight: bold;
      color: black;
    }
  }
`;

const TableBody = styled.tbody``;

const TableData = styled.td`
  text-align: center;
  color: black;
  padding: 20px;
  position: relative;
  border-right: 1px solid #f2f2f2;
  border-bottom: 2px solid #f2f2f2;
  &:first-child {
    background-color: #fdf0f0;
  }
`;

const DisplayDate = styled.div`
  color: ${({ isToday }) => isToday && '#F8F7FA'};
  background-color: ${({ isToday, isSelected }) =>
    isSelected ? `${hoverMainColor}` : isToday ? '#313133' : ''};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: flex-end;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Base = styled.div`
  background-color: white;
  width: 1200px;
  margin: 0 auto;
  height: 800px;
  border: 2px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  ${DateHeader} + ${Table} {
    margin-top: 36px;
  }
`;

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택한 날짜 상태

  const { year, month, firstDay, lastDay } = useMemo(() => {
    // 선택한 날짜를 기준으로 연, 월, 일, 해당 월의 첫째 날짜, 해달 월의 마지막 날짜 가져온다.
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    return {
      year,
      month,
      firstDay: new Date(year, month, 1),
      lastDay: new Date(year, month + 1, 0),
    };
  }, [selectedDate]);

  const selectDate = date => {
    setSelectedDate(date);
  };

  const pad = () =>
    [...Array(firstDay.getDay()).keys()].map(p => (
      <TableData key={`pad_${p}`} />
    ));

  const range = () =>
    [...Array(lastDay.getDate()).keys()].map(d => {
      const thisDay = new Date(year, month, d + 1);
      const today = new Date();

      return (
        <TableData key={d} onClick={() => selectDate(thisDay)}>
          <DisplayDate
            isSelected={isSameDay(selectedDate, thisDay)}
            isToday={isSameDay(today, thisDay)}
          >
            {new Date(year, month, d + 1).getDate()}
          </DisplayDate>
        </TableData>
      );
    });

  const render = () => {
    const items = [...pad(), ...range()];

    const weeks = Math.ceil(items.length / 7);

    return [...Array(weeks).keys()].map(week => (
      <tr key={`week_${week}`}>{items.slice(week * 7, week * 7 + 7)}</tr>
    ));
  };

  return (
    <Base>
      <MeetNotes>
        <MeetNotesTitle>Meeting Notes</MeetNotesTitle>
      </MeetNotes>
      <DateHeader>
        <Title>{`${MONTHS[month]} ${year}`}</Title>
        <ButtonContainer>
          <ArrowButton
            pos="left"
            onClick={() =>
              selectDate(
                new Date(selectedDate.setMonth(selectedDate.getMonth() - 1))
              )
            }
          >
            <BiChevronLeft />
          </ArrowButton>
          <ButtonTitle>{`${MONTHS[month]}`}</ButtonTitle>
          <ArrowButton
            pos="right"
            onClick={() =>
              selectDate(
                new Date(selectedDate.setMonth(selectedDate.getMonth() + 1))
              )
            }
          >
            <BiChevronRight />
          </ArrowButton>
        </ButtonContainer>
      </DateHeader>
      <Table>
        <TableHeader>
          <tr>
            {DAYS.map((day, index) => (
              <th key={day} align="center">
                {day}
              </th>
            ))}
          </tr>
        </TableHeader>
        <TableBody>{render()}</TableBody>
      </Table>
    </Base>
  );
};

export default Calendar;
