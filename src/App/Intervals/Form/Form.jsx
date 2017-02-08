import React from "react";
import TextField from "../../../Forms/Fields/TextField";
import SelectField from "../../../Forms/Fields/SelectField";

const options = [
  { value: "plv_available", text: "PLV available" },
  { value: "po_due", text: "PO due" }
];

const IntervalForm = props => (
  <form>
    <h2 className="title">Create new interval</h2>

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

    <div className="actions">
      <button className="button" name="cancel">Cancel</button>
      <button className="button" name="save" type="submit">Save interval</button>
    </div>
  </form>
);

export default IntervalForm;
