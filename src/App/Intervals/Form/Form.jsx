/* eslint-disable camelcase */
import React, { PropTypes } from 'react';
import Button from '~/Atoms/Button';
import styles from '~/Atoms/Form.css';
import TextField from '~/Molecules/Fields/TextField';
import SelectField from '~/Molecules/Fields/SelectField';

const options = [
  { value: 'plv_available', text: 'PLV available' },
  { value: 'po_due', text: 'PO due' },
];

const IntervalForm = ({
  intervalName,
  startMilestone,
  endMilestone,
  handleChange,
}) => (
  <form>
    <h2 className={styles.title}>Create new interval</h2>

    <TextField
      name="intervalName"
      value={intervalName}
      label="Add interval name"
      onChange={handleChange}
    />

    <SelectField
      name="startMilestone"
      label="Select start milestone"
      value={startMilestone}
      options={options}
      onChange={handleChange}
    />

    <SelectField
      name="endMilestone"
      label="Select end milestone"
      value={endMilestone}
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
  intervalName: PropTypes.string,
  startMilestone: PropTypes.string,
  endMilestone: PropTypes.string,
  handleChange: PropTypes.func,
};

export default IntervalForm;
