import React from 'react'

import Todo from './Todo'
import style from './Todos.module.css'

function Todos(props) {
     
    return(
        <div className={style.todos}>
            <section>
                {props.data.map((data , id) => <Todo key={id} data={data}  />)}
            </section>
        </div>
    )
}


export default Todos