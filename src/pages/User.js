import React from 'react';
import SideBar from '../components/SideBar';
import UserList from '../components/UserList';

const User = () => {
  return (
    <div className="flex flex-row mt-10 ml-5">
      <SideBar />
      <UserList />
    </div>
  );
};

export default User;
