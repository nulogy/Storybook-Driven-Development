import React from "react";
import Button from "~/Button";
import styles from "~/Forms/Form.css";
import TextField from "~/Forms/Fields/TextField";
import SelectField from "~/Forms/Fields/SelectField";

const options = [
  { value: "plv_available", text: "PLV available" },
  { value: "po_due", text: "PO due" }
];

const IntervalForm = props => (
  <form>
    <h2 className={styles.title}>Create new interval</h2>

    <TextField
      name="interval_name"
      label="Add interval name"
    />

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

  <div className={styles.actions}>
      <Button name="cancel">Cancel</Button>
      <Button name="save" submit>Save interval</Button>
    </div>
  </form>
);

export default IntervalForm;
