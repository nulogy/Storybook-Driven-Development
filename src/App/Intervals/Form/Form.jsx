/* eslint-disable camelcase */
import React, { PropTypes } from 'react';
import Button from '~/Button';
import styles from '~/Forms/Form.css';
import TextField from '~/Forms/Fields/TextField';
import SelectField from '~/Forms/Fields/SelectField';

const options = [
  { value: 'plv_available', text: 'PLV available' },
  { value: 'po_due', text: 'PO due' },
];

const IntervalForm = ({
  interval_name,
  start_milestone,
  end_milestone,
  handleChange,
}) => (
  <form>
    <h2 className={styles.title}>Create new interval</h2>

    <TextField
      name="interval_name"
      value={interval_name}
      label="Add interval name"
      onChange={handleChange}
    />

    <SelectField
      name="start_milestone"
      label="Select start milestone"
      value={start_milestone}
      options={options}
      onChange={handleChange}
    />

    <SelectField
      name="end_milestone"
      label="Select end milestone"
      value={end_milestone}
      options={options}
      onChange={handleChange}
    />

    <div className={styles.actions}>
      <Button name="cancel">Cancel</Button>
      <Button name="save" submit>Save interval</Button>
    </div>
  </form>
);

IntervalForm.propTypes = {
  interval_name: PropTypes.string,
  start_milestone: PropTypes.string,
  end_milestone: PropTypes.string,
  handleChange: PropTypes.func,
};

export default IntervalForm;
