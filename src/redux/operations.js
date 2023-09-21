import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllContacts, addContactApi, deleteContactApi } from 'API/API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContactsAll',
  async (_, thunkAPI) => {
    try {
      const response = await getAllContacts();

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await addContactApi(contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await deleteContactApi(id);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
