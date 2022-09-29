import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const loginUser = async ({ email, password }) => {
  const response = await instance
    .post('login', { email, password })
    .catch((error) => error.response.data);
  return response;
};

export const registerUser = async ({ email, name, password }) => {
  const response = await instance
    .post('register', { email, name, password })
    .catch((error) => error.response.data);
  return response;
};

export const getAllProducts = (setState) => {
  const data = instance.get('products').then((response) => setState(response.data));
  return data;
};

export const getAllByRole = (setState, role) => {
  const data = instance
    .get(`users/${role}`)
    .then((response) => setState(response.data));
  return data;
};
