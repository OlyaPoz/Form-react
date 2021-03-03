import React from 'react';
import SignInForm from '../../components/forms/LoginForm';
import Header from '../../components/forms/Header';
import styles from './Login.module.scss';


const Login = props => {
  const onSubmit = values => console.log(values);

  return (
    <div className={styles.container}>
       <Header /> 
      <h1 className={styles.loginHeading}>Login to your account</h1>
      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;