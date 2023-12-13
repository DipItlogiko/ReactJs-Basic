import React from 'react'

import { FaRegTrashAlt } from 'react-icons/fa'
import style from './Todo.module.css'

function Todo(props) {
    const { id, title, desc } = props.data //// akhane ami props ar moddhe theke distructructuring kore data vange ber kore niye ashechi
    return (
        <div>
            <article className={style.todo}>
                <div>
                    <h2>{id}</h2>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <div>
                        <button className={style.btn}>
                            <FaRegTrashAlt />
                        </button>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Todo
