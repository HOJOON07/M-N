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
import ReactDatePicker from 'react-datepicker';

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
  border: 2px solid ${mainColor};
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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date('2023/04/19'));

  // 텍스트 에리어 줄바꿈 기능 관련
  // const [textareaHeight, setTextareaHeight] = useState({
  //   row: 1,
  //   lineBreak: {},
  // });

  // const resizeTextarea = e => {
  //   const { scrollHeight, clientHeight, value } = e.target;

  //   // 줄바꿈이 일어날 때
  //   if (scrollHeight > clientHeight) {
  //     setTextareaHeight(prev => ({
  //       row: prev.row + 1,
  //       lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
  //     }));
  //   }

  //   // 텍스트 지워서 줄바꿈 지점에 도달했을 때
  //   if (textareaHeight.lineBreak[value.length]) {
  //     setTextareaHeight(prev => ({
  //       row: prev.row - 1,
  //       lineBreak: { ...prev.lineBreak, [value.length]: false },
  //     }));
  //   }
  // };

  // const onKeyEnter = e => {
  //   if (e.code === 'Enter') {
  //     setTextareaHeight(prev => ({
  //       row: prev.row + 1,
  //       lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
  //     }));
  //   }
  // };

  const handleImportanceChange = e => {
    setImportance(e.target.value);
  };
  const handelClick = async () => {
    let progressUrl;
    let newData = {};
    const newId = Date.now();
    const payload = {
      workspaceId: 0, // 임시로 0번 워크스페이스 지정
      progress: progress,
      newtask: {
        id: newId,
        content: contentRef.current.value,
        createDate: Date(),
        // startDate: startDateRef.current.value, // 시작날짜 추가
        // endDate: endDateRef.current.value,
        startDate: startDate.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
        importance: importance ? importance : 'medium', // 중요도 기본값 추가
      },
    };

    if (progress === 'Request') {
      progressUrl = 'addrequestlist';
      newData = {
        requestList_content: payload.newtask.content,
        requestList_startDate: payload.newtask.startDate,
        requestList_endDate: payload.newtask.endDate,
        requestList_importance: payload.newtask.importance,
      };
    } else if (progress === 'In Progress') {
      progressUrl = 'addinprogresslist';
      newData = {
        inProgressList_content: payload.newtask.content,
        inProgressList_startDate: payload.newtask.startDate,
        inProgressList_endDate: payload.newtask.endDate,
        inProgressList_importance: payload.newtask.importance,
      };
    } else if (progress === 'In Review') {
      progressUrl = 'addinreviewlist';
      newData = {
        inReviewList_content: payload.newtask.content,
        inReviewList_startDate: payload.newtask.startDate,
        inReviewList_endDate: payload.newtask.endDate,
        inReviewList_importance: payload.newtask.importance,
      };
    } else if (progress === 'Blocked') {
      progressUrl = 'addblockedlist';
      newData = {
        blockedList_content: payload.newtask.content,
        blockedList_startDate: payload.newtask.startDate,
        blockedList_endDate: payload.newtask.endDate,
        blockedList_importance: payload.newtask.importance,
      };
    } else {
      progressUrl = 'addcompletedlist';
      newData = {
        completedList_content: payload.newtask.content,
        completedList_startDate: payload.newtask.startDate,
        completedList_endDate: payload.newtask.endDate,
        completedList_importance: payload.newtask.importance,
      };
    }
    setState(e => !e);
    await fetchData(progressUrl, newData);
    handleRender();
  };

  const selectDispatch = async (progress, data) => {
    if (progress === 'Request') {
      await dispatch(newRequest(data.newtask));
    } else if (progress === 'In Progress') {
      await dispatch(newInProgress(data.newtask));
    } else if (progress === 'In Review') {
      await dispatch(newInReview(data.newtask));
    } else if (progress === 'Blocked') {
      await dispatch(newBlocked(data.newtask));
    } else {
      await dispatch(newCompleted(data.newtask));
    }
  };

  const [loading, setLoading] = useState(false);
  const fetchData = async (progressUrl, newData) => {
    try {
      setLoading(true);
      const resPost = await fetch(
        `http://localhost:8001/workspace/643d124367f11568276fbfee/${progressUrl}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newData),
        }
      );
      if (resPost.status !== 200) return 'fail';
      const data = await resPost.json();
      if (data && data.newtask) {
        selectDispatch(data.progress, data.newtask);
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
            <>
              <ReactDatePicker
                className="addDate"
                dateFormat="yyyy.MM.dd"
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                ref={startDateRef}
              />
              <span> ~</span>
              <ReactDatePicker
                className="addDate"
                dateFormat="yyyy.MM.dd"
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                ref={endDateRef}
              />
            </>
          </MyCalendarContainer>
        </MyTop>

        <MyContent
          required
          type="textarea"
          ref={contentRef}
          placeholder="Contents"
        />

        <MyBottom>
          <span style={{ fontSize: '.7rem' }}>중요도</span>
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
          <MySubmitButton onClick={handelClick}>Submit</MySubmitButton>
        </MySubmit>
      </MyNewTask>
    )
  );
}
