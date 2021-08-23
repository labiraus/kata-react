import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToDoModal.module.css';

const ToDoModal = () => (
  <div className={styles.ToDoModal} data-testid="ToDoModal">
    ToDoModal Component
  </div>
);

ToDoModal.propTypes = {};

ToDoModal.defaultProps = {};

export default ToDoModal;
