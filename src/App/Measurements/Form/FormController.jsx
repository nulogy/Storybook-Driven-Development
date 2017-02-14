import React, { Component, PropTypes } from "react";

function mapPropsToChildren(children, props) {
  return React.Children.map(children, child => React.cloneElement(child, Object.assign(props, child.props)));
}

class FormController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval_name: null,
      start_milestone: null,
      end_milestone: null
    };
  }


  childProps() {
    return Object.assign(
      { handleChange: this.handleChange },
      this.state
    );
  }

  render() {
    const { children } = this.props;
    return (<div>{ mapPropsToChildren(children, this.childProps()) }</div>);
  }
}

FormController.propTypes = {
  children: PropTypes.node,
};

export default FormController;
