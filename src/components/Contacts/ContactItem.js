import React from 'react';
import PropTypes from 'prop-types';
import { ContactBtn } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/actions';
export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span>
        {name}:{number}
      </span>
      <ContactBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ContactBtn>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
