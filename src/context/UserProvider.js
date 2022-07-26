import React, { createContext, useEffect, useState } from 'react'

export const userContext = createContext('default')

const UserProvider = (props) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        onLoad()
    }, [])

    const onLoad = () => {
        try {
            const authenticatedUser = localStorage.getItem('token')
            console.log(authenticatedUser)
            if (authenticatedUser) {
                setUser(authenticatedUser)
                setIsAuthenticated(!isAuthenticated)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <userContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
            <div>{props.children}</div>

        </userContext.Provider>
    )
}

export default UserProvider