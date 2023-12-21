/////======== akhane amader App.jsx ta hocche amader parent Component App->Users->User and ami parent component theke prop drilling ar maddhome data pass korchi amader child component gulote========///

// import React,{useState} from 'react'

// import Users from './Components/Users'
// import NewUser from './Components/NewUser'

// const UsersData = [
//     {
//         id: 1,
//         name: 'John',
//     },
//     {
//         id: 2,
//         name: 'Dip',
//     }
// ]

// function App() {
//     const [users , setUser] = useState(UsersData)

//     const getDataFromChildComponentUser = (id) => {
//         const filterdUser = users.filter(user => user.id !== id)  /////akhane amader users state ar value theke filter kora hoyeche and filter ar moddhe amader jei  user variable ta ache variable ar moddhe amader akta akta kore users state ar moddhe theke object ashbe protita object ar id diye check korbe amader child component ar moddhe theke jei id ta ashche or sathe jei object ar id gulo amader child component ar moddhe theke asha id ar sathe match korbe na shudhu oi object ar data gulo filter hoye amader filterdUser variable ar moddhe store hoye jabe 
//         setUser(filterdUser)  ///akhane ami amader state take update kore diyechi
//     }

//     const getDataFromChildComponentNewUser = (Data) => {
//        const addNewUser = [...users , Data]   ////akhane amara Data ar moddhe jei object take pacchi oi object take amader users state ar moddhe jei array ta ahce oi array ar sathe add kore diyechi and "...users" aita mane hocche ami sprade oparator ta use korechi user state ar sathe ai sprade operator ta amder user state ar value take disructuring korbe and amader users state ar jei privious value ta ache tar sathe amader ai Data variable ar moddhe theke jei object ta ashche amader child component theke oi object take add kore diyechi
//        setUser(addNewUser)  ///akhane state take update kore diyechi
//     }
     
//     return (
//         <div>
//           <NewUser onGetDataFromChildComponentNewUser={getDataFromChildComponentNewUser}/>  {/* akhane amader NewUser ai child component ar moddhe theke amader ai App component mane parent component ar moddhe data aanaar jonno amra akhane akta method create korechi amader App componentar moddhe and ai method take amader child component ar moddhe mane NewUser component ar moddhe pass kore diyechi ai key onGetDataFromChildComponentNewUser ar value hishebe and amder ai key ta NewUser component ta props ar moddhe pabe */}
//          <Users usersInfo={users} onGetDataFromChildComponentUser={getDataFromChildComponentUser} />
//         </div>
//     )
// }

// export default App




/////======== akhane amra prop drilling take avoide kore context ba useContext Hook ar maddhome akta global state ar value ba global data set kore rakhbo amader parent component ar moddhe and oi parent component ar moddhe theke amra provider ar maddho data ta provider kore debe ba datatake global kore debo and and oi data take useContext Hook ar maddhome amader oi parent component ar under aa joto gulo child component ache oi child component gulo amader oi data gulo access korte parbe kono dhoroner prop drilling charai...kintu oobosshoi amader parent component theke child component guloke provider data rap kore dite hobe=========////
// import React,{useState} from 'react'

// import Users from './ContextAPI/Components/Users'
// import NewUser from './ContextAPI/Components/NewUser'
// import { UsersContext } from './ContextAPI/UsersContext'

// const UsersData = [
//     {
//         id: 1,
//         name: 'John',
//     },
//     {
//         id: 2,
//         name: 'Dip',
//     }
// ]

// function App() {
//     const [users , setUser] = useState(UsersData)   ////akhane amader users state ba variable  ar value take UsersData variable ar value diye inisilize kore diyechi
     
//     return (
//         <UsersContext.Provider value={{ users , setUser }}>  {/* akhane amra src/ContextAPI/UsersContext.jsx ar moddhe jei context ta create kore akta variable ar moddhe store kore diyechi oi variable ar moddhe theke amra 2 ta jinish pabo ja amara jani provider and Consumer amra Consumer ar poriborte useContext hook take use korbo amader ai globla state ar value take access korar jonno and UsersContext ai variable ar moddhe theke provider ar maddhome value diye 2 ta state ar value ke golobal eee set kore diyechi and amader ai parent component ar moddhe theke amader child component guloke prodiver dara rap kore diyechi jar fole amader ai App component mane parent component ar moddhe ba under aa joto gulo child component ache oi sob child componet ai global eee set kora state ar value  take consume ba access korte parbee useContext Hook ta use kore jemon ami akhane value ar moddhe 2 ta jinish ke Global eee set kore diyechi tai oi 2ta ke { } curly braces ar moddhe rekhechi jodi 1 ta hota tahole amara single { } curly braces ar moddhe rakhtam .....and jehetu ami state ar value guloke golble eee set kore diyechi tai amader child component gulo useContext hook use kore ai global state ar value gulolke access korte parbe kono prop drilling charai */}
//           <NewUser />  
//           <Users />
//         </UsersContext.Provider>
//     )
// }

// export default App


///////=========== context ba useContext Hook ar maddhome User management app ta korar pore ami akhane amader code take symplify korechi custom hook use kore===========////

import React from 'react'

import Users from './WithCustomHook/ContextAPI/Components/Users'
import NewUser from './WithCustomHook/ContextAPI/Components/NewUser'
import UsersProvider from './WithCustomHook/ContextAPI/UsersContext' 

function App() {    
     
    return (
        <UsersProvider>  {/* aita hocche amader akta rapper jeitake ami src/WithCustomHook/ContextAPI/UsersContext.jsx ar moddhe create korechi and ai rapper ar moddhe ami jei child component gulor namlikhechi ta amader WithCustomHook/ContextAPI/UsersContext.jsx ar moddhe chole jabee */}
          <NewUser />  
          <Users />
        </UsersProvider>
    )
}

export default App
