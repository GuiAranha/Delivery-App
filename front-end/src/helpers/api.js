import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3003/',
});

export const loginUser = async ({ email, password }) => {
  const data = await instance
    .post('login', { email, password })
    .catch((error) => console.log(error));
  console.log(data);
};

export const getUser = async () => (
  console.log('teste')
);
