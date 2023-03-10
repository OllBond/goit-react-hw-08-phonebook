import { useSelector } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import css from '../../components/ContactForm/contactForm.module.css';

const PhoneBook = () => {
  const isContacts = Boolean(useSelector(getFilteredContacts).length);
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {isContacts && <ContactList />}
      {!isContacts && <p>No contacts in list</p>}
    </>
  );
};
export default PhoneBook;
