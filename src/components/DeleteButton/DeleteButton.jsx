import React from 'react';
import styles from './DeleteButton.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
export default function DeleteButton({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <button type="button" onClick={handleDelete} className={styles.button}>
      Delete
    </button>
  );
}
