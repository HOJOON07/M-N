// import React, { useState } from 'react';
// import styled from 'styled-components';

// // Color Variables
// const mainColor = '#623ad6';
// const hoverMainColor = '#7855db';

// // Styled Components
// const MyProfile = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 220px;
//   text-align: center;
//   margin: 40px auto;

//   & > form > div {
//     background-color: #efefef;
//     width: 100%;
//     height: 220px;
//   }

//   & > form > input {
//     position: relative;
//     bottom: 40px;
//     opacity: 0;
//     cursor: pointer;
//     width: 100%;
//   }

//   & > form > label {
//     background-color: ${mainColor};
//     border-style: none;
//     height: 55px;
//     font-size: 16px;
//     color: white;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     &:hover {
//       background-color: ${hoverMainColor};
//     }
//   }
// `;

// const MyDetailInfo = styled.div``;

// const MyInfoArea = styled.div`
//   display: flex;
// `;

// const MyReqArea = styled.div`
//   width: 13%;
//   vertical-align: middle;

//   & > p {
//     word-break: keep-all;
//   }
// `;

// const MyInput = styled.input`
//   border-radius: 0px;
//   border: 1px solid #707070;
//   padding: 2px 0 0 5px;

//   &:focus {
//     outline: 1px solid #333333;
//     border-radius: 0px;
//   }
// `;

// const MyInputArea = styled.span`
//   margin: auto 30px;
//   display: flex;
//   width: 80%;

//   ${MyInput} {
//     margin: 0 30px 0 15px;
//     width: 250px;
//     height: 35px;
//   }
// `;

// const MyErrArea = styled.div`
//   height: 30px;
// `;

// export default function DetailInfoArea() {
//   const positionList = [
//     '프론트엔드 개발자',
//     '백엔드 개발자',
//     '풀 스택 개발자',
//     '앱 개발자',
//     '게임 개발자',
//   ];
//   const [position, setPosition] = useState('');

//   const onChangePosition = e => {
//     setPosition(e.target.value);
//   };

//   return (
//     <>
//       <MyProfile>
//         <form encType="multipart/form-data">
//           <div>{/* <img alt="profile" /> */}</div>
//           <label htmlFor="file">이미지 업로드</label>
//           <input type="file" accept="image/jpg, image/jpeg, image/png" />
//         </form>
//       </MyProfile>
//       <MyDetailInfo>
//         <MyInfoArea>
//           <MyReqArea>
//             <p>포지션*</p>
//           </MyReqArea>
//           <MyInputArea>
//             <select
//               onChange={onChangePosition}
//               value={position}
//               style={{ height: '35px', marginLeft: '15px' }}
//             >
//               {positionList.map(el => {
//                 return (
//                   <option value={el} key={el}>
//                     {el}
//                   </option>
//                 );
//               })}
//             </select>
//           </MyInputArea>
//         </MyInfoArea>
//         <MyErrArea />
//         <MyInfoArea>
//           <MyReqArea>
//             <p>Bio</p>
//           </MyReqArea>
//           <MyInputArea>
//             <MyInput type="text" placeholder="Add a bio..." />
//           </MyInputArea>
//         </MyInfoArea>
//         <MyInfoArea>
//           <MyReqArea>
//             <p>주요 기술</p>
//           </MyReqArea>
//           <MyInputArea>
//             <MyInput
//               type="text"
//               placeholder="프로젝트에서 사용 가능한 기술을 작성해주세요"
//             />
//           </MyInputArea>
//         </MyInfoArea>
//       </MyDetailInfo>
//     </>
//   );
// }
