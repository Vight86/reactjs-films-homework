import React from 'react';
import propTypes from 'prop-types';
import style from './Signature.scss';

const Signature = ({ name }) => (
  <div className={style.sign}>{name}</div>
);

Signature.propTypes = {
  name: propTypes.string,
};

Signature.defaultProps = {
  name: 'Vova Pekun',
};

export default Signature;
