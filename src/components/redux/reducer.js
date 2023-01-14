import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact, setFilter } from './actions';

const tasksInitialStateContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = createReducer(tasksInitialStateContacts, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

const filtersInitialState = '';

export const filtersReducer = createReducer(filtersInitialState, {
  [setFilter]: (state, action) => {
    state = action.payload;
    return state;
  },
});
