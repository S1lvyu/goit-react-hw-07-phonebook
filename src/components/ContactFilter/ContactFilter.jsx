import React from 'react';
import styles from './ContactFilter.module.css';
import { editFilter } from 'redux/phonebookSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export default function ContactFilter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    return dispatch(editFilter(event.target.value));
  };

  return (
    <label className={styles.name}>
      Search contact by name
      <input
        type="text"
        name="filter"
        placeholder="Enter Name"
        value={filter}
        onChange={handleFilterChange}
        className={styles.input}
      />
    </label>
  );
}
