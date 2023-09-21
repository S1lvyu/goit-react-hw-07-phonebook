import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={styles.list}>
      {filteredContacts.length === 0 ? (
        <p className={styles.message}>No contacts found</p>
      ) : (
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </ul>
  );
}
