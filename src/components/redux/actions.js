import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContacts',
  (contactName, number) => {
    return {
      payload: {
        id: nanoid(),
        name: contactName,
        number: number,
      },
    };
  }
);

export const deleteContact = createAction('contact/deleteContact');

export const setFilter = createAction('filters/setFilter');
