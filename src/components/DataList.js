import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../base';
import DataSetTitle from './DataSetTitle';
// import EditForm from './EditForm';
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

  const addDataset = async (task, file) => {
    const formData = new FormData();
    formData.append('file', file);
    const reqOne = await axios.post(`${url}/api/dataset`, task, {
      headers: {
        'content-type': 'application/json',
        'x-auth': `${localStorage.getItem('token')}`,
      },
    });
    const reqTwo = await axios.post(`${url}/api/dataset/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth': `${localStorage.getItem('token')}`,
      },
    });

    await axios
      .all([reqOne, reqTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          // use/access the results
          const data = responseOne.data;
          setDataset([...dataset, data.dataset]);
          setFormToggle(!formToggle);
          console.log(responseTwo.data);
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  };
  return (
    <>
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
                <ListItem
                  key={data._id}
                  item={data}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default DataList;
