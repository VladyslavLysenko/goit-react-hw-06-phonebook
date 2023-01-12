import { useState } from 'react';
import { InnerWrap, SectionForm, CommonButton, Input } from './Form.styled';


export default function ContactForm({ onSubmit }) {
  const dispatch = useDispatch();

  const [contactName, setContactName] = useState('name', '');
  const [number, setNumber] = useState('number', '');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setContactName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handlerSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    console.log(onSubmit);
    const saved = onSubmit({ name: contactName, number: number });
    if (saved) {
      form.reset();
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <SectionForm>
        <InnerWrap>
          <label>
            Name
            <Input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Add your name..."
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </InnerWrap>
      </SectionForm>
      <SectionForm>
        <InnerWrap>
          <label>
            Number
            <Input
              onChange={handleChange}
              type="tel"
              name="number"
              placeholder="Add your number..."
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </InnerWrap>
      </SectionForm>
      <CommonButton type="submit">Add contact</CommonButton>
      <div />
    </form>
  );
}

