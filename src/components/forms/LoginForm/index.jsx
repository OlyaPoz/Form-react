import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { SIGN_IN_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input';
import styles from './LoginForm.module.scss';

const SignInForm = props => {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SIGN_IN_SCHEMA}
    >
      {formProps => {
        return (
          <Form className={styles.formWrapper}>

            <Field name={'email'} >
              {fieldProps => <Input {...fieldProps} placeholder="Email address" className={styles.inputWrapper}/>}
            </Field>

            <Field name={'password'}>
              {fieldProps => <Input {...fieldProps} type="password" placeholder="Password" className={styles.inputWrapper}/>}
            </Field>

            <Field type='submit' value='Login' className={styles.btn} />
          </Form>
        );
      }}
    </Formik>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;