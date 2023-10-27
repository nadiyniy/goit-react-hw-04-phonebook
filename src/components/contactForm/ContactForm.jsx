import React from 'react';
import { StyledContactForm } from './ContactForm.styled';
import propTypes from 'prop-types';
import { useState } from 'react';

const ContactForm = ({ onAddContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelOnChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handelOnSubmit = e => {
    e.preventDefault();

    const newContact = {
      number: number.trim(),
      name: name.trim(),
      id: crypto.randomUUID(),
    };

    if (!name.trim()) {
      return;
    }

    onAddContact(newContact);

    setName('');
    setNumber('');
  };

  return (
    <StyledContactForm onSubmit={handelOnSubmit}>
      <label>
        Name:
        <input
          onChange={handelOnChange}
          value={name}
          placeholder="Enter name"
          name="name"
          required
        />
      </label>
      <label>
        Number:
        <input
          onChange={handelOnChange}
          value={number}
          placeholder="number"
          type="tel"
          name="number"
          required
        />
      </label>
      <button>Add contact</button>
    </StyledContactForm>
  );
};

ContactForm.propTypes = {
  onAddContact: propTypes.func.isRequired,
  contacts: propTypes.array.isRequired,
};

export default ContactForm;
