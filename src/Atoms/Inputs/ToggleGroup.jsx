import React from 'react';
import RadioGroup from '~/Atoms/Inputs/RadioGroup';
import styles from './Toggle.css';

const ToggleGroup = ({ ...radioProps }) => (
  <RadioGroup {...radioProps} theme={styles} />
);

ToggleGroup.propTypes = {};

export default ToggleGroup;
