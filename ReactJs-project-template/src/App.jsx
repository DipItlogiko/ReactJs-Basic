import React,{useState , useCallback} from 'react'

import Message from './components/Message'

function App(){
    const [count , setCount] = useState(0)
    const [toggle ,setToggle] = useState(false)

    /////=============Jodi amra aivabe amader state take update kori tahole dekha jabe jokhon amra amader toggle button ar moddhe click korbo tokhon amader Message Component ta ooo call hobe kintu call howar kotha chilo na karon amader toggle ar sathe amader Message Component ar kono somporko nei aamon ki amader Message Component ar moddhe ooo amra ReactJs ar builtin memo() function ta ooo add korechi jate amader Message Component ta un-nasessary call na hoy tar jonno kintu to ooo amader toggle button a click korle Message Component ta call hocche jar akmatro karon hocche Message Component ar moddhe ami jei method take pass korechi props aakaree amader amader child Message component theke amader parent component App ar moddhe data aanar jonno....to jokhon eee ami  amader toggle button ar moddhe click kochi amader App component ta render hocche and amader ai getDataFromChildComponentMessage ai method ta oooo un-nasessary call hocche tai Message component ta ooo call hocche App component ar sathe toggle button a click korar sathe sathe and ai problem take solve korar jonno amra ReactJs ar builtin hook use korte pari useCallback()...niche ai kajtake useCallback() hook use kore kora hoyeche
    // const getDataFromChildComponentMessage = () => {
    //     setCount((count) => count + 1)
    // }
   
    const getDataFromChildComponentMessage = useCallback(() => {  ////akhane amra ReactJs ar builtin useCallback() hook take use korechi and jar moddhe akta anonimous function ache and amader state ar value take ami update kore dicchi ai useCallback() hook ar moddhe 
            setCount((count) => count + 1)
        }, [count]) ///// akhane ami dependency add kore diyechi [count] to jokhon eee amader count state ar value ta change hobe ba update hobe tokhon ee shudhu amader ai getDataFromChildComponentMessage function ta call hobe ta chara un-nasessary amader ai getDataFromChildComponentMessage function ta call hobe na and jokhon amra toggle button aa click korbo tokhon amader shudhu App component ta eeee render hobe Message Component ar moddhe akhan theke jei getDataFromChildComponentMessage ta pass korchi oi function ta r call ooo hobe na un-nasessary and amader Message Component ta ooo call hobe na jokhon amra toggle button aa click korbo....

    console.log("app rendered!!!") //// amra jani bydefault component akbar redering hobe and tarpore joto bar amader component ar moddhe props ar value change hobe and state ar value change hobe toto bar amader component render hobe tai console diye oitake check korechi and akhane problem hocche amader ai App component ta prothom bar jokhon bydefault vabe render hocche tokhon amader App and App component ar child component Message ta ooo render hocche ai porjonto thik ache karon bydefault amader component ta akbar render hoy...and tar pore amader App component ar state ta jokhon change hocche tokhon amader App component ta to change hobe amra jani karon kono component ar state ba props ar value change hole amader Component ta ooo render hoy kintu problem ta hocche jokhon ee amader ai App component ar state ta change hocche tokhon amader App component ar sathe sathe amader App component ar child Message Component ta ooo render hocche jodi oo amader App component ar state change howar sathe Message component ar kono somporko chilo na ta ooo amader Message component ta render hocche to ai un-nasessary Message component ar rendering ta bondho korar jonno amader Message component ar moddhe giye ReactJs ar builtin function memo() use korte hobe
    return(
        <div>   
            {toggle ? "on" : "off"}   {/* akhane ami tarnary operator(mane je operator ar 3 ta part thake take tarnary operator bole) use korechi jodi amader toggle state ar value ta true hoy tahole on dekhbe and jodi toggle state ar value ta jodi flase hoy tahole  off dekhabe */}
            <button onClick={(e)=>{setToggle(!toggle)}}>Toggle</button>    {/* jokhon eee amader Toggle button aa click hobe tokhon eee amader onClick Event ta fire hobe and oi onClick event take listen korbe amader amader inline functional approch and amader setToggle function take call kore amader toggle state ar value take update kore debe !toggle jodi toggle state ar value true thake tahole false kore debe and jodi false thake tahole true kore debe */}   

            <h1>Count :{count}</h1>
            <button onClick={(e)=>{setCount((count)=> count +1)}}>+</button>

            <Message number={count} onGetDataFromChildComponentMessage={getDataFromChildComponentMessage} /> {/* jehetu amader ai Message component ar moddhe amra ReactJs ar builtin memo() function ta use korechi tai jokhon amader ai App component ar state ar value ta chanage hobe jokhon oi state ar value ta amader App component ar child Component Message Component ar moddhe props aakare send kore diyechi and jehetu amader ai state ar value ta change hobe tai jokhon eee amader App component ar state ta chane hobe tokhon amader App component ar sathe amader App comoponent ar child component Message component ta ooo render hobe jodi oo ami amader Message component ar moddhe ReactJs ar builtin memo() function ta use korechi tar pore ooo....karon amader ai state ar sathe amader Message ar somporko ache tai jokhon eee amader state ar value ta change hobe amader App component ar sathe App component ar child component Message component ta ooo render hobe */} 
        </div>
    )
}

export default App

