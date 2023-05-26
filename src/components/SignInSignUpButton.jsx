import { Button } from '@material-tailwind/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInSignUpButton = () => {
  return (
    <React.Fragment>
      <NavLink to="/sign-up">
        <Button
          as="NavLink"
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block mx-3"
        >
          sign up
        </Button>
      </NavLink>
      <NavLink to="/sign-up">
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          sign in
        </Button>
      </NavLink>
    </React.Fragment>
  );
};

export default SignInSignUpButton;
