import React, { useState } from 'react'
import UserContext from "./UseContext"

export default function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
  return (
    <UserContext.Provider value={{user,setUser, userEmail, setUserEmail}}>
        {children}
    </UserContext.Provider>
  )
}
