import { api } from '../boot/axios'
import type { UserRegistration, VerifyUser, UserLoginRequest } from './models/user';

export const googleSign = async (google_token: string) => {
  const response = await api.post('/auth/google', {
    token: google_token,
  });

  return response;
};

export const userRegistration = async(registration: UserRegistration) => {
  try {
    const response = await api.post('/v1/users/register', registration)
    return response
  } catch (error) {
    throw error
  }
}

export const verifyUser = async(verifyRequest: VerifyUser) => {
  try {
    const response = await api.post('/v1/users/verify', verifyRequest)
    return response
  } catch (error) {
    throw error
  }
}

export const loginUser = async (loginRequest: UserLoginRequest) => {
  try  {
    const formData = new URLSearchParams();
    formData.append('username', loginRequest.username);
    formData.append('password', loginRequest.password);

    const response = await api.post('/auth/token', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response
  } catch (error) {
    throw error
  }
}