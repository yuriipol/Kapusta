import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4040/',
});

export const setToken = async (token = '') => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
  console.log(instance.defaults.headers.Authorization);

  //   instance.defaults.headers.common.authorization = `Bearer ${token}`;
  //   instance.defaults.headers.common['Authorization'] = token;
};

export const registration = async data => {
  const { data: result } = await instance.post('api/auth/users/register', data);
  console.log('result-registration', result);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('api/auth/users/login', data);
  setToken(result.token);
  console.log('result-login', result);

  return result;
};

export const logout = async () => {
  const { data: result } = await instance.get('api/auth/users/logout');
  setToken('');
  return result;
};

export const userInfo = async data => {
  setToken(data);
  const { data: result } = await instance.get('/users');

  return result;
};

export const getUserByID = async id => {
  const { data: result } = await instance.get(`api/auth/users/${id}`, {
    withCredentials: true,
  });
  console.log('result-userInfo', result);
  return result;
};

export const googleLogin = async () => {
  console.log('googleLogin');

  await instance.get('api/auth/users/google');
  //   console.log('result-googleLogin', result);
  //   setToken(result.token);
  //   return;
};
export const googleGetData = async () => {
  console.log('googleGetData');

  const result = await instance.get('api/auth/users/google/callback', {
    withCredentials: true,
  });

  console.log('result-googleGetData', result);

  //   setToken(result.token);
  return result;
};
