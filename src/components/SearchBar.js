import React, { useState } from 'react';
import ButtonCreate from './ButtonCreate';

const SearchBar = ({ onToggle, formToggle, filteredUsers }) => {

  const [searchField, setSearchField] = useState("");

  const handleSearch = (e) => {
    e.preventDefault()
    filteredUsers(searchField)
  }

  return (
    <div className="flex justify-between p-6 ">
      <ButtonCreate onToggle={onToggle} formToggle={formToggle} />
      <div className="w-2/5 ">
        <form className="flex items-center" onClick={handleSearch}>
          <label for="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              vlaue={searchField}
              onChange={(e) => setSearchField(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
          <button
            type="submit"
            class="p-2.5 ml-2 text-md font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
