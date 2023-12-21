import React from "react"
 
import { useUsersContext } from '../CustomHook/useUsersContext'


function User({ id, name }){

 
    const { state, dispatch } = useUsersContext() ////ai useUsersContext custom hook ta ami create korechi and ai hook ta amder parent ar moddhe theke ami jei state ar value take Global eeee set korechi oi state ar value take access korte sahajjo korbe

    const handleDelete = (id) => {        
        dispatch({type: 'DELETE_USER', payload: id})  
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