import React from "react";
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

const MeasurementForm = ({measurementType = "milestone"}) => (
  <form>
    <h2 className={styles.title}>Create a new measurement</h2>

    <TextField
      name="measurement_name"
      label="Name your measuremnt"
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
          name="milestone"
          label="Select a milestone"
          value="plv_available"
          options={options}
        />
      </div>
    :
      <div>
        <SelectField
          name="start_milestone"
          label="Select start milestone"
          value="plv_available"
          options={options}
        />

        <SelectField
          name="end_milestone"
          label="Select end milestone"
          value="po_due"
          options={options}
        />
      </div>
    }

  <div className={styles.actions}>
      <Button name="cancel">Cancel</Button>
      <Button name="save" submit>Save interval</Button>
    </div>
  </form>
);

export default MeasurementForm;
