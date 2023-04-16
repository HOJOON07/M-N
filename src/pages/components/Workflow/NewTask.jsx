import React, { useEffect, useRef, useState } from 'react';
import defaultProfile from '../../../assets/images/default-profile.png';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  newRequest,
  newInProgress,
  newInReview,
  newBlocked,
  newCompleted,
} from '../../../store/modules/workspace';

const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const brightSubColor = '#e9e4f5';
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
const MyCalenderSpan = styled.span`
  font-size: 0.7rem;
`;

const MyCalendar = styled.input`
  width: 100px;
  font-size: 12px;
  margin-bottom: 5px;
`;

const MyContent = styled.input`
  margin: 10px 0;
  width: 95%;
  height: 60px;
  outline-color: ${mainColor};
  padding: 5px 10px;
  box-sizing: border-box;
`;
const MyBottom = styled.div`
  height: 15px;
  line-height: 19px;
  font-size: 11px;
  text-align: center;

  display: flex;
  justify-content: flex-start;
  position: absolute;
  left: 15px;
  bottom: 15px;
`;

const MyRadio = styled.input`
  vertical-align: middle;
  appearance: none;
  border: max(2px, 0.1em) solid gray;
  border-radius: 50%;
  width: 1.2em;
  height: 1.2em;

  &:checked {
    border: 0.4em solid ${mainColor};
  }
  &:focus-visible {
    outline-offset: max(2px, 0.1em);
    outline: max(2px, 0.1em) dotted tomato;
  }
`;

const MySubmit = styled.div`
  display: flex;
  position: absolute;
  bottom: 9px;
  right: 10px;
`;

const MySubmitButton = styled.button`
  padding: 7px 12px;
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
    background-color: ${mainColor};
    color: white;
  }
`;

export default function NewTask({ progress, handleRender }) {
  const [state, setState] = useState(true);
  const contentRef = useRef();
  const dispatch = useDispatch();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const [importance, setImportance] = useState('');
  const handleImportanceChange = e => {
    setImportance(e.target.value);
  };
  const handelClick = async () => {
    let progressUrl;
    const newId = Date.now();
    const payload = {
      workspaceId: 0, // 임시로 0번 워크스페이스 지정
      progress: progress,
      newtask: {
        id: newId,
        content: contentRef.current.value,
        createDate: Date(),
        startDate: startDateRef.current.value, // 시작날짜 추가
        endDate: endDateRef.current.value,
        importance: importance ? importance : 'medium', // 중요도 기본값 추가
      },
    };
    if (progress === 'Request') {
      progressUrl = 'addinprogresslist';
      // dispatch(newRequest(payload));
    } else if (progress === 'In Progress') {
      progressUrl = 'addinprogresslist';
      // dispatch(newInProgress(payload));
    } else if (progress === 'In Review') {
      progressUrl = 'addinreviewlist';
      // dispatch(newInReview(payload));
    } else if (progress === 'Blocked') {
      progressUrl = 'addblockedlist';
      // dispatch(newBlocked(payload));
    } else {
      progressUrl = 'addcompletedlist';
      // dispatch(newCompleted(payload));
    }

    setState(e => !e);
    await fetchData(payload, progressUrl);
    handleRender();
  };

  const [loading, setLoading] = useState(false);
  const fetchData = async (payload, progressUrl) => {
    try {
      setLoading(true);
      const resPost = await fetch(
        `http://localhost:8001/workspace/643a2995b7f6810e3ce63447/${progressUrl}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            inProgressList_content: payload.newtask.content,
            inProgressList_endDate: payload.newtask.endDate,
            inProgressList_importance: payload.newtask.importance,
          }),
        }
      );
      if (resPost.status !== 200) return 'fail';
      const data = await resPost.json();
      if (data && data.newtask) {
        dispatch(newInProgress(data));
        handleRender();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    state && (
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
          <MyRadio
            type="radio"
            value="high"
            name="myImportance"
            onChange={handleImportanceChange}
          />
          High
          <MyRadio
            checked
            type="radio"
            value="medium"
            name="myImportance"
            onChange={handleImportanceChange}
          />
          Medium
          <MyRadio
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
    )
  );
}
