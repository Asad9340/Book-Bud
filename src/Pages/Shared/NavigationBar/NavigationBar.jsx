import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';

function NavList() {
  return (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  text-xl font-medium font-['Work Sans']"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? (
              <Spinner />
            ) : isActive ? (
              'border border-[#23BE0A] text-[#23BE0A] px-2 py-1 rounded-md'
            ) : (
              'flex items-center border border-white'
            )
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  text-xl font-medium font-['Work Sans']"
      >
        <NavLink
          to="/listed-books"
          className={({ isActive, isPending }) =>
            isPending ? (
              <Spinner />
            ) : isActive ? (
              'border border-[#23BE0A] text-[#23BE0A] px-2 py-1 rounded-md'
            ) : (
              'flex items-center border border-white'
            )
          }
        >
          Listed Books
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  text-xl font-medium font-['Work Sans']"
      >
        <NavLink
          to="/to-read"
          className={({ isActive, isPending }) =>
            isPending ? (
              <Spinner />
            ) : isActive ? (
              'border border-[#23BE0A] text-[#23BE0A] px-2 py-1 rounded-md'
            ) : (
              'flex items-center border border-white'
            )
          }
        >
          Pages to Read
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  text-xl font-medium font-['Work Sans']"
      >
        <NavLink
          to="/legacy-books"
          className={({ isActive, isPending }) =>
            isPending ? (
              <Spinner />
            ) : isActive ? (
              'border border-[#23BE0A] text-[#23BE0A] px-2 py-1 rounded-md'
            ) : (
              'flex items-center border border-white'
            )
          }
        >
          Legacy Book
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  text-xl font-medium font-['Work Sans']"
      >
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? (
              <Spinner />
            ) : isActive ? (
              'border border-[#23BE0A] text-[#23BE0A] px-2 py-1 rounded-md'
            ) : (
              'flex items-center border border-white'
            )
          }
        >
          About
        </NavLink>
      </Typography>
    </ul>
  );
}
function NavigationBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div>
      <Navbar className="shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 text-xl md:text-2xl font-medium md:font-semibold  font-['Work Sans']"
          >
            BookBud
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="lg:flex gap-4 hidden ">
            <Button className="bg-[#23BE0A] text-lg py-2 px-4 font-semibold font-['Work Sans']">
              Log In
            </Button>
            <Button className="bg-[#59C6D2] text-lg py-2 px-4 font-semibold font-['Work Sans']">
              Sign Up
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
