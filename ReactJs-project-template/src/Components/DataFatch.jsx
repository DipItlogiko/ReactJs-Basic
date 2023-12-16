import React, { useState , useEffect } from "react"

import Todo from "./Todo"


function DataFatch(){

   const [todos, setTodo] = useState(null)  ///akhane useState hook use kore amra todos nam aa akta variable ba state diclear korechi and akta function diclear korechi amader state ar value take update korar jonno ai nam aa setTodo and useState ar moddhe null diye amader todos variable ba state ar value ke null diye inisiallize kore diyechi


    useEffect(()=> { //// useEffect hook ar maddhome amra RestfullAPI/RestAPI ke hit kore data fatch kori ba jokhon amra timer use kori tokhon amra ai useEffect hook take use kori aabar jodi amra Dom(Document object Model) ke directly update korte chai shei khettre ooo amra useEffect hook take use kori....
        fetch("https://jsonplaceholder.typicode.com/todos") ///akhane amra jei link take dekhte pacchi ai link ta hocche amader ReastFullAPI/RestAPI and ai restfullAPI/restAPI ke ami fatch ar moddhe rekhechi mane amader ai restfullAPI/rest(representational state transfer)API take call korechi...ai api ta amra ai website theke aanechi practice korar jonno(https://jsonplaceholder.typicode.com/) ai website a jawar pore Resources section ar moddhe jei todos a click korte hobe and todos ar moddhe jawar pore amader browser ar opore jei url ta thakbe oi url take copy kore niye ashe amader ai fatch ar moddhe past kore diyechi
        .then((res) => {     ////akhane .then() diye bolechi amader oporer RestfullAPI/RestAPI ke call korar pore jei respose ta  pabo oi response ta amader ai res variable ar moddhe store hoye jabe
            return res.json()  ///akhane oi res variable mane amder response take json() aaa convart kore data take aikhan theke return kore diyechi
        }) 
        .then((data) =>{  ////API theke asha response ta json aa convart hoye jawar pore oi response ta amader data variable ar moddhe store hoye jabe
            setTodo(data)   ////and ami aikhane setTodo() function take call kore amader todos state take update kore diyechi data variable ar moddhe je data gulo ache oi data gulo diye
           //console.log(todos) 
        })
    }, [])  ////akhane ami useEffect hook ar moddhe jei anonimous function ta ache oi function ar pore ami [] aita add kore diyechi mane dependency add kore diyechi [] mane amader jokhon ai component ar return ta render hobe kebol tokhon eee amader ai useEffect hook ta akbar eee call hobe....jodi amra ai dependency ta na dei [] tahole amader ai useEffect hook ta bar bar call hote thakbe...
    
    return(
        <div>
            <h1>Todos</h1>
            {todos && todos.map((todo) => <Todo key={todo.id} {...todo} />)}  {/* akhane jehetu amader todos state ar moddhe amader sob data gulo ache jei data guloke ami api ar maddhome anechi and jehetu amader api ar moddhe theke data fatch hoye aashar pore amader todos state ar moddhe update hote akta somoy lagte pare tai jodi ami amader api theke data facth hoye aashar aagei mapping run hole amader akta error dekhabe je empty mapping kora jabe na and ai error take solve korar jonno ami aikhane todos && tar pore amader todos state theke mapping korechi karon amader Api ar moddhe theke asha sob data amder ai todos state ar moddhe store kora ache tai ...todos && aita mane hocche jodi amader todos state ar moddhe data thake tahole true hobe and ai && and oparator ar porer pash aa jabe....and key={todo.id} aita diyechi amader protita todo ke unique korar jonno key ar moddhe todo ar moddhe theke jei id ta pacchi oi id diye unique kore diyechi and {...todo} akhane amai sprade operator use kore todo ar moddhe jei data object gulo ashche akta akta kore amader todos state ar moddhe theke oi protita object ke ami sprade operator ar maddhome distructruing kore pass kore dicchi amader Todo component ar moddhe */}
        </div>
    )
}

export default DataFatch