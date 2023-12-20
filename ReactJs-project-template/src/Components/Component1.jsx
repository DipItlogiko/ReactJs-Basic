import React,{ useState } from 'react'

import Component2 from './Component2'

function Component1(){
    const [user , setUser]  = useState({id : 1 , name : 'Dip'})
    return(
        <div>
            <Component2 userInfo={user} />  {/* akhane amra chaile Component4 ke call kore akbare Component4 ar moddhe data ta pass kore dite partam amader Component4 ar moddhe kintu amader oonek khettre amon hobe je component1->component2->component3->component4 aivabe kaj hocche tai amra componet4 ke call kore akbare props aakare data pass korte parbo na */}
        </div>
    )
}
export default Component1
