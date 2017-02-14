import React, { Component, PropTypes } from "react";

class FormController extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { children } = this.props;
    return <div>{ children }</div>
  }
}

FormController.propTypes = {
  children: PropTypes.node,
};

export default FormController;
