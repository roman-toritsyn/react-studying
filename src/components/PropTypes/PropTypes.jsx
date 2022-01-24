import PropTypes from 'prop-types';
import React from 'react';

export const PropTypesComponent = (props) => {
  return <span>{props.message}</span>
}

PropTypesComponent.propTypes = {
  message: PropTypes.string
}
