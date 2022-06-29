import React, { useState } from 'react'
import DataSetTitle from './DataSetTitle'
import ListItem from './ListItem'
import SearchBar from './SearchBar'

const UserList = () => {
    const [titles, setTitles] = useState(["Name", "Email", "Role"])
    return (
        <div className="w-5/6  shadow-2xl sm:rounded-lg float-right ">
            <SearchBar />
            <table className="w-full text-left ">
                <thead className=" text-xl text-primary bg-secondary ">
                    <DataSetTitle titles={titles} />
                </thead>
                <tbody>
                    {/* {dataset.map((data) => (
                        <ListItem
                            deleteDataset={deleteDataset}
                            updateDataset={updateDataset}
                            key={data._id}
                            item={data}
                        />
                    ))} */}
                </tbody>
            </table>
        </div>
    )
}

export default UserList