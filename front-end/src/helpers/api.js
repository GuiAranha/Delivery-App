import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3003',
});

export const loginUser = async ({ email, password }) => (
  instance.post('login', { email, password }).catch((error) => {
    console.log(error);
    return null;
  })
);

export const getUser = async () => (
  console.log('teste')
);
