// import React from "react"
// import { useSearchParams } from "react-router-dom" ////// akhane amra jei ReactRouter package ta install korechi amader ai ReactJs project ar moddhe routing ar facility ta pawar jonno oi ReactRouter package ar moddhe theke useSearchParams Hook take import korechi amader queary paramiter take access korar jonno.....

// function Users(){
//     const [searchParams , setSearchparams] = useSearchParams()  ////// ai useSearchParams() hook ta amder queary paramiter ke access korte shajjo korbe...and aikhane amai searchParams ai nam aaa akta state niyechi and setSearchparams nam  aaa akta function niyechi and ai setSearchparams function take call kore amader ai searchParams state ar value take update kore dite pari
   
//     return(
//         <div>
//            { searchParams.get('id') } {/* jodi amder browser ar moddhe /users?id=101&age=20 likhe hit kore tahole amader ai queary parameter theke id key ar value ta dekhabe amader browser ar moddhe 101......karon amader searchParams state ar moddhe amader queary parameter ar sob thakbe and oi searchParams state ar moddhe theke ami get korchi id key ar value take  */}
//            {searchParams.get('age')}
          
//         </div>
//     )
// }

// export default Users


///// OR ---------------------------

import React,{ useState } from "react"
import { useSearchParams } from "react-router-dom" ////// akhane amra jei ReactRouter package ta install korechi amader ai ReactJs project ar moddhe routing ar facility ta pawar jonno oi ReactRouter package ar moddhe theke useSearchParams Hook take import korechi amader queary paramiter take access korar jonno.....

function Users(){
    const [searchParams , setSearchparams] = useSearchParams()  ////// ai useSearchParams() hook ta amder queary paramiter ke access korte shajjo korbe...and aikhane amai searchParams ai nam aaa akta state niyechi and setSearchparams nam  aaa akta function niyechi and ai setSearchparams function take call kore amader ai searchParams state ar value take update kore dite pari

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleSubmit = (e) => { /////jokhon amader form ta submit hobe tokhon onSubmit event ta fire hobe and oi onSubmit event take listen korbe amader ai function ta  and 'e' ar moddhe amader oi event ta chole ashbe
        e.preventDefault()
        setSearchparams({ name: name, age: age }) /////akhane setSearchparams() function take call kore akta object ar moddhe key ar moddhe amader state ar value gulo set kore amader searchParams state take update kore diyechi ai object diye and amra amader form take submit korar pore amader browser ar search bar ar moddhe  amader ai object take dekhte parbo queary paramiter hishebe

        setName('') ///form ta submit hoye jawar pore amader name state ar value take '' empty kore diyechi setName() function take call kore..
        setAge('')

    }
   
    return(
        <div>

           <form onSubmit={handleSubmit}> {/* jokhon eee amader form ta submit hobe tokhon eee amader ai onSubmit event ta fire hobe and ai onSubmit event take listen korbe amader handleSubmit ai function ta */}
            <div>
                <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="name"/>  {/* akhane amader ai input field take name state ar sathe connent kore diyechi value={name} and jokhon eee amader ai input field ar moddh kew kichu likhbe tokhon amader onChange  event ta fire hobe and ai onChange event take listen korbe amader ai inline functional approch ta onChange={(e)=>{setAge(e.target.value)}} jokhon amader onChange event ta fire hobe tokhon 'e' amader oi event take listen korbe and amader setName() function take call kore e.target.value ai value diye amader name state ar value take update kore diyechi */}
                <input type="number"  value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder="age"/>
                <button type="submit">Find User</button>
            </div>
           </form>
          
        </div>
    )
}

export default Users


