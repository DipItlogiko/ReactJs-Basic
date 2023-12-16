import React from 'react'

function Todo({id , title , description}){
    return(
        <div>
           <article className='todo'>
            <h3 className='todo_title'>{title}</h3>
            <p>{description}</p>
           </article>
        </div>
    )
}

export default Todo
