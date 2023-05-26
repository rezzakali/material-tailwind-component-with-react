import React from 'react';
import Layout from '../components/Layout';
import RegisterComponent from '../components/RegisterComponent';

const SignUp = () => {
  return (
    <Layout title={'sign-up'} description={'Sign-Up page'}>
      <RegisterComponent />
    </Layout>
  );
};

export default SignUp;
