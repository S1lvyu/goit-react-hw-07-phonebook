import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const phoneBookInitialState = {
  contacts: {
    items: [],
    isLoading: true,
    error: null,
  },
  filter: '',
};
const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};
const PhonebookSlice = createSlice({
  name: 'contacts',
  initialState: phoneBookInitialState,
  reducers: {
    editFilter: {
      reducer(state, action) {
        state.filter = action.payload.filter;
      },
      prepare(filter) {
        return {
          payload: {
            filter,
          },
        };
      },
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.items = [...state.contacts.items, action.payload];
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.filter = '';
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const phonebookReducer = PhonebookSlice.reducer;
export const { editFilter } = PhonebookSlice.actions;
