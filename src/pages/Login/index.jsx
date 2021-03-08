import React from 'react';
import SignInForm from '../../components/forms/LoginForm';
import styles from './Login.module.scss';

const Login = props => {
  const onSubmit = value => console.log(value);
  return (
    <div className={styles.container}>
      <h1 className={styles.loginHeading}>Login to your account</h1>
      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
