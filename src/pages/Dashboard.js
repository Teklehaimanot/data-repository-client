import React from 'react';
import DataList from '../components/DataList';

const Dashboard = () => {
  return (
    <div className="flex flex-row mt-10 ml-5">
      <div className="w-1/7 mr-10  shadow-2xl bg-primary text-secondary px-1 ">
        <ul className="relative">
          <li className="relative">
            <a
              className="flex items-center text-2xl py-4 px-6 m-4 h-12 overflow-hidden  text-ellipsis whitespace-nowrap border rounded hover:bg-blue transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Dashboard
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-2xl py-4 px-6 m-4 h-12 overflow-hidden  text-ellipsis whitespace-nowrap border rounded hover:bg-blue  transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              User
            </a>
          </li>
        </ul>
      </div>
      <DataList />
    </div>
  );
};

export default Dashboard;
