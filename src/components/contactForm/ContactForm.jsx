import React from 'react';
import { StyledContactForm } from './ContactForm.styled';
import propTypes from 'prop-types';

class ContactForm extends React.Component {
  static propTypes = {
    onAddContact: propTypes.func.isRequired,
    contacts: propTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handelOnChange = e => {
    const { target } = e;
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handelOnSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts, onAddContact } = this.props;

    const newContact = {
      number: number.trim(),
      name: name.trim(),
      id: crypto.randomUUID(),
    };

    if (!name.trim()) {
      return;
    }

    onAddContact(newContact);

    this.setState({
      contacts: [newContact, ...contacts],
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <StyledContactForm onSubmit={this.handelOnSubmit}>
        <label>
          Name:
          <input
            onChange={this.handelOnChange}
            value={this.state.name}
            placeholder="Enter name"
            name="name"
            required
          />
        </label>
        <label>
          Number:
          <input
            onChange={this.handelOnChange}
            value={this.state.number}
            placeholder="number"
            type="tel"
            name="number"
            required
          />
        </label>
        <button>Add contact</button>
      </StyledContactForm>
    );
  }
}

export default ContactForm;
