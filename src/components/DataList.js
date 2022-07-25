import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../base';
import DataSetTitle from './DataSetTitle';
import Form from './Form';
import ListItem from './ListItem';
import SearchBar from './SearchBar';

const DataList = () => {
  const url = BASE_URL;
  const [title, setTitle] = useState([" Dataset_Name", "Dataset Type", "Sample Size", "Area Coverage", "Sex Coverage", "Data Collection Start Date", "Data Collection End Date", "Study Type"])
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

  const addDataset = async (item, file) => {
    const formData = new FormData();
    formData.append('file', file);
    const reqOne = await axios.post(`${url}/api/dataset`, item, {
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

  const updateDataset = async (id, item) => {
    try {
      const res = await axios.put(`${url}/api/dataset/${id}`, item, {
        headers: {
          'content-type': 'application/json',
          'x-auth': `${localStorage.getItem('token')}`,
        },
      });
      const data = await res.data.dataset;
      console.log('item', item);
      setDataset(dataset.map((d) => (d._id === id ? { ...d, ...item } : d)));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDataset = async (id) => {
    try {
      const res = await axios.delete(`${url}/api/dataset/${id}`, {
        headers: {
          'content-type': 'application/json',
          'x-auth': `${localStorage.getItem('token')}`,
        },
      });
      const data = res.data.dataset;
      setDataset(dataset.filter((d) => d._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const filteredDatasets = (searchField) => {
    setDataset(dataset.filter((data) => {
      return (
        data
          .dataset_name
          .toLowerCase()
          .includes(searchField.toLowerCase())
      );
    })

    )

  }

  return (
    <>
      <div className="w-5/6  shadow-2xl sm:rounded-lg float-right ">
        <SearchBar onToggle={handleToggle} formToggle={formToggle} filteredUsers={filteredDatasets} displayButton={true} />
        {formToggle ? (
          <Form addDataset={addDataset} />
        ) : (
          <table className="w-full text-left ">
            <thead className=" text-xl text-primary bg-secondary ">
              <DataSetTitle titles={title} />
            </thead>
            <tbody>
              {dataset.map((data) => (
                <ListItem
                  deleteDataset={deleteDataset}
                  updateDataset={updateDataset}
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
