import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-ZА-Я][a-zа-я]{1,64}$/, 'Enter a valid name')
  .required();

export const EMAIL_SCHEMA = Yup.string()
  .email('Email must be a valid email')
  .required();

export const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
    'Password must contain one big letter and so on....'
  )
  .required();

export const PASSWORD_CONFIRMATION_SCHEMA = Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .required();

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConfirm: PASSWORD_CONFIRMATION_SCHEMA,
});
