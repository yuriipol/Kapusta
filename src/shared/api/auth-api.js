import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4040/',
});

export const setToken = async (token = '') => {
  console.log('token-setToken', token);
  instance.defaults.headers.Authorization = `Bearer ${token}`;
  //   instance.defaults.headers.common.authorization = `Bearer ${token}`;
  //   instance.defaults.headers.common['Authorization'] = token;
};

export const registration = async data => {
  const { data: result } = await instance.post('api/auth/users/register', data);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('api/auth/users/login', data);
  //   console.log('login-data', data);
  console.log('login-result', result);
  setToken(result.token);
  // instance.defaults.headers.common['Authorization'] = `Bearer ${result.token}`;

  return result;
};

export const logout = async () => {
  const { data: result } = await instance.post('/auth/logout');
  setToken('');
  return result;
};

export const userInfo = async data => {
  console.log('userInfo-data:', data);
  setToken(data);
  const { data: result } = await instance.get('/users');

  return result;
};
