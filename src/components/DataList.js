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
      <SearchBar onToggle={handleToggle} formToggle={formToggle} />
      {formToggle ? (
        <Form />
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
