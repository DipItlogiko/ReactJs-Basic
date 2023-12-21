import React from "react"

// import { UsersContext } from "../UsersContext"
import { useUsersContext } from '../../useUsersContext'


function User({ id, name }){

   // const { users , setUser } = useContext(UsersContext)
    const { users, setUser } = useUsersContext() ////ai useUsersContext custom hook ta ami create korechi and ai hook ta amder parent ar moddhe theke ami jei state ar value take Global eeee set korechi oi state ar value take access korte sahajjo korbe

    const handleDelete = (id) => {
        const filterdUser = users.filter(user => user.id !== id)  /////amder users state ar moddhe theke akta akta kore object ashbe amder user ar moddhe and ai object ar moddhe jei id gulo ache oi id ar sathe amder ai id ta jei koita object ar id ar sathe match korbe na shudhu oi object gulo filter hoye amader filterdUser ai variable ar moddhe store hoye jabe
        setUser(filterdUser) ///akhane mader state take update kore diyechi
    }
    return(
        <div>
           <article className="user">
            <h2>{id}</h2>
            <p>{name}</p>
            <button onClick={()=>{handleDelete(id)}}>Delete</button>
           </article>
        </div>
    )
}

export default User