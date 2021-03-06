import React from 'react';
import DataList from '../components/DataList';
import SideBar from '../components/SideBar';

const Dashboard = () => {
  return (
    <div className="flex flex-row mt-10 ml-5">
      <SideBar />
      <DataList />
    </div>
  );
};

export default Dashboard;
