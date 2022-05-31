import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../base';
import DataSetTitle from './DataSetTitle';
import ListItem from './ListItem';

const DataList = () => {
  const url = BASE_URL;
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/dataset`, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth':
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhjODEyZjdlYjIxNzNkOTRkYWMzNmYiLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsIm5hbWUiOiJUZWtsZWhhaW1hbm90IiwiaWF0IjoxNjUzOTM5Mjk0fQ.JS-WDqDWzI1zcOchS5C40l2TfI8vY_QytsW7cOYeczg',
        },
      })
      .then((res) => {
        setDataset(res.data.dataset);
      });
  }, []);
  return (
    <div className="w-5/6  shadow-2xl sm:rounded-lg float-right ">
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
    </div>
  );
};

export default DataList;
