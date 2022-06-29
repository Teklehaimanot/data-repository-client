import React from 'react';
import axios from 'axios';

const UserItem = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <tr className="bg-white border-b text-dark-light border-blue border-doted ">
          <th scope="row" className="px-6 py-4 font-medium  whitespace-wrap">
            {user.name}
          </th>
          <td className="px-6 py-4">{user.father_name}</td>
          <td className="px-6 py-4">{user.username}</td>
          <td className="px-6 py-4">{user.role}</td>
          <td className="px-6 py-4 text-right text-xl text-blue hover:underline">
            Edit
          </td>
          <td className="px-6 py-4 text-right text-xl text-red-light hover:underline">
            Delete
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserItem;
