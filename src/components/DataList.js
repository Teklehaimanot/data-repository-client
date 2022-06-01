import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../base';
import DataSetTitle from './DataSetTitle';
import ListItem from './ListItem';
import SearchBar from './SearchBar';

const DataList = () => {
  const url = BASE_URL;
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/dataset`, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth': `${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setDataset(res.data.dataset);
      });
  }, []);
  return (
    <div className="w-5/6  shadow-2xl sm:rounded-lg float-right ">
      <SearchBar />
      {false ? (
        <table className="w-full text-left ">
          <thead className=" text-xl text-primary bg-secondary ">
            <DataSetTitle />
          </thead>
          <tbody>
            {dataset.map((data) => (
              <ListItem key={data._id} item={data} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="mx-20 my-10 bg-secondary rounded-lg shadow-xl ">
          <form className="flex flex-wrap justify-between " action="">
            <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
              <label className="text-primary text-2xl" htmlFor="">
                Dataset Name
              </label>
              <input
                type="text"
                className=" p-2 border border-primary text-xl rounded-lg focus:blue focus:border-blue"
              />
            </div>
            <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
              <label className="text-primary text-2xl" htmlFor="">
                Dataset Name
              </label>
              <input
                type="text"
                className=" p-2 border border-primary text-xl rounded-lg focus:blue focus:border-blue"
              />
            </div>
            <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
              <label className="text-primary text-2xl" htmlFor="">
                Dataset Name
              </label>
              <input
                type="text"
                className=" p-2 border border-primary text-xl rounded-lg focus:blue focus:border-blue"
              />
            </div>
            <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
              <label className="text-primary text-2xl" htmlFor="">
                Dataset Name
              </label>
              <input
                type="text"
                className=" p-2 border border-primary text-xl rounded-lg focus:blue focus:border-blue"
              />
            </div>
            <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
              <label className="text-primary text-2xl" htmlFor="">
                Dataset Name
              </label>
              <input
                type="text"
                className=" p-2 border border-primary text-xl rounded-lg focus:blue focus:border-blue"
              />
            </div>
            <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
              <label className="text-primary text-2xl" htmlFor="">
                Dataset Name
              </label>
              <input
                type="text"
                className=" p-2 border border-primary text-xl rounded-lg focus:blue focus:border-blue"
              />
            </div>
            <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
              <label className="text-primary text-2xl" htmlFor="">
                Dataset Name
              </label>
              <input
                type="text"
                className=" p-2 border border-primary text-xl rounded-lg focus:blue focus:border-blue"
              />
            </div>
            <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
              <label className="text-primary text-2xl" htmlFor="">
                Dataset Name
              </label>
              <input
                type="text"
                className=" p-2 border border-primary text-xl rounded-lg focus:blue focus:border-blue"
              />
            </div>
            <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
              <label className="text-primary text-2xl" htmlFor="">
                Dataset Name
              </label>
              <input
                type="text"
                className=" p-2 border border-primary text-xl rounded-lg focus:blue focus:border-blue"
              />
            </div>
            <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
              <label className="text-primary text-2xl" htmlFor="">
                Dataset Name
              </label>
              <input
                type="text"
                className=" p-2 border border-primary text-xl rounded-lg focus:blue focus:border-blue"
              />
            </div>
            <div className="flex px-5 my-20">
              <button
                type="submit"
                className="border hover:bg-blue hover:text-secondary px-5 py-5 border-primary text-2xl rounded-lg focus:blue focus:border-blue"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DataList;
