import React, { PropTypes } from "react";
import RadioGroup from "../Inputs/RadioGroup";
import styles from "./Toggle.css";

const ToggleGroup = ({ ...radioProps }) => (
  <RadioGroup {...radioProps} theme={styles} />
)

ToggleGroup.propTypes = {};

export default ToggleGroup;
