import React, { useState, useEffect } from 'react'
import DataSetTitle from '../components/DataSetTitle'
import SearchBar from '../components/SearchBar'
import { BASE_URL } from '../base';
import DataSetItem from '../components/DataSetItem';
import fileDownload from 'js-file-download';
import axios from 'axios';

function Repository() {
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

    const downloadFile = async (item) => {
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
        <div className="w-100  shadow-2xl sm:rounded-lg ">
            <SearchBar onToggle={handleToggle} formToggle={formToggle} displayButton={false} filteredUsers={filteredDatasets} />
            <table className="w-full text-left ">
                <thead className=" text-xl text-primary bg-secondary ">
                    <DataSetTitle titles={title} />
                </thead>
                <tbody>
                    <DataSetItem datasets={dataset} downloadFile={downloadFile} />
                </tbody>
            </table>

        </div>
    )
}

export default Repository