import React from 'react';
import SignUpForm from '../../components/forms/SignUpForm';
import Header from '../../components/forms/Header';

const SignUp = props => {
  const onSubmit = values => console.log(values);
  return <div>
      <Header /> 
      <h1>Create an account</h1>
      <p>We always keep your name and email address private.</p>
      <SignUpForm onSubmit={onSubmit} />

  </div>;
};

export default SignUp;