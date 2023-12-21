import React from "react"

function User({ id, name , onGetDataFromChildComponentUser }){

    const handleDelete = (id) => {
        onGetDataFromChildComponentUser(id) //// pass "id" to parent component App.jsx
    }
    return(
        <div>
           <article className="user">
            <h2>{id}</h2>
            <p>{name}</p>
            <button onClick={()=>{handleDelete(id)}}>Delete</button> {/* jokhon ee amder Delete button ar moddhe click kora hobe tokhon ee amader onClick event ta fire hobe and amader ai event take listen korbe amader ai inline functional approch onClick={()=>{handleDelete(id)}} */}
           </article>
        </div>
    )
}

export default User