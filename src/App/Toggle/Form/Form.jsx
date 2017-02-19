import React, { PropTypes } from "react";
import Button from "~/Atoms/Button";
import Icon from "~/Atoms/Icon";
import styles from "~/Atoms/Form.css";
import ToggleField from "~/Forms/Fields/ToggleField";
import TextField from "~/Forms/Fields/TextField";
import SelectField from "~/Forms/Fields/SelectField";

const options = [
  { value: "plv_available", text: "PLV available" },
  { value: "po_due", text: "PO due" }
];

const measurementTypes = [
  { value: "milestone", text: <span><Icon name="Milestone" /> Single Point Interval</span> },
  { value: "interval", text: <span><Icon name="Interval" /> 2 Point Interval</span> },
];

const MeasurementForm = ({
  interval_name,
  start_milestone,
  end_milestone,
  handleChange,
  measurementType,
}) => (
  <form>
    <h2 className={styles.title}>Create a new interval</h2>

    <TextField
      name="interval_name"
      value={interval_name}
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

    { measurementType === "milestone" ?
      <div>
        <SelectField
          name="start_milestone"
          label="Select a milestone"
          value={start_milestone}
          options={options}
          onChange={handleChange}
        />
      </div>
    :
      <div>
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
      </div>
    }

    <div className={styles.actions}>
      <Button name="cancel">Cancel</Button>
      <Button name="save" submit>Save interval</Button>
    </div>
  </form>
);

MeasurementForm.propTypes = {
  interval_name: PropTypes.string,
  start_milestone: PropTypes.string,
  end_milestone: PropTypes.string,
  measurementType: PropTypes.string,
  handleChange: PropTypes.func,
};

export default MeasurementForm;
