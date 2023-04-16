import React from 'react';
import styled from 'styled-components';
import loading from '../assets/images/loading.gif';

const MyBackground = styled.div`
  position: absolute;
  left: 0;
  background: #ffffffb7;
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MyLoadingText = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 5px;
`;

const MyLoading = styled.img`
  margin: 35px 0 30px;
  width: 100px;
`;

export default function Loading() {
  return (
    <MyBackground>
      <MyLoading src={loading} />
      <MyLoadingText>정보를 불러오는 중입니다</MyLoadingText>
      <MyLoadingText>잠시만 기다려주세요</MyLoadingText>
      <div style={{ width: '100vw', height: '100%' }} />
    </MyBackground>
  );
}
