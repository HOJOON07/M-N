const initState = [
  {
    id: 0,
    userId: 'test',
    userPw: '1111',
    isLogin: false,
  },
  {
    id: 1,
    userId: 'admin',
    userPw: '1111',
    isLogin: false,
  },
];

const LOGIN = 'user/LOGIN';
const SINGUP = 'user/SIGNUP';
const LOGOUT = 'user/LOGOUT';

export function login(userInfo) {
  return {
    type: LOGIN,
    payload: userInfo,
  };
}

export function signup(userInfo) {
  return {
    type: SINGUP,
    payload: userInfo,
  };
}

export function logout(userInfo) {
  return {
    type: LOGOUT,
    payload: userInfo,
  };
}

export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return state.filter(e => e.userId === action.payload.userId);
    case LOGOUT: {
      return [
        ...state,
        {
          ...action.payload,
          userId: '',
          userPw: '',
          isLogin: false,
        },
      ];
    }
    case SINGUP:
      return [
        ...state,
        {
          ...action.payload,
          id: state.length,
          userId: action.payload.userId,
          userPw: action.payload.userPw,
          isLogin: true,
        },
      ];
    default:
      return state;
  }
}
