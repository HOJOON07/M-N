import React, { useRef } from 'react';
import defaultProfile from '../../assets/images/default-profile.png';
import styled from 'styled-components';

// Color Variables
const contentColor = '#fff';
const subColor = '#cbcbcb';
const greyColor = '696969';

// Styled Components
const MyNewTask = styled.div`
  border: 1px solid ${subColor};
  border-radius: 5px;
  background-color: ${contentColor};
  padding: 10px;
  margin-bottom: 20px;
  & > div:nth-child(2) {
    margin: 10px 0;
  }
`;

const MyTop = styled.div`
  justify-content: space-between;
  display: flex;
`;
const MyCalendar = styled.input`
  width: 100px;
  font-size: 10px;
`;

const MyContent = styled.input`
  height: 50px;
  width: 95%;
`;
const MyBottom = styled.div`
  font-size: 11px;
  align-items: center;
  display: flex;
`;

const MySubmit = styled.div`
  display: flex;
  justify-content: flex-end;
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

export default function NewTask() {
  const dateRef = useRef();
  const contentRef = useRef();
  return (
    <MyNewTask>
      <MyTop>
        <img
          src={defaultProfile}
          style={{ width: '20px', height: '20px' }}
          alt="기본 프로필 이미지"
        />
        <MyCalendar type="date" ref={dateRef} />
      </MyTop>
      <div>
        <MyContent type="textarea" ref={contentRef} placeholder="Contents" />
      </div>
      <MyBottom>
        <input type="radio" value="high" name="myImportance" />
        High
        <input type="radio" value="medium" name="myImportance" />
        Medium
        <input type="radio" value="low" name="myImportance" />
        Low
      </MyBottom>
      <MySubmit>
        <MySubmitButton>submit</MySubmitButton>
      </MySubmit>
    </MyNewTask>
  );
}
