import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    // додавання заголовку в axios
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  // якщо токен не передали, вона його обнуляє
  instance.defaults.headers.authorization = '';
};
export const signup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    // чи цей token ще є, якщо так повертається user і token
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('/users/logout');
  setToken();
  return data;
};

export default instance;
