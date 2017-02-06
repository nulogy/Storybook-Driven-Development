import React from 'react';

const IntervalForm = props => (
  <form>
    <h2 className="title">Create new interval</h2>

    <div className="field">
      <label className="label" htmlFor="interval_name"  >Add interval name</label>
      <input className="inputText" type="text" id="interval_name" name="interval_name"  />
    </div>

    <div className="field">
      <label className="label" htmlFor="start_milestone"  >Select start milestone</label>
      <select className="inputSelect" id="start_milestone" name="start_milestone" value="plv_available">
        <option value="plv_available">PLV available</option>
        <option value="po_due">PO due</option>
      </select>
    </div>

    <div className="field">
      <label className="label" htmlFor="end_milestone"  >Select end milestone</label>
      <select className="inputSelect" id="end_milestone" name="end_milestone" value="po_due">
        <option value="plv_available">PLV available</option>
        <option value="po_due">PO due</option>
      </select>
    </div>

    <div className="actions">
      <button className="button" name="cancel">Cancel</button>
      <button className="button" name="save" type="submit">Save interval</button>
    </div>
  </form>
);

export default IntervalForm;
