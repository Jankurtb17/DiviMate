import { googleSdkLoaded } from 'vue3-google-login';
// import { googleSign } from '../../../api/index';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Define the types
interface GoogleResponse {
  credential: string;
  clientId: string;
  select_by: string;
}

export const useGoogleSign = () => {
  const router = useRouter();
  const googleLogin = () => {
    googleSdkLoaded((google) => {
      google.accounts.oauth2
        .initCodeClient({
          client_id:
            '98122425843-snemcmrntgr0f1glbld448dflg98b9s8.apps.googleusercontent.com',
          scope: 'email profile openid',
          redirect_uri: 'http://127.0.0.1:8000/auth/google',
          callback: (response) => {
            console.log(response);
            if (response.code) {
              // googleSign(response.code);
            }
          },
        })
        .requestCode();
    });
  };

  const handleGoogleSignIn = async (response: GoogleResponse) => {
    await axios
      .post('http://localhost:8000/auth/google', {
        token: response.credential,
      })
      .then((response) => {
        const jwtToken = response.data.access_token;
        localStorage.setItem('jwt_token', jwtToken);

        router.push('/');
      });

    console.log('Logged in successfully!');
  };

  return {
    googleLogin,
    handleGoogleSignIn,
  };
};
