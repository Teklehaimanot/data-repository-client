import React, { useState, useEffect } from 'react'
import DataSetTitle from './DataSetTitle'
import SearchBar from './SearchBar'
import UserItem from './UserItem'
import axios from 'axios'
import { BASE_URL } from '../base'
import UserForm from './UserForm'

const UserList = () => {
    const [titles, setTitles] = useState(["Given Name", "Father's Name", "Email", "Role"])
    const [users, setUser] = useState([])
    const url = BASE_URL;
    const [formToggle, setFormToggle] = useState(false);

    const handleToggle = () => {
        setFormToggle(!formToggle);
    };

    useEffect(() => {
        const getDataset = async () => {
            const getDatasetFromServer = await fetchUser();
            setUser(getDatasetFromServer);
        };

        getDataset();
    }, []);
    const fetchUser = async () => {
        try {
            const res = await axios.get(`${url}/api/user/all`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth': `${localStorage.getItem('token')}`,
                },
            });
            const user = await res.data.user;
            return user;
        } catch (error) {
            alert("can't reach the server");
        }
    };

    const addUser = async (item) => {
        const user = await axios.post(`${url}/api/user`, item);
        const result = user.data;
        console.log('res', result);
        setUser([...users, result.user])
        setFormToggle(!formToggle);

    };

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`${url}/api/user/${id}`);
            const data = res.data.user;
            console.log(data)
            setUser(users.filter((d) => d._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const filteredUsers = (searchField) => {
        setUser(users.filter((user) => {
            return (
                user
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                user
                    .username
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        })

        )

    }

    return (
        <div className="w-5/6  shadow-2xl sm:rounded-lg float-right ">
            <SearchBar onToggle={handleToggle} formToggle={formToggle} filteredUsers={filteredUsers} displayButton={true} />
            {formToggle ? <UserForm addUser={addUser} /> : (<table className="w-full text-left ">
                <thead className=" text-xl text-primary bg-secondary ">
                    <DataSetTitle titles={titles} />
                </thead>
                <tbody>
                    <UserItem deleteUser={deleteUser} users={users} />
                </tbody>
            </table>)}

        </div>
    )
}

export default UserList