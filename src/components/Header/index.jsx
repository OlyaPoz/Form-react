import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';


const Header = props => {
  return (
    <nav className={styles.headerWrapper}>
      <Link to='#'>
        <img src='/staticAssets/images/logoF.png' alt='logo' />
      </Link>
      <Link to='/' className={styles.btn}>Login</Link>
      <Link to='/sign-up' className={styles.btn}>Sign up</Link>
      
    </nav>
  );
};

export default Header;
