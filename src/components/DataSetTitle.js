import React from 'react';

const DataSetTitle = () => {
  return (
    <tr>
      <th scope="col" className="px-6 py-3">
        Dataset _Name
      </th>
      <th scope="col" className="px-6 py-3">
        Data Type
      </th>
      <th scope="col" className="px-6 py-3">
        Sample Size
      </th>
      <th scope="col" className="px-6 py-3">
        Area Coverage
      </th>
      <th scope="col" className="px-6 py-3">
        Sex Coverage
      </th>
      <th scope="col" className="px-6 py-3">
        Data Collection Start Date
      </th>
      <th scope="col" className="px-6 py-3">
        Data Collection End Date
      </th>
      <th scope="col" className="px-6 py-3">
        Study Type
      </th>
      <th scope="col" className="px-6 py-3">
        <span className="sr-only">Edit</span>
      </th>
    </tr>
  );
};

export default DataSetTitle;