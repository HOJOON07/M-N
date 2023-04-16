import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/modules/user';

export default function GitHub() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // 깃헙에서 제공하는 코드를 분리하여 해당 코드를 깃헙 로그인을 처리하는 백엔드로 전송
    const CODE = new URL(window.location.href).searchParams.get('code');
    console.log(CODE);

    const gitHubLogin = async () => {
      try {
        const resGitLogin = await axios.post(
          'http://192.168.0.222:5500/user/githublogin',
          {
            token: CODE,
          }
        );

        // 백엔드에서 받아온 깃헙 사용자 정보 출력
        console.log('깃헙 로그인 성공', resGitLogin.data, resGitLogin.status);

        console.log('resGitLogin.data.id', resGitLogin.data.id);

        if (resGitLogin.status === 200) {
          axios
            .post('http://192.168.0.222:5500/user/gitloginsuccess', {
              user_id: resGitLogin.data.login,
              bio: resGitLogin.data.bio,
              user_email: resGitLogin.data.blog,
              user_name: resGitLogin.data.name,
            })
            .then(res => {
              navigate('/workspace');
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
          // navigate('/workspace');
        }
      } catch (err) {
        console.log('깃헙 로그인 에러 발생', err);
        navigate('/login');
      }
    };

    gitHubLogin();
  }, []);

  // useEffect(() => {
  //   async function loginFetch() {
  //     const tokenResponse = await axios.post(
  //       `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${CODE}`,
  //     );
  //     console.log(tokenResponse);
  //   }
  //   loginFetch();
  // });
}
