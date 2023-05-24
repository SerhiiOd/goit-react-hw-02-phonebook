import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Section, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
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

  addContact = ({ name, number }) => {
    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <Title>Phonebook</Title>
          <ContactForm createUser={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Title>Contacts</Title>
          <Filter value={this.filter} onChange={this.handleFilter} />
          <ContactList contacts={this.state.contacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
