import React from 'react';
import PropTypes from 'prop-types';
import ToDoListElement from '../ToDoListElement/ToDoListElement'
import styles from './ToDoList.module.css';

const ToDoList = toDos => (
  <div className={styles.ToDoList} data-testid="ToDoList">
    {toDos.map((value,index) =>{
      return <ToDoListElement value={value} key={index} />
    })}
  </div>
);

ToDoList.propTypes = {};

ToDoList.defaultProps = {};

export default ToDoList;
