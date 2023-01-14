// import { useState, useEffect } from 'react';
import ContactForm from './Form/Form';
// import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';

import { GlobalStyle } from '../GlobalStyle';
import { CommonBox } from './Form/Form.styled';
export function App() {



  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem('phoneBookContacts'));

  //   if (savedContacts) {
  //     setContacts(savedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('phoneBookContacts', JSON.stringify(contacts));
  // }, [contacts]);




  // const deleteContact = key => {
  //   setContacts(contacts.filter(item => item.id !== key));
  // };

  // const filterValue = filter.toLowerCase();
  // const filtredContacts = contacts.filter(item =>
  //   item.name.toLowerCase().includes(filterValue)
  // );

  return (
    <div>
      <CommonBox>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
      </CommonBox>
      <CommonBox>
        <Section title="Contacts">
          <Filter />

          <Contacts />
        </Section>
      </CommonBox>
      <GlobalStyle />
    </div>
  );
}
