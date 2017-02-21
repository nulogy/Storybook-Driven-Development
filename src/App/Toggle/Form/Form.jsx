import React, { PropTypes } from 'react';
import Button from '~/Atoms/Button';
import Icon from '~/Atoms/Icon';
import styles from '~/Atoms/Form.css';
import ToggleField from '~/Molecules/Fields/ToggleField';
import TextField from '~/Molecules/Fields/TextField';
import SelectField from '~/Molecules/Fields/SelectField';

const options = [
  { value: 'plv_available', text: 'PLV available' },
  { value: 'po_due', text: 'PO due' },
];

const measurementTypes = [
  { value: 'milestone', text: <span><Icon name="Milestone" /> Single Point Interval</span> },
  { value: 'interval', text: <span><Icon name="Interval" /> 2 Point Interval</span> },
];

const MeasurementForm = ({
  intervalName,
  startMilestone,
  endMilestone,
  handleChange,
  measurementType,
}) => (
  <form>
    <h2 className={styles.title}>Create a new interval</h2>

    <TextField
      name="intervalName"
      value={intervalName}
      label="Name your interval"
      onChange={handleChange}
    />

    <ToggleField
      label="Select a measurement type"
      name="measurementType"
      value={measurementType}
      options={measurementTypes}
      onChange={handleChange}
    />

    { measurementType === 'milestone' ?
      <div>
        <SelectField
          name="startMilestone"
          label="Select a milestone"
          value={startMilestone}
          options={options}
          onChange={handleChange}
        />
      </div>
    :
      <div>
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
      </div>
    }

    <div className={styles.actions}>
      <Button name="cancel">Cancel</Button>
      <Button name="save" submit>Save interval</Button>
    </div>
  </form>
);

MeasurementForm.propTypes = {
  intervalName: PropTypes.string,
  startMilestone: PropTypes.string,
  endMilestone: PropTypes.string,
  measurementType: PropTypes.string,
  handleChange: PropTypes.func,
};

export default MeasurementForm;
