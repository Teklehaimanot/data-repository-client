import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../base';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = BASE_URL;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${url}/api/user/auth`, {
        username: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        alert('incorrect password or username');
      });

    console.log(email, password);
    closeOpen();
  };

  const closeOpen = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <div className="flex flex-col bg-secondary justify-between shadow-2xl w-1/3 m-auto mt-80 border-solid rounded-lg p-6 flex-1 border-dark-light items-center m">
      <h1 className="my-3 text-4xl font-bold">Sign in</h1>
      <p class="text-2xl text-dark-dark">Sign in to access your account</p>
      <form action="" className="w-3/4 my-8" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label for="email" className="block mb-2 text-2xl">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-3 text-blue-800 border border-blue-300 rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label for="password" class="text-2xl">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-3 text-blue-800 border border-blue-300 rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>
          <div class="flex gap-x-2 pt-10">
            <button
              type="submit"
              className="w-full bg-primary text-secondary px-6 py-3  border border-primary hover:bg-blue rounded-md"
            >
              Sign in
            </button>
            <button
              type="button"
              className="w-full px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue"
              onClick={closeOpen}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
