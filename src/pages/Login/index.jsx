import React from 'react';
import SignInForm from '../../components/forms/LoginForm';

const Login = props => {
  const onSubmit = values => console.log(values);

  return (
    <div>
      {/* <Header /> */}
      <h1>Login to your account</h1>
      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;