import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToDoForm.module.css';

const ToDoForm = () => (
  <form className={styles.ToDoForm} data-testid="ToDoForm">
    <input></input>
    <button>Add</button>
  </form>
);

ToDoForm.propTypes = {};

ToDoForm.defaultProps = {};

export default ToDoForm;
