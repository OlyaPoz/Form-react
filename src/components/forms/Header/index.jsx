import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = props => {
  return (
    <div className={styles.headerWrapper}>

      <img src='/staticAssets/images/logoF.png' alt='logo' />

      <button className={styles.btn}>
        <Link to='/sign-up' >
          Sign up
        </Link>
      </button>
      
    </div>
  );
};

export default Header;
