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

export const getUserId = (setState, { email }) => {
  const data = instance
    .post('user', { email })
    .then((response) => setState(response.data));
  return data;
};

export const registerSale = async (sale, authorization) => {
  const magicNumber = 404;
  const response = await instance
    .post('sales', sale, { headers: { authorization } })
    .catch((error) => error.response.data || magicNumber);
  return response;
};

export const registerSaleProducts = async (payload, authorization) => {
  const magicNumber = 404;
  const response = await instance
    .post('sales_products', payload, { headers: { authorization } })
    .catch((error) => error.response.data || magicNumber);
  return response;
};

export const getAllSales = (setState) => {
  const data = instance
    .get('customer/orders')
    .then((response) => setState(response.data));
  return data;
};

export const getSaleById = (id, setState) => {
  const data = instance.get(`sales/${id}`).then((response) => setState(response.data));
  return data;
};
