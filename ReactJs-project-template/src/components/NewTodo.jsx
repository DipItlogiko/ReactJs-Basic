import React,{useState} from 'react'

import style from './NewTodo.module.css'

function NewTodo() {
    const [data, setData] = useState({title: '' , desc: ''})

    const { title, desc } = data

    const changeHandler = (event) => {
        const name = event.target.name

        if (name == 'todo'){
            setData({title: event.target.value , desc: ''})
        }if (name == 'dese'){
            setData({title: '' , desc: event.target.value})
        }
        
    }

    const handelSubmit = (event) => {
        event.preventDefault()
        console.log(data)
    }

   
    return (
        <div>
            <form className={style.form} onSubmit={handelSubmit}>
                <div className={style['form-field']}>  {/* amader css ar moddhe jodi eemon 2ta letter ar kono word thake thole amader oi class name take amader aivabe likhte hobe style['form-field'] */}
                    <label htmlFor="todo">Title: </label>
                    <input type="text" name="todo" id="todo" value={title} onChange={changeHandler} />  {/* akhane amader value={title} aita diye amader input field ar sathe amader state take connect kore diyechi */}
                </div>

                <div className={style['form-field']}>
                    <label htmlFor="desc">Desc: </label>
                    <textarea type="text" name="desc" id="desc" value={desc} onChange={changeHandler} />
                </div>

                <div>
                    <button type="submit">Add todo</button>
                </div>
            </form>
        </div>
    )
}

export default NewTodo
