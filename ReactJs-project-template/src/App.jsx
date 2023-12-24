// import React from 'react'
// import {Helmet} from "react-helmet"; /////amader page ar title mane amader browser ar tab ar moddhe jei nam ta dekhte pai oi nam take show korar jonno amader ai ReactJs project ar moddhe amra akta npm package install korechi jar nam helmet and oi helmet package ar modhhe theke Helmet take import korechi

// function App() {
//     return(
//         <div>
//             <Helmet>  {/* akhane amder Helmet ar moddhe amader ai page ar title ta ki hobe ta bole diyechi and jodi amader browser ar tab ar moddhe giye dekhi tahole dekhbo My Title aita dekhacche amra chaile amader protita page ar moddhe giye aivabe title ta set kore dite pari oi page gulor ba amra chaile amader ai title ar kaj take akta component ar moddhe rekhe oi component take call kore prop ar maddhome data pass kore title take set korte pari*/}               
//                 <title>My Title</title>
//             </Helmet>

//            <h1>Hello</h1>
//         </div>
//     )
// }

// export default App

//////OR -----------------------------
import React from 'react'

import PageTitle from './components/PageTitle'

function App() {
    return(
        <div>
            <PageTitle titleName="Home" />  {/* akhane amader PageTitle component take call kore props aakare ai titleName="Home" data ta pathano hoyeche titleName ai key ar moddhe and amader ai PageTitle component ar moddhe sob kaj kora ache page title ta show korano jonno ja ja lagbe sob and props aakare ami jei "Home" take pathacchi amader ai titleName key ar moddhe and amader PageTitle component ta props ar moddhe titleName ta pabe and ar value ta oo pabe */}
           <h1>Hello</h1>
        </div>
    )
}

export default App