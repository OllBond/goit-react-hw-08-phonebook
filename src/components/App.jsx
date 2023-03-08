import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Navbar from './Navbar/Navbar';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import UserRoutes from 'UserRoutes';

import css from './ContactForm/ContactForm.module.css';

export const App = () => {
  const isContacts = Boolean(useSelector(getFilteredContacts).length);
  return (
    <div>
      <Navbar />
      <UserRoutes />
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {isContacts && <ContactList />}
      {!isContacts && <p>No contacts in list</p>}
    </div>
  );
};
