import React, { useRef, useState } from 'react';
import defaultProfile from '../../assets/images/default-profile.png';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  newTodo,
  newInProgress,
  newInReview,
  newBlocked,
  newDone,
} from '../../store/modules/workspace';

// Color Variables
const contentColor = '#fff';
const subColor = '#cbcbcb';
const greyColor = '#696969';

// Styled Components
const MyNewTask = styled.div`
  position: relative;
  border: 1px solid ${subColor};
  border-radius: 5px;
  background-color: ${contentColor};
  padding: 10px 10px 42px;
  /* width: 84%; */

  margin-bottom: 15px;

  & > div:nth-child(2) {
    margin: 10px 0;
  }
`;

const MyTop = styled.div`
  justify-content: space-between;
  display: flex;
`;

const MyCalendarContainer = styled.div`
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
`;
const MyCalenderSpan = styled.span``;

const MyCalendar = styled.input`
  width: 100px;
  font-size: 12px;
  margin-bottom: 5px;
`;

const MyContent = styled.input`
  width: 80%;
  height: 60px;
`;
const MyBottom = styled.div`
  width: 80%;
  height: 15px;
  font-size: 11px;

  display: flex;
  position: absolute;
  left: 15px;
  bottom: 15px;
`;

const MySubmit = styled.div`
  display: flex;
  position: absolute;
  bottom: 15px;
  right: 10px;
`;

const MySubmitButton = styled.button`
  padding: 5px 10px;
  margin: 10px 0 0;
  box-sizing: border-box;
  font-size: 10px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  border: 1px solid ${greyColor};
  background-color: white;
  color: ${greyColor};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: 'black';
  }
`;

export default function NewTask({ progress }) {
  const contentRef = useRef();
  const dispatch = useDispatch();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const [importance, setImportance] = useState('');
  const handleImportanceChange = e => {
    setImportance(e.target.value);
  };
  const handelClick = () => {
    const payload = {
      workspaceId: 0, // 임시로 0번 워크스페이스 지정
      newtask: {
        id: Date(),
        content: contentRef.current.value,
        createDate: Date(),
        startDate: startDateRef.current.value, // 시작날짜 추가
        endDate: endDateRef.current.value,
        importance: importance,
      },
    };
    if (progress === 'Request') {
      dispatch(newTodo(payload));
    } else if (progress === 'In Progress') {
      dispatch(newInProgress(payload));
    } else if (progress === 'In Review') {
      dispatch(newInReview(payload));
    } else if (progress === 'Blocked') {
      dispatch(newBlocked(payload));
    } else dispatch(newDone(payload));
  };
  return (
    <MyNewTask>
      <MyTop>
        <img
          src={defaultProfile}
          style={{ width: '40px', height: '40px' }}
          alt="기본 프로필 이미지"
        />
        <MyCalendarContainer>
          <MyCalenderSpan>시작일 : </MyCalenderSpan>
          <MyCalendar required type="date" ref={startDateRef} />
          <br />
          <MyCalenderSpan>종료일 : </MyCalenderSpan>
          <MyCalendar required type="date" ref={endDateRef} />
        </MyCalendarContainer>
      </MyTop>

      <MyContent
        required
        type="textarea"
        ref={contentRef}
        placeholder="Contents"
      />

      <MyBottom>
        <input
          type="radio"
          value="high"
          name="myImportance"
          onChange={handleImportanceChange}
        />
        High
        <input
          type="radio"
          value="medium"
          name="myImportance"
          onChange={handleImportanceChange}
        />
        Medium
        <input
          type="radio"
          value="low"
          name="myImportance"
          onChange={handleImportanceChange}
        />
        Low
      </MyBottom>
      <MySubmit>
        <MySubmitButton onClick={handelClick}>submit</MySubmitButton>
      </MySubmit>
    </MyNewTask>
  );
}
