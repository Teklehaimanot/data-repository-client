import React from 'react';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className="w-1/7 mr-10  shadow-2xl bg-primary text-secondary px-1 ">
      <ul className="relative">
        <li className="relative">
          <Link
            to="/dashboard"
            className="flex items-center text-2xl py-4 px-6 m-4 h-12 overflow-hidden  text-ellipsis whitespace-nowrap border rounded hover:bg-blue transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Dashboard
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/users"
            className="flex items-center text-2xl py-4 px-6 m-4 h-12 overflow-hidden  text-ellipsis whitespace-nowrap border rounded hover:bg-blue  transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            User
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/"
            className="flex items-center text-2xl py-4 px-6 m-4 h-12 overflow-hidden  text-ellipsis whitespace-nowrap border rounded hover:bg-blue  transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
