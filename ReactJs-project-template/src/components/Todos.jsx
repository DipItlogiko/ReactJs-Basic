import React,{ useEffect } from "react" 
import { useSelector , useDispatch } from "react-redux" /////akhane amader react-redux package ar moddhe theke useSelector Hook take import korechi amader main.jsx ar moddhe theke jei Store take amra golobally set kore diyechi oi Store ar value take access korar jonno and useDispatch hook ta use korechi amader kono action ke dispatch korar jonno

import  getAllTodosAction  from "../services/actions/TodosAction"
 

function Todos() {
    const Datas = useSelector((state) => state) /////akhane amader useSelector() hook ta use kore amader main.jsx ar moddhe golobally set kora Store take access korchi amader state ar moddhe Store ar sob value gulo ashbe and oi value ar moddhe theke ami shudhu  state ar value take niyechi ba select korechi and oi state ar value ta amader Datas variable ar moddhe store hoye jabe.....and Datas variable ar moddhe ami 3 ta state ke pabo
    const { isLoding, todos, error } = Datas  ////akhane amra Datas ar moddhe theke 3 ta state ke distructuring kore niyechi
    const dispatch = useDispatch() 
    
    useEffect(() => {
        dispatch(getAllTodosAction()) ////akhane ami amader getAllTodosAction() ai action take dispatch korechi 
    }, []) ////akhane amader useEffect hook ar moddhe anonymous function ar pore  [] dependency add korechi mane jokhon amader ai component ta prothom bar render hobe shudhu tokhon ee amder ai useEffect Hook ta call hobe tar pore amder ai component ta jotobar ee render hok na keno amader useEffect() hook ta call hobe na and ai useEffect() hook ar mooddhe jei action ache oita tokhon eee dispatch hobe

    return(
        <div>
            <h1>Todos App</h1>
            {isLoding && <h3>Loading...</h3>} {/*  akhane ami short carkit use korechi jodi amader isLoding value ta true hoy taholei amder and && operator ar porer pashe jabe and <h3>Loading...</h3>} aita print korbe  */}
            {error && <h3>{error.message}</h3>}

            <section className="s">
                {todos && todos.map((todo)=> {  ////akhane jodi todos ar moddhe kono data thake ba todos ar value ta jodi true hoy amader && operator ar porer pashe jabe and amader todos ar moddhe theke mapping korbe 
                    return(
                        <article className="a" key={todo.id}> {/* akhane key ar moddhe amader todo ar moddhe jai id ta ache oi id ta hobe  ai key dewar mane hocche amader protita articale ke unique kore diyechi amader todo ar moddhe jei id ta ache oi id diye */}
                            <h4>{todo.id}</h4>
                            <h4>{todo.title}</h4>
                        </article>
                    )
                } )}
            </section>
             
        </div>
    )
}

export default Todos