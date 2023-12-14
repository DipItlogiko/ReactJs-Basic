import React from 'react'

import Todo from './Todo'
import style from './Todos.module.css'

function Todos(props) {
     
    return(
        <div className={style.todos}>
            <section>
                {props.data.map((data) => <Todo key={data.id} data={data.DataFromNewTodo} Id={data.id} onHandelDelete={props.onHandelDelete} />)}
            </section>
        </div>
    )
}


export default Todos