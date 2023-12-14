import React,{useState} from 'react'

import style from './NewTodo.module.css'

function NewTodo(props) {
    const [data, setData] = useState({title: '' , desc: ''})

    const { title, desc } = data

    const changeHandler = (event) => {
        const filedName = event.target.name

        if (filedName === 'todo'){
            setData({title: event.target.value , desc})
        }else{
            setData({title , desc: event.target.value})
        }
        
    } 

    const handelSubmit = (event) => {
        event.preventDefault()  ///amader form take submit korar pore bydefault reload hoye je refresh hoye jeto oitake amra bondho korechi amader  event.preventDefault() aita diye 

        props.onHandelChildData(data)  ///// amader Home component ar moddhe theke amader ai component ar moddhe jei method ta pass korechi oi method take amra aaage ai component ar moddhe props aakare receive korechi and oi props ar moddhe theke amra amader Home component theke pathano method take call kore oi method ar moddhe amader form ar value gulo pass kore diyechi oi method ar sathe and 'data' ar moddhe amader sob value gulo thakbe
        setData({title: '' , desc: ''})  //// akhane amader form ar moddhe data diye form take submit korar pore amader form ar input field ar value gulo empty hoye jabe ja ami aikhane set kore diyechi amader state ke
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
