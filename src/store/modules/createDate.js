import { subWeeks } from 'date-fns';

//워크 스페이스 생성 데이터 초기 상태
const initState = {
  workspace_leader: '만든 사람 아이디(user_id)',
  workspace_name: '',
  workspace_category: '',
  github_email: '',
  workspace_start: '',
  workspace_end: '',
  workspace_member: [],
  userlist: [],
};

// 멤버 추가, 날짜 선택 ,초대된 멤버, 카테고리 선택

const ADDMEMBER = 'create/addmember';
const DATE = 'create/date';
const INVITED = 'create/invited';
const CATEGORY = 'create/category';

export const addmber = data => {
  return {
    type: ADDMEMBER,
    payload: data,
  };
};

export const date = ({ start, end }) => {
  return {
    type: DATE,
    payload: { start, end },
  };
};

export const invited = ([member]) => {
  return {
    type: INVITED,
    payload: [member],
  };
};

export const category = data => {
  return {
    type: CATEGORY,
    payload: data,
  };
};

const create = (state = initState, action) => {
  switch (action.type) {
    case ADDMEMBER:
      return {
        ...state,
        workspace_member: action.payload.user_name,
      };
    case DATE:
      return {
        ...state,
        workspace_start: action.payload.workspace_start,
        workspace_end: action.payload.workspace_end,
      };
    case INVITED:
      return {
        ...state,
      };
    case CATEGORY:
      return {
        ...state,
        workspace_category: action.payload.workspace_category,
      };
    default:
      return state;
  }
};

export default create;
