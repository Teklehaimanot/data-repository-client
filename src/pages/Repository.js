import React, { useState } from 'react'
import DataSetTitle from '../components/DataSetTitle'
import SearchBar from '../components/SearchBar'
import { BASE_URL } from '../base';

function Repository() {
    const url = BASE_URL;
    const [title, setTitle] = useState([" Dataset_Name", "Dataset Type", "Sample Size", "Area Coverage", "Sex Coverage", "Data Collection Start Date", "Data Collection End Date", "Study Type"])
    const [dataset, setDataset] = useState([]);
    const [formToggle, setFormToggle] = useState(false);

    const handleToggle = () => {
        setFormToggle(!formToggle);
    };
    return (
        <div className="w-100  shadow-2xl sm:rounded-lg ">
            <SearchBar onToggle={handleToggle} formToggle={formToggle} />
            <table className="w-full text-left ">
                <thead className=" text-xl text-primary bg-secondary ">
                    <DataSetTitle titles={title} />
                </thead>
                <tbody>
                    {/* <UserItem deleteUser={deleteUser} users={users} /> */}
                </tbody>
            </table>

        </div>
    )
}

export default Repository