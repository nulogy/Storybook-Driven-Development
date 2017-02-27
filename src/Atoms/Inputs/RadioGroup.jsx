import React, { PropTypes } from 'react';
import styleProp from '~/utils/PropTypes/styleProp';
import baseStyles from './Radio.css';

const isChecked = (value, chosenValue) => value === chosenValue;

const isDisabled = (disabled, allDisabled) => (disabled === true || allDisabled === true);

const labelClass = (isLabelActive, isLabelDisabled) => {
  const classKey = ['label'];
  if (isLabelActive) classKey.push('Active');
  if (isLabelDisabled) classKey.push('Disabled');
  return classKey.join('');
};

const inputId = (name, value) => `${name}-${value}`;

const mapOptions = (
  name,
  options,
  chosenValue,
  styles,
  allDisabled,
  onChange,
) => (options.map(
  ({ text, value, disabled = false }) => (
    <label
      htmlFor={inputId(name, value)}
      className={styles[labelClass(isChecked(value, chosenValue), isDisabled(disabled, allDisabled))]}
      key={value}
    >
      <input
        checked={isChecked(value, chosenValue)}
        className={styles.radio}
        disabled={isDisabled(disabled, allDisabled)}
        id={inputId(name, value)}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      { text || value }
    </label>
  ),
));

const RadioGroup = ({
  disabled = false,
  name,
  onChange,
  options,
  theme,
  value,
}) => {
  const styles = Object.assign({}, baseStyles, theme);
  return (<div className={styles[disabled ? 'groupDisabled' : 'group']}>
    { mapOptions(name, options, value, styles, disabled, onChange) }
  </div>);
};

RadioGroup.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.node,
    }),
  ).isRequired,
  theme: styleProp(baseStyles),
  value: PropTypes.string,
};

export default RadioGroup;
