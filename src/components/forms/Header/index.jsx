import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = props => {
  return (
    <div className={styles.headerWrapper}>
      <img src='/staticAssets/images/logoF.png' alt='logo' />
      <Link to='/SignUp'>
        <button className={styles.btn}>Sign up</button>
      </Link>
    </div>
  );
};

export default Header;
