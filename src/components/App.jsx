import ContactForm from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';
import { GlobalStyle } from '../GlobalStyle';
import { CommonBox } from './Form/Form.styled';
export function App() {
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
