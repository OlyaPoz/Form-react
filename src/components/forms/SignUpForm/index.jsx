import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { SIGN_UP_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input';
import styles from './SignUpForm.module.scss';
import RadioBtn from '../RadioBtn';

const SignUpForm = props => {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {formProps => {
        return (
          <Form className={styles.formWrapper}>
            <div className={styles.textInputWrapper}>
              <Field name={'firstName'}>
                {fieldProps => (
                  <Input {...fieldProps} placeholder='First name' autoFocus />
                )}
              </Field>

              <Field name={'lastName'}>
                {fieldProps => (
                  <Input {...fieldProps} placeholder='Last name' />
                )}
              </Field>

              <Field name={'displayName'}>
                {fieldProps => (
                  <Input {...fieldProps} placeholder='Display Name' />
                )}
              </Field>

              <Field name={'email'}>
                {fieldProps => (
                  <Input
                    {...fieldProps}
                    type='email'
                    placeholder='Email Address'
                  />
                )}
              </Field>

              <Field name={'password'}>
                {fieldProps => (
                  <Input
                    {...fieldProps}
                    type='password'
                    placeholder='Password'
                  />
                )}
              </Field>

              <Field name={'passwordConfirm'}>
                {fieldProps => (
                  <Input
                    {...fieldProps}
                    type='password'
                    placeholder='Password Confirmation'
                  />
                )}
              </Field>
            </div>
            <Field name='join'>
              {fieldProps => <RadioBtn {...fieldProps} />}
            </Field>

            <Field
              type='submit'
              value='Create account'
              className={styles.btn}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
