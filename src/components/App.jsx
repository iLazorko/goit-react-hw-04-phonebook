import React, { useState, useEffect } from 'react';
import { ContactsForm } from './contactsForm/ContactsForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { Wrapper, Title, Heading } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const handleChangeFilter = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const contactsCatalog = newContact => {
    if (
      contacts.some(
        contactPerson =>
          contactPerson.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => [
      ...prevState.filter(contact => contact.id !== id),
    ]);
  };

  return (
    <>
      <Wrapper>
        <Heading>Phonebook</Heading>
        <ContactsForm contactsCatalog={contactsCatalog} />
        <Title>Contacts</Title>
        <Filter onChange={handleChangeFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={deleteContact}
        />
      </Wrapper>
    </>
  );
};
