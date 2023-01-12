import { useState, useEffect } from 'react';
import ContactForm from './Form/Form';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';

import { GlobalStyle } from '../GlobalStyle';
import { CommonBox } from './Form/Form.styled';
export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('phoneBookContacts'));

    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('phoneBookContacts', JSON.stringify(contacts));
  }, [contacts]);

  const saveContact = contact => {
    const checkName = contacts
      .map(item => item.name.toLowerCase())
      .some(item => item === contact.name.toLowerCase());

    if (checkName) {
      window.alert(`This contact ${contact.name} already excist `);
      return false;
    } else {
      setContacts([
        ...contacts,
        {
          id: nanoid(),
          name: contact.name,
          number: contact.number,
        },
      ]);
      return true;
    }
  };

  const saveFilter = filterValue => {
    setFilter(filterValue);
  };

  const deleteContact = key => {
    setContacts(contacts.filter(item => item.id !== key));
  };

  const filterValue = filter.toLowerCase();
  const filtredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filterValue)
  );

  return (
    <div>
      <CommonBox>
        <Section title="Phonebook">
          <ContactForm onSubmit={saveContact} />
        </Section>
      </CommonBox>
      <CommonBox>
        <Section title="Contacts">
          <Filter value={filter} onChange={saveFilter} />

          <Contacts handlerDelete={deleteContact} contacts={filtredContacts} />
        </Section>
      </CommonBox>
      <GlobalStyle />
    </div>
  );
}
