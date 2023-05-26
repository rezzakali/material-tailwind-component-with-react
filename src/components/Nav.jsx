import { Button, Collapse, IconButton, Navbar } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ColorMode from './ColorMode';
import navList from './NavList';
// import SignInSignUpButton from './SignInSignUpButton';
import UserAvatar from './UserAvatar';

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky inset-0 z-50 mx-auto py-2 px-4 lg:px-8 lg:py-4 rounded-none shadow-none dark:bg-[#22262f] border-none">
      <div className="mx-auto flex items-center justify-between text-blue-gray-900">
        <NavLink
          as="NavLink"
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-medium dark:text-white"
        >
          Dev.Rezzak
        </NavLink>
        <div className="hidden lg:block ">{navList}</div>
        <div className="flex items-center">
          <ColorMode className="hidden lg:block" />
          <UserAvatar />
          {/* <SignInSignUpButton /> */}
        </div>
        <ColorMode className="lg:hidden ml-auto" />
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 dark:text-gray-300"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="mx-auto flex flex-row justify-between">
          <NavLink to="/sign-up" className=" lg:inline-block m-2 w-full">
            <Button
              as="NavLink"
              variant="gradient"
              size="sm"
              className=" lg:inline-block m-2 w-full"
            >
              sign up
            </Button>
          </NavLink>
          <NavLink to="/sign-up" className=" lg:inline-block m-2 w-full">
            <Button
              as="NavLink"
              variant="gradient"
              size="sm"
              className=" lg:inline-block m-2 w-full"
            >
              sign in
            </Button>
          </NavLink>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Nav;
