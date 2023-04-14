import React from 'react';
import styled from 'styled-components';
import MainSec from '../pages/components/Main/MainSec';
import MainFir from '../pages/components/Main/MainFir';

// Color Variables
const mainColor = '#623ad6';
const hoverMainColor = '#7855db';
const subColor = '#d5cee8';
const brightSubColor = '#e9e4f5';

export default function Main() {
  return (
    <>
      <MainFir />
      <MainSec />
    </>
  );
}
