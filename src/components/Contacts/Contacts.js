import React from 'react';
import { ContactItem } from './ContactItem';
import { InnerWrap } from '../Form/Form.styled';
import { ContactList, Item } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'components/redux/selectors';
export const Contacts = () => {
  let contacts = useSelector(getContacts);

  let filter = useSelector(getFilter);

  if (filter) {
    contacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <InnerWrap>
      <ContactList>
        {contacts.map(item => (
          <Item key={item.id}>
            <ContactItem contact={item} />
          </Item>
        ))}
      </ContactList>
    </InnerWrap>
  );
};
