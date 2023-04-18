import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const MyInfoRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 40%;
  background-color: #d5cee8;
  height: 400px;
  overflow: scroll;
  border-bottom: 2px solid #725884;
  border-right: 2px solid #725884;
  /* box-shadow: 7px 7px 7px 0px #725884; */
  border-radius: 15px;
`;

const MyAddMember = styled.p`
  font-size: 1.3rem;
  color: #777;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const MyAddMemberInputWrap = styled.div`
  display: flex;
  background-color: white;
  width: 80%;
  height: 35px;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #777;
  margin-bottom: 40px;
  position: relative;
  padding: 5px;
`;

const MyaddMemberInput = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  color: #777;
  padding-left: 15px;
`;

const MyAddSearchIconWrap = styled.div`
  position: absolute;
  right: 10px;
`;
const MyMemberWrap = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
`;
const MyProfileImgWrap = styled.div`
  width: 50px;
  height: 50px;
`;

const MyMemberProfileImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const MyMemberName = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 800;
`;

const MyMemberCheckBox = styled.input`
  width: 30px;
  height: 30px;
  accent-color: #777;
  border-radius: 50%;
  cursor: pointer;
  border: none;
`;

export default function AddMember(props) {
  const { userlist, checkOnChange, checkedUserList } = props;
  const [inputs, setInputs] = useState('');
  const getInputs = e => {
    e.preventDefault();
    setInputs(e.target.value.toLowerCase());
  };
  // const searchResult = () => {
  //   axios
  //     .post('url')
  //     .then(res => {
  //       setSearchUserData(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   searchResult();
  // }, []);
  // 1.체크된 것들을 담은usestate로 빈 배열을 만든다.
  // 2. onchange에 체크된 유저 아이디만 담아주는 함수를 만든다.
  // 3. 그 아이디만 담긴것들을 인바이티드 멤버에 필터를 돌려주는 배열을 다시 만든다.
  // 4.그걸 인바이티드 멤버에 넣어준다.

  // const handleAddMembers = () => {
  //   const selectedMembers = searchUserData.filter(data =>
  //     checked.includes(data.user_id)
  //   );
  //   console.log(selectedMembers);
  // };

  return (
    <MyInfoRightWrap>
      <MyAddMember>Add Member</MyAddMember>
      <MyAddMemberInputWrap>
        <MyaddMemberInput
          placeholder="Search by name, email"
          onChange={getInputs}
        />
        <MyAddSearchIconWrap>
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: '22px' }} />
        </MyAddSearchIconWrap>
      </MyAddMemberInputWrap>
      {userlist
        .filter(e =>
          e.user_name ? e.user_name.toLowerCase().includes(inputs) : ''
        )
        .map(data => {
          return (
            <MyMemberWrap key={data.user_id}>
              <MyProfileImgWrap>
                <MyMemberProfileImg
                  src="/images/icon/user.png"
                  alt="멤버 이미지"
                />
              </MyProfileImgWrap>
              <MyMemberName>{data.user_name}</MyMemberName>
              <MyMemberCheckBox
                type="checkbox"
                onChange={e => {
                  checkOnChange(e.target.checked, data.user_id);
                }}
              />
            </MyMemberWrap>
          );
        })}
      {/* <MyMemberWrap>
        <MyProfileImgWrap>
          <MyMemberProfileImg src="/images/icon/user.png" alt="멤버 이미지" />
        </MyProfileImgWrap>
        <MyMemberName>김호준</MyMemberName>
        <MyMemberCheckBox type="checkbox" defaultChecked readOnly />
      </MyMemberWrap> */}
    </MyInfoRightWrap>
  );
}
