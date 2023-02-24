import React, { Component } from 'react';
import { Filter } from 'components/Filter/Filter';

import { NameInput } from 'components/NameInput/NameInput';
import { Contacts } from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = cont => {
    this.setState(prevState => {
      // console.log(cont);
      cont.id = nanoid();
      return {
        contacts: [cont, ...prevState.contacts],
      };
    });
  };
  deleteContact = cont => {
    this.setState(({ contacts }) => {
      console.log(contacts);
      return {
        contacts: contacts.filter(e => e.id !== cont),
      };
    });
  };

  getFilter = value => {
    let name = value.currentTarget.value.toLowerCase();
    this.setState({
      filter: name,
    });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <NameInput addstate={this.addContact} state={this.state} />
        <Filter filter={this.getFilter} />
        <Contacts state={this.state} deleteContact={this.deleteContact} />
      </div>
    );
  }
}
