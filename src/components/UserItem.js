import React from 'react';

const UserItem = () => {
  return (
    <>
      <tr className="bg-white border-b text-dark-light border-blue border-doted ">
        <th scope="row" className="px-6 py-4 font-medium  whitespace-wrap">
          Teklehaimanot
        </th>
        <td className="px-6 py-4">Belete</td>
        <td className="px-6 py-4">teklehaimanotbelete@gmail.com</td>
        <td className="px-6 py-4">Admin</td>
        <td className="px-6 py-4 text-right text-xl text-blue hover:underline">
          Edit
        </td>
        <td className="px-6 py-4 text-right text-xl text-red-light hover:underline">
          Delete
        </td>
      </tr>
    </>
  );
};

export default UserItem;
