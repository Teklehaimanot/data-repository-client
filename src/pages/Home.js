import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="flex flex-col bg-secondary justify-between shadow-2xl w-1/3 m-auto mt-80 border-solid rounded-lg p-6 flex-1 border-dark-light items-center m">
      <h2 className="mb-5 border-b-2 border-solid border-primary p-2 text-blue text-bold  font-bold">
        Data Repository App
      </h2>
      <p className="text-lg  m-3 text-blue">
        This demo app is made to show how to establishes a data center for
        retrospective and prospective data types on identified research areas.
        It works with the data analytics team to archive and store data with
        standard formats.
      </p>
      <div className="flex flex-row mt-5">
        <div className="m-6 p-3 text-secondary border-2 border-solid border-0 rounded-md bg-primary hover:bg-blue">
          <Link to="/login"> Login as Admin</Link>
        </div>
        <div className="m-6 p-3  text-secondary border-2 border-solid border-0 rounded-md bg-primary hover:bg-blue ">
          Login as User
        </div>
      </div>
    </div>
  );
};

export default Home;
