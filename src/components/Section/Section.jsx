import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section({ children, title }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>{title}</h1>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string,
};
