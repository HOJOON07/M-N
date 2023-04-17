//초기상태
const initState = [];

// 액션타입설정
const LOGIN = 'user/LOGIN';
const ISLOGIN = 'user/ISLOGIN';
const SIGNUP = 'user/SIGNUP';
const LOGOUT = 'user/LOGOUT';

//액션 생성함수
export function login(userInfo) {
  return {
    type: LOGIN,
    payload: userInfo,
  };
}

export function isLogin(isLogin) {
  return {
    type: ISLOGIN,
    payload: isLogin,
  };
}

export function signup(userInfo) {
  return {
    type: SIGNUP,
    payload: userInfo,
  };
}

export function logout(userInfo) {
  return {
    type: LOGOUT,
    payload: userInfo,
  };
}
// Reducer
export default function user(state = initState, action) {
  switch (action.type) {
    case ISLOGIN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    case LOGIN:
      return state.filter(e => e.userId === action.payload.userId);
    case LOGOUT: {
      return [...state];
    }
    case SIGNUP:
      return [...state];
    default:
      return state;
  }
}
