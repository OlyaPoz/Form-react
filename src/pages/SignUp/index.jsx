import React from 'react';
import SignUpForm from '../../components/forms/SignUpForm';
import styles from './SignUp.module.scss';

const SignUp = props => {
  const onSubmit = values => console.log(values);
  return (
    <div className={styles.container}>
      <h1 className={styles.signUpHeading}>Create an account</h1>
      <p className={styles.signUpInfo}>
        We always keep your name and email address private.
      </p>
      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignUp;
