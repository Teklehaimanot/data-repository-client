import axios from 'axios';
import React, { useState } from 'react';
import fileDownload from 'js-file-download';
import { BASE_URL } from '../base';
import EditForm from './EditForm';

const ListItem = ({ item, updateDataset, deleteDataset }) => {
  const [Popup, setPopup] = useState(false);
  const url = BASE_URL;
  const handlePopup = () => {
    setPopup(!Popup);
  };

  const downloadFile = async () => {
    try {
      const res = await axios.post(`${url}/api/dataset/download`, { "file_name": item.file_name }, {
        headers: {
          'x-auth': `${localStorage.getItem('token')}`,
        },
      })
      const data = fileDownload(res.data, `${item.file_name}`)

    } catch (error) {
      console.log(error)

    }

  }
  return (
    <>
      <tr className="bg-white border-b text-dark-light border-blue border-doted ">
        <th scope="row" className="px-6 py-4 font-medium  whitespace-wrap">
          {item.dataset_name}
        </th>
        <td className="px-6 py-4">{item.data_type}</td>
        <td className="px-6 py-4">{item.sample_size}</td>
        <td className="px-6 py-4">{item.area_coverage} </td>
        <td className="px-6 py-4">{item.sex_coverage} </td>
        <td className="px-6 py-4">
          {new Date(item.data_collection_start_date).toLocaleDateString(
            'sq-AL',
            { year: 'numeric', month: '2-digit', day: '2-digit' }
          )}
        </td>
        <td className="px-6 py-4">
          {new Date(item.data_collection_end_date).toLocaleDateString('sq-AL', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
        </td>
        <td className="px-6 py-4">{item.study_type} </td>
        <td
          className="px-6 py-4 text-right text-xl text-blue hover:underline"
          onClick={handlePopup}
        >
          Edit
        </td>
        <td
          className="px-6 py-4 text-right text-xl text-blue hover:underline"
          onClick={downloadFile}
        >
          Download
        </td>
        <td
          className="px-6 py-4 text-right text-xl text-red-light hover:underline"
          onClick={() => {
            deleteDataset(item._id);
          }}
        >
          Delete
        </td>
      </tr>
      {Popup ? (
        <EditForm
          handlePopup={handlePopup}
          item={item}
          updateDataset={updateDataset}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default ListItem;
