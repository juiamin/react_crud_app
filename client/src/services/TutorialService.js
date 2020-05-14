import axios from 'axios';

const getAll = () => {
  return axios.get('/api/tutorials');
};

const get = (id) => {
  return axios.get(`/api/tutorials/${id}`);
};

const create = (data) => {
  return axios.post('/api/tutorials', data);
};

const update = (id, data) => {
  return axios.put(`/api/tutorials/${id}`, data);
};

const remove = (id) => {
  return axios.delete(`/api/tutorials/${id}`);
};

const removeAll = () => {
  return axios.delete(`/api/tutorials`);
};

const findByTitle = (title) => {
  return axios.get(`/api/tutorials?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
