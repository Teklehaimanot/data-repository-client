import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { BASE_URL } from '../base';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [father_name, setFatherName] = useState('');
  const [role, setRole] = useState('Admin');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !father_name && !role && !username) {
      alert('please fill all input filds');
    }
    try {
      addUser({
        name,
        father_name,
        role,
        username,
        password,
      });
      clearDataSet();
    } catch (error) {
      console.log(error);
    }
  };

  const clearDataSet = () => {
    setName('');
    setFatherName('');
    setPassword('');
    setRole('');
    setUserName('');
  };

  return (
    <div className="mx-20 my-10 bg-secondary rounded-lg shadow-xl ">
      <form className="flex flex-wrap justify-between" onSubmit={handleSubmit}>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Given Name
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
            required
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Last Name
          </label>
          <input
            type="text"
            onChange={(e) => setFatherName(e.target.value)}
            value={father_name}
            placeholder="Father's Name"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
            required
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            User Name
          </label>
          <input
            type="email"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            placeholder="email"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
            required
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
            required
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Role
          </label>
          <select
            onChange={(e) => setRole(e.target.value)}
            value={role}
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <div className="flex px-5 my-10">
          <input
            type="submit"
            value="Save"
            className="border hover:bg-blue hover:text-secondary px-5 py-5 border-primary text-2xl rounded-lg focus:blue focus:border-blue"
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
