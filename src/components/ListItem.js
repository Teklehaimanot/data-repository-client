import React, { useState } from 'react';
import EditForm from './EditForm';

const ListItem = ({ item, updateDataset }) => {
  const [Popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(!Popup);
  };
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
        <td className="px-6 py-4">{item.data_collection_start_date}</td>
        <td className="px-6 py-4">{item.data_collection_end_date} </td>
        <td className="px-6 py-4">{item.study_type} </td>
        <td
          className="px-6 py-4 text-right text-xl text-blue hover:underline"
          onClick={handlePopup}
        >
          Edit
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
