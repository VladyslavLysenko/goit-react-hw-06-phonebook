import { createAction, nanoid } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContacts',
  (contactName, number) => {
    return {
      payload: {
        id: nanoid(),
        contactName,
        number,
      },
    };
  }
);

export const deleteContact = createAction('contact/deleteContact');

export const setFilter = createAction('filters/setFilter', value => {
  return { payload: value };
});
