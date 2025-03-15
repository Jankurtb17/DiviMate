import { api } from '../boot/axios'
import type { UserRegistration, VerifyUser } from './models/user';

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

export const verifyUser = async(verify_request: VerifyUser) => {
  try {
    const response = await api.post('/v1/users/verify', verify_request)
    return response
  } catch (error) {
    throw error
  }
}