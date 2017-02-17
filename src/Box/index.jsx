import React from 'react';

export default function Box({ className, demo }) {
  return (
    <div
      className={demo[className]}
      style={{
        textAlign: 'center',
        padding: '2rem',
        height: '6rem',
        marginBottom: '2rem',
      }}
    >{className}</div>
  );
}

Box.propTypes = {
  className: React.PropTypes.string.isRequired,
  demo: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
