import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../base';
import DataSetTitle from './DataSetTitle';
import Form from './Form';
import ListItem from './ListItem';
import SearchBar from './SearchBar';

const DataList = () => {
  const url = BASE_URL;
  const [dataset, setDataset] = useState([]);
  const [formToggle, setFormToggle] = useState(false);

  const handleToggle = () => {
    setFormToggle(!formToggle);
  };

  useEffect(() => {
    const getDataset = async () => {
      const getDatasetFromServer = await fetchDataset();
      setDataset(getDatasetFromServer);
    };

    getDataset();
  }, []);

  const fetchDataset = async () => {
    try {
      const res = await axios.get(`${url}/api/dataset`, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth': `${localStorage.getItem('token')}`,
        },
      });
      const dataset = await res.data.dataset;
      return dataset;
    } catch (error) {
      alert("can't reach the server");
    }
  };

  // const addDataset = async (task) => {
  //   const resOne = await axios(`${url}/api/dataset`, {
  //     method:'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'x-auth': `${localStorage.getItem('token')}`,
  //     },
  //     task,
  //   });
  //   const res = await resOne.data;
  //   console.log('data', res);
  // };
  const addDataset = async (task) => {
    const res = await fetch(`${url}/api/dataset`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-auth': `${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="w-5/6  shadow-2xl sm:rounded-lg float-right ">
      <SearchBar onToggle={handleToggle} formToggle={formToggle} />
      {formToggle ? (
        <Form addDataset={addDataset} />
      ) : (
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
      )}
    </div>
  );
};

export default DataList;
