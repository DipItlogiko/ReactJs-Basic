import React, { useState , useEffect } from "react"

import Todo from "./Todo"
import useFatch from "./CustomHooks/useFatch" ///akhane custom hook mane amader create kora hook ke import kore diyechi



function DataFatch(){
   
    const {data , isLoading , error } = useFatch("https://jsonplaceholder.typicode.com/todos") ///akhane amra jei link take dekhte pacchi ai link ta hocche amader ReastFullAPI/RestAPI and ai restfullAPI/restAPI ke ami amader create kora custom hook useFacth ke import kore ar moddhe pass kore diyechi mane amader ai restfullAPI/rest(representational state transfer)API take pass korechi...ai api ta amra ai website theke aanechi practice korar jonno(https://jsonplaceholder.typicode.com/) ai website a jawar pore Resources section ar moddhe jei todos a click korte hobe and todos ar moddhe jawar pore amader browser ar opore jei url ta thakbe oi url take copy kore niye ashe amader ai fatch ar moddhe past kore diyechi...and amader ai useFatch custom hook ta amader return korebe  {data , isLoading , error }...and ai custom hook ta ke ami chaile je kono component ar moddhe import kore ai useFatch( ar moddhe Api pass kore diye) amra au useFatch custom hook ta use kore amra jekono API theke data fatch korte pari amader akta code re-use kore bar bar ak akta API  ar moddhe theke data fatch kore use korte pari jar fole amader protita API ar theke data fatch korar jonno bar bar ak eee code likhte hobe na..ami aikhane custom Hook create korechi useFatch name and ai Hook takei use kore amra chile jekono API theke data fatch korte parbo....
   
    const ErrorMessage = error ///akhane amader error state ar value take ami ErrorMessage ar moddhe store kore diyechi
    const LodingMessage = "Data is loading..."

    return(
        <div>
            <h1>Todos</h1>
            
            {isLoading && LodingMessage } {/* akhane amader isLoading state ar value jodi true hoy tahole amader && and operator ta porer pash aa jabe and amader LodingMessage variable ar value take print kore dekhabe and jodi amder isLoading variable ar ba state ar value ta false hoy tahole amader && and operator ta oprer pash aa jabe oo na and amader LodingMessage variabl ar value ta oo print korbe na */}
            {error && ErrorMessage}   {/* akhane amader error state ar value jodi empty na  hoy tahole amader && and operator ta porer pash aa jabe and amader ErrorMessage variable ar value take print kore dekhabe and jodi amder error variable ar ba state ar value ta jodi empty hoy tahole amader && and operator ta oprer pash aa jabe oo na and amader ErrorMessage variabl ar value ta oo print korbe na */}
            {data && data.map((todo) => <Todo key={todo.id} {...todo} />)}  {/* akhane jehetu amader data state ar moddhe amader sob data gulo ache jei data guloke ami api ar maddhome anechi and jehetu amader api ar moddhe theke data fatch hoye aashar pore amader data state ar moddhe update hote akta somoy lagte pare tai jodi ami amader api theke data facth hoye aashar aagei mapping run hole amader akta error dekhabe je empty mapping kora jabe na and ai error take solve korar jonno ami aikhane data && tar pore amader data state theke mapping korechi karon amader Api ar moddhe theke asha sob data amder ai data state ar moddhe store kora ache tai ...data && aita mane hocche jodi amader data state ar moddhe data thake tahole true hobe and ai && and oparator ar porer pash aa jabe....and key={todo.id} aita diyechi amader protita todo ke unique korar jonno key ar moddhe todo ar moddhe theke jei id ta pacchi oi id diye unique kore diyechi and {...todo} akhane amai sprade operator use kore todo ar moddhe jei data object gulo ashche akta akta kore amader todos state ar moddhe theke oi protita object ke ami sprade operator ar maddhome distructruing kore pass kore dicchi amader Todo component ar moddhe */}
        </div>
    )
}

export default DataFatch