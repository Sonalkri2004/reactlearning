import React, { createContext } from 'react'

// create context step 1
export const DataContext=createContext();
   
const UserContext = ({children}) => {

     const userData ='Learning';
        
  return (
    <div>
       <DataContext.Provider value={userData}>
          {children}
       </DataContext.Provider>

    </div>
  )
}

export default UserContext