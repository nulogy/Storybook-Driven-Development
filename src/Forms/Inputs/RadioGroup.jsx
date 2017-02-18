import React, { PropTypes } from "react";
import styleProp from "~/utils/PropTypes/styleProp";
import baseStyles from "./Radio.css";

const isChecked = (value, chosenValue) => value === chosenValue;

const isDisabled = (disabled, allDisabled) => (disabled === true || allDisabled === true);

const labelClass = (isActive, isDisabled) => {
  const classKey = ["label"];
  if (isActive) classKey.push("Active");
  if (isDisabled) classKey.push("Disabled");
  return classKey.join("");
};

const mapOptions = (
  name,
  options,
  chosenValue,
  styles,
  allDisabled,
  onChange
) => ( options.map(
  ({text, value, disabled = false}) => (
    <label className={styles[labelClass(isChecked(value, chosenValue), isDisabled(disabled, allDisabled))]} key={value}>
      <input
        className={styles.radio}
        type="radio"
        name={name}
        value={value}
        checked={isChecked(value, chosenValue)}
        disabled={isDisabled(disabled, allDisabled)}
        onChange={onChange}
      />
      { text ? text : value }
    </label>
  )
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
  return (<div className={styles[disabled ? "groupDisabled" : "group"]}>
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
      text: PropTypes.string,
    })
  ).isRequired,
  theme: styleProp(baseStyles),
  value: PropTypes.string,
};

export default RadioGroup;
