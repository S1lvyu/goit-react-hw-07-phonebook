import axios from 'axios';

const BASE_URL = 'https://650b3c7fdfd73d1fab09cdf8.mockapi.io';
const API = axios.create({
  baseURL: BASE_URL,
});

export const getAllContacts = () => API.get('/contacts');
export const addContactApi = newContact => API.post('/contacts', newContact);
export const deleteContactApi = id => API.delete(`/contacts/${id}`);
