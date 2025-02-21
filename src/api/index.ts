import axios from 'axios';

export const googleSign = async (google_token: string) => {
  const response = await axios.post('http://127.0.0.1:8000/auth/google', {
    token: google_token,
  });

  return response;
};
