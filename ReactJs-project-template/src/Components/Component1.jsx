import React,{ useState } from 'react'

import Component2 from './Component2'
import { UserContext } from './UserContext'

function Component1(){
    const [user , setUser]  = useState({id : 1 , name : 'Dip'})
    const [text , setText] = useState("Hello world")

    return(
        // <UserContext.Provider value={ user }>  {/* amader src/Components/UserContext.jsx file ar moddhe amra jei Context ta create kore jei variable ar moddhe rekhechi oi variable ta hocche amader UserContext and ai variable ar moddhe amra 2 ta jinish pabo provider and consumer ai 2 ta ar moddhe theke amra provider ta use korbo jemon ta akhane korechi and consumer ar poriborte useContext Hook ta use korbo and amader ai parent componet moddhe theke amader child component gulo ke provider diye rap kore dite hobe tai akhane ami amader child componet take rap kore diyechi provider dara ai Provider ta ki korbe amader ai Component1 ar joto child componets ache oi components gulor moddhe data provide kore debe value={{ user }} ai user state ar value take akhane ami chaile multiple state ar value oo pass kore dite pari amader value={ } ar moddhe */}
        //     <Component2  />  {/* akhane amra chaile Component4 ke call kore akbare Component4 ar moddhe data ta pass kore dite partam amader Component4 ar moddhe kintu amader oonek khettre amon hobe je component1->component2->component3->component4 aivabe kaj hocche tai amra componet4 ke call kore akbare props aakare data pass korte parbo na */}
        // </UserContext.Provider>

        <UserContext.Provider value={{ user , text }}>  {/* amader src/Components/UserContext.jsx file ar moddhe amra jei Context ta create kore jei variable ar moddhe rekhechi oi variable ta hocche amader UserContext and ai variable ar moddhe amra 2 ta jinish pabo provider and consumer ai 2 ta ar moddhe theke amra provider ta use korbo jemon ta akhane korechi and consumer ar poriborte useContext Hook ta use korbo and amader ai parent componet moddhe theke amader child component gulo ke provider diye rap kore dite hobe tai akhane ami amader child componet take rap kore diyechi provider dara ai Provider ta ki korbe amader ai Component1 ar joto child componets ache oi components gulor moddhe data provide kore debe value={{ user , text }} ai user state and text state ar value take akhane ami   multiple state ar value   pass kore diyechi amader value={{  }} ar moddhe object aakare */}
            <Component2  />  {/* akhane amra chaile Component4 ke call kore akbare Component4 ar moddhe data ta pass kore dite partam amader Component4 ar moddhe kintu amader oonek khettre amon hobe je component1->component2->component3->component4 aivabe kaj hocche tai amra componet4 ke call kore akbare props aakare data pass korte parbo na */}
        </UserContext.Provider>
    )
}
export default Component1
