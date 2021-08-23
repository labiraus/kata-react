import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToDoListElement.module.css';

const ToDoListElement = () => (
  <div className={styles.ToDoListElement} data-testid="ToDoListElement">
    ToDoListElement Component
  </div>
);

ToDoListElement.propTypes = {};

ToDoListElement.defaultProps = {};

export default ToDoListElement;
