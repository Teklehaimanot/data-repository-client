import React from 'react';

const DataSetTitle = ({ titles }) => {
  console.log(titles)
  return (
    <tr>
      {titles.map((title, index) => (
        <th key={index} scope="col" className="px-6 py-3">
          {title}
        </th>
      ))}
      <th scope="col" className="px-6 py-3">
        <span className="sr-only">Download</span>
      </th>
      <th scope="col" className="px-6 py-3">
        <span className="sr-only">Edit</span>
      </th>
      <th scope="col" className="px-6 py-3">
        <span className="sr-only">Delete</span>
      </th>
    </tr>
  );
};

export default DataSetTitle;
