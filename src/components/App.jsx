import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = ({ name, number }) => {
    const filterName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (filterName) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ],
      }));
    }
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div
        style={{
          flexDirection: 'column',
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.createContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList filteredContacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
