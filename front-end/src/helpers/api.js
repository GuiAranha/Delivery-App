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

export const getUser = async () => (
  console.log('teste')
);
