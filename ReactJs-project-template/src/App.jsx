// import React,{useState} from 'react'

// import Message from './components/Message'

// function App(){
//     const [count , setCount] = useState(0)
//     console.log("app rendered!!!") //// amra jani bydefault component akbar redering hobe and tarpore joto bar amader component ar moddhe props ar value change hobe and state ar value change hobe toto bar amader component render hobe tai console diye oitake check korechi and akhane problem hocche amader ai App component ta prothom bar jokhon bydefault vabe render hocche tokhon amader App and App component ar child component Message ta ooo render hocche ai porjonto thik ache karon bydefault amader component ta akbar render hoy...and tar pore amader App component ar state ta jokhon change hocche tokhon amader App component ta to change hobe amra jani karon kono component ar state ba props ar value change hole amader Component ta ooo render hoy kintu problem ta hocche jokhon ee amader ai App component ar state ta change hocche tokhon amader App component ar sathe sathe amader App component ar child Message Component ta ooo render hocche jodi oo amader App component ar state change howar sathe Message component ar kono somporko chilo na ta ooo amader Message component ta render hocche to ai un-nasessary Message component ar rendering ta bondho korar jonno amader Message component ar moddhe giye ReactJs ar builtin function memo() use korte hobe
//     return(
//         <div>            
//             <h1>Count :{count}</h1>
//             <button onClick={(e)=>{setCount((count)=> count +1)}}>+</button>

//             <Message /> {/* jehetu amader ai Message component ar moddhe amra memo() function ta use korechi tai jokhon amader ai App component ar state ar value ta chanage hobe tokhon amader App component ar sathe sathe amader ai Message child component ta rr re-render hobe na karon ami Message component ar moddhe memo() function ta use korechi and amader App component ar state ar sahte Message component ar kono somporko nei tai jokhon amader App component ar state ar value change hobe and amader App component ta render hobe tokhon App component ar Child component Message Component ta rrr render hobe na karon ami Message Component ar moddhe ReactJs ar builtin memo() function ta use korechi and an memo ar full form hocche memorize  */} 
//         </div>
//     )
// }

// export default App

//////////// OR-----------------------
// import React,{useState} from 'react'

// import Message from './components/Message'

// function App(){
//     const [count , setCount] = useState(0)
//     console.log("app rendered!!!") //// amra jani bydefault component akbar redering hobe and tarpore joto bar amader component ar moddhe props ar value change hobe and state ar value change hobe toto bar amader component render hobe tai console diye oitake check korechi and akhane problem hocche amader ai App component ta prothom bar jokhon bydefault vabe render hocche tokhon amader App and App component ar child component Message ta ooo render hocche ai porjonto thik ache karon bydefault amader component ta akbar render hoy...and tar pore amader App component ar state ta jokhon change hocche tokhon amader App component ta to change hobe amra jani karon kono component ar state ba props ar value change hole amader Component ta ooo render hoy kintu problem ta hocche jokhon ee amader ai App component ar state ta change hocche tokhon amader App component ar sathe sathe amader App component ar child Message Component ta ooo render hocche jodi oo amader App component ar state change howar sathe Message component ar kono somporko chilo na ta ooo amader Message component ta render hocche to ai un-nasessary Message component ar rendering ta bondho korar jonno amader Message component ar moddhe giye ReactJs ar builtin function memo() use korte hobe
//     return(
//         <div>            
//             <h1>Count :{count}</h1>
//             <button onClick={(e)=>{setCount((count)=> count +1)}}>+</button>

//             <Message number='0' /> {/* jehetu amader ai Message component ar moddhe amra memo() function ta use korechi tai jokhon amader ai App component ar state ar value ta chanage hobe tokhon amader App component ar sathe sathe amader ai Message child component ta rr re-render hobe na karon ami Message component ar moddhe memo() function ta use korechi and amader App component ar state ar sahte Message component ar kono somporko nei and akhan theke protibar amader Message component ar moddhe ak ee props ar vlue send hocche 0 tai jokhon amader App component ar state ar value change hobe and amader App component ta render hobe tokhon App component ar Child component Message Component ta rrr render hobe na karon ami Message Component ar moddhe ReactJs ar builtin memo() function ta use korechi and an memo ar full form hocche memorize  */} 
//         </div>
//     )
// }

///////////// OR ---------------------------
import React,{useState} from 'react'

import Message from './components/Message'

function App(){
    const [count , setCount] = useState(0)
    console.log("app rendered!!!") //// amra jani bydefault component akbar redering hobe and tarpore joto bar amader component ar moddhe props ar value change hobe and state ar value change hobe toto bar amader component render hobe tai console diye oitake check korechi and akhane problem hocche amader ai App component ta prothom bar jokhon bydefault vabe render hocche tokhon amader App and App component ar child component Message ta ooo render hocche ai porjonto thik ache karon bydefault amader component ta akbar render hoy...and tar pore amader App component ar state ta jokhon change hocche tokhon amader App component ta to change hobe amra jani karon kono component ar state ba props ar value change hole amader Component ta ooo render hoy kintu problem ta hocche jokhon ee amader ai App component ar state ta change hocche tokhon amader App component ar sathe sathe amader App component ar child Message Component ta ooo render hocche jodi oo amader App component ar state change howar sathe Message component ar kono somporko chilo na ta ooo amader Message component ta render hocche to ai un-nasessary Message component ar rendering ta bondho korar jonno amader Message component ar moddhe giye ReactJs ar builtin function memo() use korte hobe
    return(
        <div>            
            <h1>Count :{count}</h1>
            <button onClick={(e)=>{setCount((count)=> count +1)}}>+</button>

            <Message number={count} /> {/* jehetu amader ai Message component ar moddhe amra ReactJs ar builtin memo() function ta use korechi tai jokhon amader ai App component ar state ar value ta chanage hobe jokhon oi state ar value ta amader App component ar child Component Message Component ar moddhe props aakare send kore diyechi and jehetu amader ai state ar value ta change hobe tai jokhon eee amader App component ar state ta chane hobe tokhon amader App component ar sathe amader App comoponent ar child component Message component ta ooo render hobe jodi oo ami amader Message component ar moddhe ReactJs ar builtin memo() function ta use korechi tar pore ooo....karon amader ai state ar sathe amader Message ar somporko ache tai jokhon eee amader state ar value ta change hobe amader App component ar sathe App component ar child component Message component ta ooo render hobe */} 
        </div>
    )
}

export default App

