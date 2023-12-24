import React,{ useEffect, useState } from "react"
import axios from "axios" /////akhane amra aage axios ke amder ai project ar moddhe install kore niye tar pore akhane import korechi and ai axios ta import korechi amader API ar moddhe theke data fatch korar jonno amra chaile amader ai ReactJs ar bydefault useEffect() hook use kore ooo amader API theke data fatch korte partam...

function App(){
   const [ datas ,setData ] = useState([])    ////akhane datas nam aa akta state define korechi and setData nam a akta function create korchi amader datas state ar value take update korar jonno...and ami ai datas state ar value take [] empty array diye inisialize kore diyechi useState() Hook ar maddhome

   const getAllUsers = async() => {   ////akhane ai getAllUsers nam aa akta function create korechi and ai function ar moddhe axios ar maddhome amader API theke data ke fetch korechi
    const response = await axios.get("http://localhost:3002/users")  /////akhane ami axios ar maddhome API theke amader data get korechi axios.get("http://localhost:3002/users")....and jei data ta pabo get korar pore oi data take ami response variable ar moddhe store kore diyechi
    setData(response.data)  /////akhane setData function take call kore amder datas state ar value take update kore diyechi response.data ar moddhe jei value ache oi value diye
   }

    useEffect(()=> {
        getAllUsers()  ////and akhan theke  getAllUsers() function ta call hobe
    }, []) ////jokhon amader return ta prothom bar render hobe kebol tokhon eee amader ai useEffect hook ta akbar ee call hobe karon ami aikhane useEffect hook ar anonimous functon ar pore [] dependency add kore diyechi tai amader ai  useEffect() hook ta akbar eee call hobe jokhon prothom bar amader return ta render hobe tokhon eee
        
    return(
        <div>
            <h1>{datas.map((data)=> <li key={data.id}>{data.name}</li>)}</h1>
        </div>
    )
}

export default App