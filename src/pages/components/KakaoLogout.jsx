// const kakaoLogoutUser = async (req, res) => {
//   const KAKAO_CLIENT_ID = 'c37163557aa622477d21aee2d6f6dbdc';
//   const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
//   const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
//   const KAKAO_LOGOUT_URI = 'http://localhost:3000';
//   const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_CLIENT_ID}&logout_redirect_uri=${KAKAO_LOGOUT_URI}`;
//   const KAKAO_API_KEY = 'a6465aaa30e63f178d91a0300e2eff18';
//   try {
//     // 서비스에서 로그아웃 시키는 코드 -- 엑세스 토큰을 만료시켜 더 이상 해당 사용자 정보로 카카오 api를 요청할 수 없음
//     // 해당 엑세스 토큰만 만료 처리 --> 만료된 토큰을 사용하는 모든 기기에서 로그아웃 됨
//     const logoutResponse = await fetch(
//       'https://kapi.kakao.com/v1/user/logout',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//           Authorization: `Bearer ${kakao_access_token}`,
//         },
//       }
//     );
//     console.log(logoutResponse.status);
//     // 웹 브라우저에 로그인된 카카오계정의 세션을 만료시키고 로그아웃, 리다이렉트로 로그아웃라우터로 요청을 보내 서비스에서도 로그아웃 처리..
//     const logoutRes = await fetch(
//       `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_API_KEY}&logout_redirect_uri=${KAKAO_REDIRECT_URI}`
//     );
//     console.log(logoutRes.status);
//     res.status(200).json('카카오 계정 로그아웃 요청 성공!');
//   } catch (err) {
//     console.error(err);
//     res.status(500).json('엑세스 토큰 받기 실패!!');
//   }
// };
