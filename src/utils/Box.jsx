import React, { PropTypes } from 'react';

export default function Box({
  borders = false,
  className,
  demo,
  inverse = false,
  style = {},
}) {
  const baseStyles = {
    color: 'black',
    textAlign: 'center',
    padding: '2rem',
    height: '6rem',
    marginBottom: '2rem',
  };

  if (inverse === true) {
    Object.assign(baseStyles, { color: 'white' });
  }

  if (borders === true) {
    Object.assign(baseStyles, {
      borderStyle: 'solid',
      borderWidth: '0.4rem',
    });
  }

  const styles = Object.assign({}, baseStyles, style);

  return (
    <div
      className={demo[className]}
      style={styles}
    >{className}</div>
  );
}

Box.propTypes = {
  borders: React.PropTypes.bool,
  className: PropTypes.string.isRequired,
  demo: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  inverse: React.PropTypes.bool,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
