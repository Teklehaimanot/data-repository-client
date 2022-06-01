import React from 'react';

const Form = () => {
  return (
    <div className="mx-20 my-10 bg-secondary rounded-lg shadow-xl ">
      <form className="flex flex-wrap justify-between " action="">
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Dataset Name
          </label>
          <input
            type="text"
            placeholder="Dataset Name"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Dataset Type
          </label>
          <input
            type="text"
            placeholder="Dataset type"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Study Type
          </label>
          <input
            type="text"
            placeholder="Study Type"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Sample Size
          </label>
          <input
            type="number"
            placeholder="Sample Size"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Area Coverage
          </label>
          <input
            type="text"
            placeholder="Area Coverage"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Sex Coverage
          </label>
          <select
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
            name=""
            id=""
          >
            <option value="parrot">Male</option>
            <option value="spider">Female</option>
            <option value="goldfish">Both</option>
          </select>
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Data Collection Start Date
          </label>
          <input
            type="date"
            placeholder="Start Date"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Data Collection End Date
          </label>
          <input
            type="date"
            placeholder="End Date"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Upload File
          </label>
          <input
            type="file"
            placeholder=""
            className=" p-2 bg-white border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          />
        </div>
        <div className="flex px-5 my-10">
          <button
            type="submit"
            className="border hover:bg-blue hover:text-secondary px-5 py-5 border-primary text-2xl rounded-lg focus:blue focus:border-blue"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
