import { setToken, instance } from './auth-api';

export const userInfo = async data => {
  setToken(data);
  const { data: result } = await instance.get('/users');
  return result;
};

export const updateBalance = async data => {
  const { data: result } = await instance.patch('api/auth/users/balance', data);
  return result;
};
