import { api } from './api.js';

const dataEndPoints = {
  getAll: 'data/fruits?sortBy=_createdOn%20desc',
  getOne: 'data/fruits/',
}

async function getAll() {
  return await api.get(dataEndPoints.getAll);
}

async function getOne(id) {
  return await api.get(dataEndPoints.getOne + id);
}

export const dataService = {
  getAll,
  getOne,
}