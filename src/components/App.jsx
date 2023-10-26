import React from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import Notification from './notifications/Notification';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  getFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .trim()
        .toLowerCase()
        .includes(this.state.filter.trim().toLowerCase())
    );
  };

  handelOnFilter = e => {
    const { target } = e;
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddContact = newContact => {
    const dublicate = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    dublicate
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState({
          contacts: [newContact, ...this.state.contacts],
        });
  };
  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const filterContact = this.getFilterContacts();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>

        <ContactForm
          onAddContact={this.handleAddContact}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilterChange={this.handelOnFilter}
        />
        {this.state.contacts.length ? (
          <ContactList
            contacts={filterContact}
            deletedContact={this.handleDeleteContact}
          />
        ) : (
          <Notification message={'No contact'} />
        )}
      </div>
    );
  }
}
