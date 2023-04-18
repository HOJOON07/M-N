import React from 'react';
import styled from 'styled-components';

const MyCategorySelecteWrap = styled.div`
  display: flex;
  width: 100%;
  font-size: 20px;
  margin-bottom: 30px;
  position: relative;
  align-items: center;
`;

const MyCategoryTitle = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #777;
`;

const MyJobSelect = styled.select`
  position: absolute;
  right: 0;
  width: 170px;
  height: 30px;
  color: #777;
  border-radius: 5px;
  border: 1.5px solid #777;
  outline: none;
  text-align: center;
  font-size: 15px;
`;

export default function Select(props) {
  const { categoryOnChange } = props;

  const JOBLIST = [
    'FrontEnd',
    'BackEnd',
    'GameDeveloper',
    'FullStack',
    'Developer',
  ];
  return (
    <MyCategorySelecteWrap>
      <MyCategoryTitle>Category</MyCategoryTitle>
      <MyJobSelect
        name="Choose Category"
        onChange={e => {
          categoryOnChange(e);
        }}
      >
        {JOBLIST.map(item => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </MyJobSelect>
    </MyCategorySelecteWrap>
  );
}
