import React, { PropTypes } from "react";
import Button from "~/Button";
import styles from "~/Forms/Form.css";
import RadioField from "~/Forms/Fields/RadioField";
import TextField from "~/Forms/Fields/TextField";
import SelectField from "~/Forms/Fields/SelectField";

const options = [
  { value: "plv_available", text: "PLV available" },
  { value: "po_due", text: "PO due" }
];

const measurementTypes = [
  { value: "milestone", text: "A single point milestone" },
  { value: "interval", text: "An interval between two points" },
];

const MeasurementForm = ({
  interval_name,
  start_milestone,
  end_milestone,
  handleChange,
  measurementType = "milestone"
}) => (
  <form>
    <h2 className={styles.title}>Create a new measurement</h2>

    <TextField
      name="interval_name"
      value={interval_name}
      label="Name your measuremnt"
      onChange={handleChange}
    />

    <RadioField
      label="Select a measurement type"
      name="measurement_type"
      value={measurementType}
      options={measurementTypes}
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
}

export default MeasurementForm;
