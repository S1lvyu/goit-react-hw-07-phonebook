import React from 'react';
import DeleteButton from 'components/DeleteButton/DeleteButton';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

export default function ContactItem({ contact }) {
  return (
    <li className={styles.item}>
      <span className={styles.span}>{contact.name}:</span> {contact.phone}
      <DeleteButton contact={contact} />
    </li>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object,
};
