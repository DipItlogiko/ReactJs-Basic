/////========= PropsType Practice 1 ============///// 

// import React,{ useState } from "react"

// import User from "./User"


// function Users(){
//     const [userName , setUserName] = useState('Dip')
//     const [userID, setUserID] = useState(101)
//     return(
//         <div>
//             {/* <User  userName={userName} userID={userID}/> */}
//             <User />
//         </div>
//     )
// }

// export default Users

/////========= PropsType Practice 2 ============/////

import React,{ useState } from "react"

import User from "./User"


function Users(){
    const [user , setUser] = useState({ id : 565654894 , name : 'Dip'})
    
    return(
        <div> 
            <User user={user} />
        </div>
    )
}

export default Users