import React from 'react';
import Logo from '../Logo/index';
import Signature from '../Signature/index';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Logo className="secondary">Films</Logo>
    <p className={styles.footer__copyRight}>
      Copyright © 2018 FILMS.
      {' '}
      <Signature name="by Vova Pekun" />
    </p>
  </footer>
);

export default Footer;
