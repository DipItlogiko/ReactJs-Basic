import React from 'react'

import { FaRegTrashAlt } from 'react-icons/fa'
import style from './Todo.module.css'

function Todo(props) {
    const { title, desc } = props.data //// akhane ami props ar moddhe theke distructructuring kore data vange ber kore niye ashechi
    const { Id } = props 

    const handelDelete = (Id) => {
        props.onHandelDelete(Id)
    }

    return (
        <div>
            <article className={style.todo}>
                <div>                                       
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <div>
                        <button className={style.btn} onClick={() => {handelDelete(Id)}}>
                            <FaRegTrashAlt />
                        </button>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Todo
