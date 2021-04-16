import React from 'react';
import propTypes from 'prop-types';

const Signature = ({ name }) => (
  <span>{name}</span>
);

Signature.propTypes = {
  name: propTypes.string,
};

Signature.defaultProps = {
  name: 'Vova Pekun',
};

export default Signature;
