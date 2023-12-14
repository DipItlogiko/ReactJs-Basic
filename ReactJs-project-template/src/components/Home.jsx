import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo'
 

function Home() {

    const [todos, setTodo] = useState([])  ////akhane ami state difine korechi jehetu amra jani functional component ar moddhe sorasori state use kora jai na functional component ar moddhe  state use korte hole amader useState Hook use kore tar pore amder functional component ar moddhe state take use korte hobe and prothom todos ta hocche amader state ai todos state ar moddhe amader akta array thakbe jeita ami amader useState hook ar moddhe define kore diyechi je amader todos state ar moddhe akta array thakbe and oi array ar moddhe amader state ar data ta thakbe......and setTodo ta hocche amader function jar maddhome amra amader ai todos state ar value take update korte parbo

    const handelChildData = (DataFromNewTodo) => {
        setTodo([...todos , {id: uuidv4() , DataFromNewTodo}]) ////akhane amader Child component ar moddhe theke mane NewTodo component ar moddhe theke jei data ta amader ai parent component ar moddhe ashche mane ai Home component ar moddhe ashche oi data take ami amader todos variable ar moddhe store kore diyechi and protita data amader array ar moddhe object {} akare store hobe and protita datar jonno ami akta unique id create korar jonno amader ReactJs project ar moddhe uuid ta install korechi npm ar maddhome and amder ai file ar opore oitake import kore niyechi...and jokhon eee amader todos state ba variable ar moddhe kono object add hobe oi object ar moddhe id: uuidv4() mane id key ar value hishebe protibar amader uuidv4() ta akta akta kore uuid ba unique id provide korbe amader protita object ar id key ar jonno
    }

    const handelDelete = (deleteId) => {
        // const filteredTodos = todos.filter((todo) => todo.id !== deleteId ) /// amader jei todo data ar delete button a click aa hobe oi todo ar id ta amader child component ar moddhe theke parent component ar moddhe aanar jonno mane amader Home component ar moddhe anar jonno amader ai method ta create kora hoyeche  and ai method ta amra amder child component ke call kore pass kore diyechi and oi child teke jei data ta pass hoye amader ai parent ar moddhe ashche ba Home component ar moddhe ashche oi data ta amder ai deleteId ar moddhe store hoye jache amader child component ar moddhe theke ashe...and tar pore ami aikhane amder todos state ba variable ar moddhe jei array ta ache oi array ar moddhe theke ami filter korechi je amader deleteId ai variable ar moddhe theke jei id ta ashche amader child component ar moddhe theke oi id theke ami amader todos ar moddhe jei id ta ache oi id ar sathe filter korechi and akhane todo.id !== deleteId   amader todo ar moddhe akta akta kore object ashbe and oi object ar moddhe theke protita object ar id diye amder ai deleteId variable ar value diye...amader todos state ba array ar moddhe jei object gulo ar id amader deleteId ai variable ar value ar sathe match kore na shudhu oi object guloke amder ai filteredTodos ar moddhe store kore debe
        // setTodo(filteredTodos)  ////akhane ami amder todos state ar value take update kore diyechi setTodo function take call kore tar moddhe amder filteredTodos aita pass korediyechi jar fole amader ai filteredTodos ar moddhe thaka data gulo amader todos state ar moddhe update hoye jabe
    
        ////OR----------
        setTodo((privousState) =>{ /// amra jani amra jokhon eee amader state ar value take update korbo tokhon amder previous state ar opore base kore amader state ar value take update korte hobe
            const filteredTodos = privousState.filter((todo) => todo.id !== deleteId )
            return filteredTodos
        })

    }

    return (
        <div className={style.container}>
            <h1 style={{ textAlign: 'center', color: 'white' }}>Todo App</h1>
            <NewTodo onHandelChildData={handelChildData} /> {/* jehetu Home akhane amader parent component and amader NewTodo akta Child component and amra jani jokhon amra amader Child component ar moddhe theke kono data anbo amader parent component ar moddhe tokhon amader parent component ar moddhe akta method create korte hobe and oi method take child ar moddhe pass kore child compornt ar moddhe theke amader parent component ar moddhe data niye ashte hobe and Child component theke parent component ar moddhe data aanake bole (bottom to top) ba state lifting*/}
            <Todos data={todos} onHandelDelete={handelDelete} /> {/* akhane amader delete button a click howar pore oi id take amader ai parent component mane amader Home component ar moddhe child component theke data aaanar jonno amra opore akta method create korechi and oi method take ami amader child component take call kore oi child component ar moddhe pass kore diyechi props aakare */}
        </div>
    )
}

export default Home
