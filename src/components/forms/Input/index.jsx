import React from 'react';
import cx from 'classnames';
import { ErrorMessage } from 'formik';
import styles from './Input.module.scss';

const Input = props => {
  const { field, meta, form, ...rest } = props;

  const classNames = cx(styles.input, {
    [styles.validInput]: meta.touched && !meta.error,
    [styles.invalidInput]: meta.touched && meta.error,
  });

  return (
    <div>
      <label className={styles.inputWrapper}>
        <input {...field} type='text' className={classNames} {...rest} />
        <ErrorMessage
          component='span'
          name={field.name}
          className={styles.errMessage}
        />
      </label>
    </div>
  );
};

export default Input;
