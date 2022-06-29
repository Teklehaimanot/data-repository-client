import React, { useState } from 'react'
import DataSetTitle from './DataSetTitle'
import SearchBar from './SearchBar'
import UserItem from './UserItem'

const UserList = () => {
    const [titles, setTitles] = useState(["Given Name", "Father's Name", "Email", "Role"])
    return (
        <div className="w-5/6  shadow-2xl sm:rounded-lg float-right ">
            <SearchBar />
            <table className="w-full text-left ">
                <thead className=" text-xl text-primary bg-secondary ">
                    <DataSetTitle titles={titles} />
                </thead>
                <tbody>
                    <UserItem />
                </tbody>
            </table>
        </div>
    )
}

export default UserList