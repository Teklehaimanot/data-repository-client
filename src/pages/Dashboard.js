import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-row mt-10 ml-5">
      <div className="w-1/7 mr-10  shadow-md bg-primary text-secondary px-1 ">
        <ul className="relative">
          <li className="relative">
            <a
              className="flex items-center text-2xl py-4 px-6 m-4 h-12 overflow-hidden  text-ellipsis whitespace-nowrap border rounded hover:bg-blue transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Dashboard
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-2xl py-4 px-6 m-4 h-12 overflow-hidden  text-ellipsis whitespace-nowrap border rounded hover:bg-blue  transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              User
            </a>
          </li>
        </ul>
      </div>

      <div className="w-5/6  shadow-md sm:rounded-lg float-right ">
        <table className="w-full text-left ">
          <thead className=" text-xl text-primary bg-secondary ">
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
          </thead>
          <tbody>
            <tr className="bg-white border-b text-dark-light border-blue border-doted ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-wrap"
              >
                Prevalence and Incidence of , and Risk Factors for, HIV -1
                infection among factory workers in Ethiopia , 1997-2001
              </th>
              <td className="px-6 py-4">STATA</td>
              <td className="px-6 py-4">1679</td>
              <td className="px-6 py-4">National </td>
              <td className="px-6 py-4">Both </td>
              <td className="px-6 py-4">2/1/1997 </td>
              <td className="px-6 py-4">12/30/2001 </td>
              <td className="px-6 py-4">Cros-Sectional </td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b text-dark-light border-blue border-doted ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-wrap"
              >
                Prevalence and Incidence of , and Risk Factors for, HIV -1
                infection among factory workers in Ethiopia , 1997-2001
              </th>
              <td className="px-6 py-4">STATA</td>
              <td className="px-6 py-4">1679</td>
              <td className="px-6 py-4">National </td>
              <td className="px-6 py-4">Both </td>
              <td className="px-6 py-4">2/1/1997 </td>
              <td className="px-6 py-4">12/30/2001 </td>
              <td className="px-6 py-4">Cros-Sectional </td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b text-dark-light border-blue border-doted ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-wrap"
              >
                Prevalence and Incidence of , and Risk Factors for, HIV -1
                infection among factory workers in Ethiopia , 1997-2001
              </th>
              <td className="px-6 py-4">STATA</td>
              <td className="px-6 py-4">1679</td>
              <td className="px-6 py-4">National </td>
              <td className="px-6 py-4">Both </td>
              <td className="px-6 py-4">2/1/1997 </td>
              <td className="px-6 py-4">12/30/2001 </td>
              <td className="px-6 py-4">Cros-Sectional </td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
