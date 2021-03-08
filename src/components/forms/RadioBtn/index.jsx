import React from 'react';
import styles from './RadioBtn.module.scss';

const RadioBtn = props => {
  const { field } = props;
  return (
    <>
      <label className={styles.radioBtn}>
        <span>
          <input {...field} type='radio' name='join' value='buyer' className={styles.radioInput} />
          Join As a Buyer
        </span>
        <span className={styles.infoRadioBtn} >
          I am looking for a Name, Logo or Tagline for my business, brand or
          product.
        </span>
      </label>

      <label className={styles.radioBtn}>
        <span>
          <input {...field} type='radio' name='join' value='creative' className={styles.radioInput}  />
          Join As a Creative or Marketplace Seller
        </span>
        <span className={styles.infoRadioBtn} >
          I plan to submit name ideas, Logo designs or sell names in Domain
          Marketplace.
        </span>
      </label>
    </>
  );
};

export default RadioBtn;
