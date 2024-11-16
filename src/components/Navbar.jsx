import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { PiUserCircle } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export function NavbarWithSolidBackground() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className="flex items-center"
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/about"
          className="flex items-center"
        >
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/career"
          className="flex items-center"
        >
          Career
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="h-max max-w-full rounded-none px-0 shadow-none mb-10">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium select-none text-white"
          >
            The Dragon News
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div>
            <Button
              variant="filled"
              size="sm"
              className="hidden lg:inline-block rounded-none"
            >
              <span>Log In</span>
            </Button>
            <Button
              size="sm"
              variant="text"
              color="blue-gray"
              className="rounded-full hidden lg:inline-block hover:bg-transparent"
            >
              <PiUserCircle className="text-2xl text-black" />
            </Button>
          </div>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon
                className="h-6 w-6"
                strokeWidth={2}
              />
            ) : (
              <Bars3Icon
                className="h-6 w-6"
                strokeWidth={2}
              />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button
            fullWidth
            variant="filled"
            size="sm"
          >
            <span>Get started</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}
