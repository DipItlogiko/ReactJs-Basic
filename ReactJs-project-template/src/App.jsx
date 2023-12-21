///////=========== context ba useContext Hook ar maddhome User management app ta korar pore ami akhane amader code take symplify korechi custom hook use kore===========////

import React from 'react'

import Users from './Components/Users'
import NewUser from './Components/NewUser'
import UsersProvider from './Components/UsersContext' 

function App() {
       
    return (
        <UsersProvider>  {/* aita hocche amader akta rapper jeitake ami src/WithCustomHook/ContextAPI/UsersContext.jsx ar moddhe create korechi and ai rapper ar moddhe ami jei child component gulor namlikhechi ta amader WithCustomHook/ContextAPI/UsersContext.jsx ar moddhe chole jabee */}
          <NewUser />  
          <Users />
        </UsersProvider>
    )
}

export default App
