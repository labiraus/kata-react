import React from 'react';
import PropTypes from 'prop-types';
import styles from './EaserEgg.module.css';

const EaserEgg = props => (
  <ul className={styles.EaserEgg} data-testid="EaserEgg">
    {props.elements.map((value, index)=>
       <li key={index}>{value}</li>
    )}
  </ul>
);

EaserEgg.propTypes = {};

EaserEgg.defaultProps = {};

export default EaserEgg;
