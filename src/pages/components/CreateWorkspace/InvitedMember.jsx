import React from 'react';
import styled from 'styled-components';

const subColor = '#d5cee8';

const MyRightContent = styled.div`
  width: 16%;
  height: 100%;
  background-color: ${subColor};
  border: 1px solid #777;
  border-radius: 10px;

  margin-left: 25px;
`;

const MyRightName = styled.p`
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-align: center;
  color: white;
  font-weight: bold;
  margin: 25px 0 30px 0;
`;

const MyAddMeberWrap = styled.div`
  width: 87%;
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const MyAddMeberImgWrap = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1.5px solid white;
`;
const MyAddMeberImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const MyAddMemberName = styled.p`
  color: white;
  font-weight: 800;
  font-size: 20px;
`;
export default function InvitedMember(props) {
  const { checkedUserList, userlist, searchUserList } = props;
  // const result = () => {
  //   let arr = [];
  //   for (let i = 0; i < userlist.length; i++) {
  //     for (let j = 0; j < checkedUserList.length; j++) {
  //       if (userlist[i].user_id == checkedUserList[j]) {
  //         arr.push(userlist[i]);
  //       }
  //     }
  //   }
  //   return arr;
  // };
  // const searchUserList = result();

  return (
    <MyRightContent>
      <MyRightName>
        Invited <br /> Member
      </MyRightName>
      {searchUserList.map(list => {
        // console.log(list);
        return (
          <MyAddMeberWrap key={list.user_id}>
            <MyAddMeberImgWrap>
              <MyAddMeberImg src="/images/icon/user.png" />
            </MyAddMeberImgWrap>
            <MyAddMemberName>{list.user_name}</MyAddMemberName>
          </MyAddMeberWrap>
        );
      })}
      {/* <MyRightName>
        Invited <br /> Member
      </MyRightName>
      <MyAddMeberWrap>
        <MyAddMeberImgWrap>
          <MyAddMeberImg src="/images/icon/user.png" />
        </MyAddMeberImgWrap>
        <MyAddMemberName>김호준</MyAddMemberName>
      </MyAddMeberWrap> */}
    </MyRightContent>
  );
}
