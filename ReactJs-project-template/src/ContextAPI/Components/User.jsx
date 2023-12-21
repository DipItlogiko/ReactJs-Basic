import React,{useContext} from "react"

import { UsersContext } from "../UsersContext"

function User({ id, name }){

    const { users , setUser } = useContext(UsersContext)

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