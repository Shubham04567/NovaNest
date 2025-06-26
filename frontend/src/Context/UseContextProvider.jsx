import React, { useState } from 'react'
import UserContext from "./UseContext"

export default function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
