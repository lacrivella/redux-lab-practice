import React from 'react';
import PropTypes from 'prop-types';

function Controls({ handleChange, title, subtitle }) {
  return (
    <input type="text" value={title} onChange={handleChange} />
    <input type="text" value={subtitle} onChange={handleChange} />
  )
}

Controls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default Controls;