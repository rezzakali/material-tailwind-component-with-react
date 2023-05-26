import { Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const navList = (
  <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal dark:text-white"
    >
      <NavLink to="/" className="flex items-center">
        Home
      </NavLink>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal dark:text-white"
    >
      <NavLink to="/about" className="flex items-center">
        About
      </NavLink>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal dark:text-white"
    >
      <NavLink to="/blogs" className="flex items-center">
        Blogs
      </NavLink>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal dark:text-white"
    >
      <NavLink to="/contact" className="flex items-center">
        Contact
      </NavLink>
    </Typography>
  </ul>
);

export default navList;
