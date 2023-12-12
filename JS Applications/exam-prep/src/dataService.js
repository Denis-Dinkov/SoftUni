import { api } from './api.js';

const dataEndPoints = {
  getAll: 'data/fruits?sortBy=_createdOn%20desc',
  singleFruit: 'data/fruits/',
}

async function getAll() {
  return await api.get(dataEndPoints.getAll);
}

async function getOne(id) {
  return await api.get(dataEndPoints.singleFruit + id);
}

async function createFruit(data) {
  return await api.post(dataEndPoints.singleFruit, data);
}

export const dataService = {
  getAll,
  getOne,
  createFruit
}