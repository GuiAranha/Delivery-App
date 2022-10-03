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
    .then((response) => setState(response.data.id));
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

export const getAllOrders = (setState, { id, role }) => {
  const data = instance
    .post('orders', { id, role })
    .then((response) => setState(response.data));
  return data;
};

export const getSaleById = (id) => {
  const data = instance.get(`sales/${id}`).then((response) => {
    console.log(response.data);
    return response.data;
  });
  return data;
};

export const getSaleByEmail = async (setState, { email }) => {
  const { id, role } = await instance
    .post('user', { email })
    .then((response) => response.data);

  return getAllOrders(setState, { id, role });
};

export const updateSale = async ({ id, status }) => {
  const data = await instance
    .put(`sales/${id}`, { status })
    .then((response) => response.data);

  return data;
};
