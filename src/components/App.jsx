import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]:event.currentTarget.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  
    const isContactExist = this.state.contacts.find(contact => contact.name === this.state.name);
  
    if (isContactExist) {
      alert(`${isContactExist.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: prevState.name,
            number: prevState.number
          }
        ]
      }));
      this.reset();
    }
  };

  
  reset = () => {
    this.setState({ name: '',number:'', });
  };

  deleteContact =(id)=>{
    this.setState(prevState=>({
      contacts:prevState.contacts.filter(contact=>contact.id !== id)
    }))

  }

  render() {
    
    const contactsFiltered =this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    
    

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
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
          </label>
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>Find contacts by name
        <input type ="text" value={this.state.filter} onChange={this.handleChange} name="filter"></input>
        </label>
        <ul>
          {contactsFiltered.map(contact => (
            
            <li key={contact.id}>{contact.name} : {contact.number} <button type='button' onClick={()=>this.deleteContact(contact.id)}>Delete</button></li>
            
            
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
