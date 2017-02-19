import React, { PropTypes } from 'react';

export default function Box({ className, demo, style = {} }) {
  const styles = Object.assign({}, {
    textAlign: 'center',
    padding: '2rem',
    height: '6rem',
    marginBottom: '2rem',
  }, style);

  return (
    <div
      className={demo[className]}
      style={styles}
    >{className}</div>
  );
}

Box.propTypes = {
  className: PropTypes.string.isRequired,
  demo: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
