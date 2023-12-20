/////===== akhane amra prop drilling use na korei useContext Hook use kore  amader Parent Component Component1 ar moddhe theke sorasori data ta amader child componet Component4 ar moddhe niye aashechi==========///

import React,{ useContext } from 'react'  ///akhane ami useContext hook ta use korechi jehetu ami amader Component1 mane parent Component Component1 theke sorasori amader child componet component4 ar moddhe oi datatake access korchi jei data take ami parent component component1 theke pass korechi 

import { UserContext } from './UserContext'  ///amra jei context ta create korechi src/Components/UserContext.jsx file ar moddhe oi file ar moddhe jei variable ar moddhe ami context ta store kore rekhechi oi variable take ami aikhane import korechi 

function Component4(){
    //const data = useContext(UserContext) ///akhane amder useContext() Hook ar moddhe UserContext variable take diye diyechi and ai useContext() hook ta amader UserContext variable ar moddhe theke data aane debe and oi data ta amra data variable ar moddhe store kore rekhechi
    const { user , text } = useContext(UserContext)  ///jehetu amader parent component component1 theke  UserContext.provider ar moddhe value ar moddhe 2ta state ar value send korechi tai ami aikhane distructuring kore niyechi jehetu amader object aakare data ashce tai distructuring korar somoy { } ar moddhe rekhechi amader state ar nam gulo 
    
    return(
        <div>
            <p>{ user.id }</p>
            <p>{ user.name }</p>
            <p>{ text }</p>
        </div>
    )
}
export default Component4