import React, { useState , useEffect } from "react"

import Todo from "./Todo"

const LodingMessage = "Data is loading..."

function DataFatch(){

   const [todos, setTodo] = useState(null)     ///akhane useState hook use kore amra todos nam aa akta variable ba state diclear korechi and akta function diclear korechi amader state ar value take update korar jonno ai nam aa setTodo and useState ar moddhe null diye amader todos variable ba state ar value ke null diye inisiallize kore diyechi
   const [isLoading, setIsLoading] = useState(true)    ///akhane useState hook use kore amra isLoading nam aa akta variable ba state diclear korechi and akta function diclear korechi amader state ar value take update korar jonno ai nam aa setIsLoading and useState ar moddhe true diye amader isLoading variable ba state ar value ke true diye  inisiallize kore diyechi...karon amader oonek ReastFullAPI/RestAPI ar moddhe theke data load hote time lage tai amader API ar moddhe theke data load hote jodi beshi somoy ney tahole oitake handel korar jonno ami akhane ai state take create korechi
   const [error , setError] = useState(null)   ////akhane useState hook use kore amra error nam aa akta variable ba state diclear korechi and akta function diclear korechi amader state ar value take update korar jonno ai nam aa setError and useState ar moddhe null diye amader isError variable ba state ar value ke null diye inisiallize kore diyechi

    useEffect(()=> {          //// useEffect hook ar maddhome amra RestfullAPI/RestAPI ke hit kore data fatch kori ba jokhon amra timer use kori tokhon amra ai useEffect hook take use kori aabar jodi amra Dom(Document object Model) ke directly update korte chai shei khettre ooo amra useEffect hook take use kori....
        fetch("https://jsonplaceholder.typicode.com/todos") ///akhane amra jei link take dekhte pacchi ai link ta hocche amader ReastFullAPI/RestAPI and ai restfullAPI/restAPI ke ami fatch ar moddhe rekhechi mane amader ai restfullAPI/rest(representational state transfer)API take call korechi...ai api ta amra ai website theke aanechi practice korar jonno(https://jsonplaceholder.typicode.com/) ai website a jawar pore Resources section ar moddhe jei todos a click korte hobe and todos ar moddhe jawar pore amader browser ar opore jei url ta thakbe oi url take copy kore niye ashe amader ai fatch ar moddhe past kore diyechi
        .then((res) => {         ////akhane .then() diye bolechi amader oporer RestfullAPI/RestAPI ke call korar pore jei respose ta  pabo oi response ta amader ai res variable ar moddhe store hoye jabe
            if(!res.ok){  ////jodi amader RestfullAPI/RestAPI ar moddhe theke thik thak vabe response na ashe mane mader amader response status ta jodi ok na hoy tahole nicher error message ta throw korbe
                throw Error("Data isn't fatched!");
            }
            return res.json()      ///akhane oi res variable mane amder response take json() aaa convart kore data take aikhan theke return kore diyechi
        }) 
        .then((data) =>{  ////API theke asha response ta json aa convart hoye jawar pore oi response ta amader data variable ar moddhe store hoye jabe
            setTodo(data)   ////and ami aikhane setTodo() function take call kore amader todos state take update kore diyechi data variable ar moddhe je data gulo ache oi data gulo diye
            setIsLoading(false)  ////jokhon amader oporer line aaa amader api theke asha data ta amader todos state ar moddhe store hoye jabe tar pore amader isLoading state ar value take ami akhan theke update kore diyechi false
            setError(null) ///jodi amader api ar moddhe theke data fatch hoye amader state ar moddhe store hoye jai successful tahole amader error state ar value ta aakhane ami aabar null kore diyechi...name kono error nei amader error state ar moddhe
        })
        .catch((error) => {  ///opor theke jodi amader error ta throw hoy tahole amader akhane oi throw kora error take akhane catch korbe and oi error take error variable ar moddhe store korbe
            setError(error.message) ///akhan theke amader error state ar moddhe value ta update hoye jacche error.message ar moddhe jei message ta ashche oi message diye
            setIsLoading(false) ////jodi amader API theke data fatch korar somoy kono error hoy tahole amader isLoading state ar value take ami akhane false kore diyechi mane amader loding message ta how korbe na jodi API theke Data fatch korar somoy kono error ashe tahole
        })
    }, [])  ////akhane ami useEffect hook ar moddhe jei anonimous function ta ache oi function ar pore ami [] aita add kore diyechi mane dependency add kore diyechi [] mane amader jokhon ai component ar return ta render hobe kebol tokhon eee amader ai useEffect hook ta akbar eee call hobe....jodi amra ai dependency ta na dei [] tahole amader ai useEffect hook ta bar bar call hote thakbe...
    

    const ErrorMessage = error ///akhane amader error state ar value take ami ErrorMessage ar moddhe store kore diyechi


    return(
        <div>
            <h1>Todos</h1>
            
            {isLoading && LodingMessage } {/* akhane amader isLoading state ar value jodi true hoy tahole amader && and operator ta porer pash aa jabe and amader LodingMessage variable ar value take print kore dekhabe and jodi amder isLoading variable ar ba state ar value ta false hoy tahole amader && and operator ta oprer pash aa jabe oo na and amader LodingMessage variabl ar value ta oo print korbe na */}
            {error && ErrorMessage}   {/* akhane amader error state ar value jodi empty na  hoy tahole amader && and operator ta porer pash aa jabe and amader ErrorMessage variable ar value take print kore dekhabe and jodi amder error variable ar ba state ar value ta jodi empty hoy tahole amader && and operator ta oprer pash aa jabe oo na and amader ErrorMessage variabl ar value ta oo print korbe na */}
            {todos && todos.map((todo) => <Todo key={todo.id} {...todo} />)}  {/* akhane jehetu amader todos state ar moddhe amader sob data gulo ache jei data guloke ami api ar maddhome anechi and jehetu amader api ar moddhe theke data fatch hoye aashar pore amader todos state ar moddhe update hote akta somoy lagte pare tai jodi ami amader api theke data facth hoye aashar aagei mapping run hole amader akta error dekhabe je empty mapping kora jabe na and ai error take solve korar jonno ami aikhane todos && tar pore amader todos state theke mapping korechi karon amader Api ar moddhe theke asha sob data amder ai todos state ar moddhe store kora ache tai ...todos && aita mane hocche jodi amader todos state ar moddhe data thake tahole true hobe and ai && and oparator ar porer pash aa jabe....and key={todo.id} aita diyechi amader protita todo ke unique korar jonno key ar moddhe todo ar moddhe theke jei id ta pacchi oi id diye unique kore diyechi and {...todo} akhane amai sprade operator use kore todo ar moddhe jei data object gulo ashche akta akta kore amader todos state ar moddhe theke oi protita object ke ami sprade operator ar maddhome distructruing kore pass kore dicchi amader Todo component ar moddhe */}
        </div>
    )
}

export default DataFatch