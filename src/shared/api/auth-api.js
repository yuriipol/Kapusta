import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global',
});

export const setToken = (accessToken = '') => {
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
};

export const registration = async data => {
  //   console.log('api-registration-data', data);
  //   setToken('');
  const { data: result } = await instance.post('/auth/register', data);

  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/auth/login', data);
  setToken(result.accessToken);

  return result;
};

export const logout = async () => {
  const { data: result } = await instance.post('/auth/logout');
  setToken('');
  return result;
};

export const userInfo = async data => {
  //   console.log('userInfo-data:', data);
  setToken(data);

  const { data: result } = await instance.get('/user');
  //   console.log('userInfo-result:', result);

  return result;
};
