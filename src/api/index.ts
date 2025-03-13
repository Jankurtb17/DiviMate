import axios from 'axios';
import type { UserRegistration } from './models/user';

export const googleSign = async (google_token: string) => {
  const response = await axios.post('http://127.0.0.1:8000/auth/google', {
    token: google_token,
  });

  return response;
};

export const userRegistration = async(registration: UserRegistration) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/v1/users/register', registration)
    return response
  } catch (error) {
    throw error
  }
}