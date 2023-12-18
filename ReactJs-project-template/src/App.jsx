/////=========== Static Styling =============/////
// import React from 'react'

// function App(){     
//     return(
//         <div>
//             <h1 style={{ color : 'red' }}>welcome</h1> {/* akhane ami static styling korechi mane ai style ta sob somoy  ak eeee thakbe */}
//             <p>dip</p>
//         </div>
//     )
// }

// export default App



/////========== Dynamic Styling with Inline Css and variable =============/////
// import React from 'react'

// function App(){    
//     const error = true 

//     return(
//         <div>
//             <h1 style={{ color : error ? "red" : "green" }}>welcome</h1> {/* akhane ami dynamic styling korechi error variable ar value dara.. mane ai style ta sob somoy  ak eeee thakbe na amader error variable ar opore nirvor kore amader ai style ta apply  korbe and ami akhane tarnary operator ta use krechi error ? "red" : "green" jodi error variable ar value ta true hoy tahole amader color hobe red and jodi amader error variable ar value false hoy tahole amader green color dekhabe */}
//             <p>dip</p>
//         </div>
//     )
// }

// export default App


/////=========== Dynamic Styling with Inline Css and State =============////
// import React,{ useState , useEffect } from 'react'

// function App(){    
//     const [name , setName] = useState('')   /////akhane ami akta name nam aaa  state ba variable define korechi and setName nam aa akta function define korechi amader name state ar value take update korar jonno and useState hook ta use kore ami amader name state ba variable value take '' empty string diye inicilize kore diyechi aivabe useState('')
//     const [validInput , setValidInput] = useState(false) 


//     useEffect(()=> { ////amader name state ta update howar sathe sathe oi updated name state ar value ta pawar jonno amra useEffect hook ta use korechi
//         if(name.length < 3){  ////akhane check korbe jodi amader name state ar value ar length ta 3 ar theke kom hoy tahole niche jabe and amader validInput state ar value take false update kore debe
//             setValidInput(false)
        
//         }else{   /////jodi name state ar value ar length ta 3 ar theke beshi hoy tahole niche amader validInput state ar value take true update kore debe
//             setValidInput(true)
//         }
//     }, [name]) ////akhane useEffect hook ar moddhe anonimous function ar pore ami dependency add kore diyechi and dependency ar moddhe ami name state take likhechi ..tai jokhon eee amader name state ar value update hobe tokhon ee amader useEffect hook ta call hobe

//     const handleChange = (e) => {   ////jokhon eee amader input field ar moddhe kew kichu likhbe tokhon amader onChange event ta fire hobe and oi onChange event take listen korbe amader ai function ta and ai 'e' ar moddhe amader event take reseve korechi 
//         setName(e.target.value)        /////akhane amader name state take update kore dicchi amder 'e' ar value diye
//     }

//     return(
//         <div>
//              <input type="text" style={{ color: validInput ? "green" : "red" }} value={name} onChange={handleChange}  />  { /* akhane amader ai input field ar moddhe jokhon eee kew kichu likhbe tokhon amader onChange event ta fire hobe and ai onChange event ta fire howar sathe sathe amder ai handleChange function ta oi onChange event take listen korbe  and aikhane value={name} diye amader name state ar sathe amader ai input field take connect kore diyechi  and akhane style={{ color: validInput ? "green" : "red" }} diye ami dynamic styling korechi dynamic styling bolte bojhai kono condition ar opor vitti kore kono styling korake jemon ami akhane style={{ color: validInput ? "green" : "red" }} amader input field ar moddhe color add korbo akta condition ar oopore vitti kore jar jonno  amra color ar moddhe tarnary operator use korechi mane jei operator ar 3 ta part thake take tarnary operator bole tarnary opoerator ar moddhe bolechi jodi amader validInput state ba variable ar value jodi ture hoy tahole amder color ta hobe "green" and jodi amader validInput state ba variable ar value jodi false hoy tahole color ta "red" hobe */}
//         </div>
//     )
// }

// export default App


/////============= Dynamic Styling with Externel Css and State =================///// 
import React,{ useState , useEffect } from 'react'

function App(){    
    const [name , setName] = useState('')   /////akhane ami akta name nam aaa  state ba variable define korechi and setName nam aa akta function define korechi amader name state ar value take update korar jonno and useState hook ta use kore ami amader name state ba variable value take '' empty string diye inicilize kore diyechi aivabe useState('')
    const [validInput , setValidInput] = useState(false) 


    useEffect(()=> { ////amader name state ta update howar sathe sathe oi updated name state ar value ta pawar jonno amra useEffect hook ta use korechi
        if(name.length < 3){  ////akhane check korbe jodi amader name state ar value ar length ta 3 ar theke kom hoy tahole niche jabe and amader validInput state ar value take false update kore debe
            setValidInput(false)
        
        }else{   /////jodi name state ar value ar length ta 3 ar theke beshi hoy tahole niche amader validInput state ar value take true update kore debe
            setValidInput(true)
        }
    }, [name]) ////akhane useEffect hook ar moddhe anonimous function ar pore ami dependency add kore diyechi and dependency ar moddhe ami name state take likhechi ..tai jokhon eee amader name state ar value update hobe tokhon ee amader useEffect hook ta call hobe

    const handleChange = (e) => {   ////jokhon eee amader input field ar moddhe kew kichu likhbe tokhon amader onChange event ta fire hobe and oi onChange event take listen korbe amader ai function ta and ai 'e' ar moddhe amader event take reseve korechi 
        setName(e.target.value)        /////akhane amader name state take update kore dicchi amder 'e' ar value diye
    }

    return(
        <div>
             <input type="text" className={`${validInput ? "valid" : "invalid"}`} value={name} onChange={handleChange}  />  { /* akhane amader ai input field ar moddhe jokhon eee kew kichu likhbe tokhon amader onChange event ta fire hobe and ai onChange event ta fire howar sathe sathe amder ai handleChange function ta oi onChange event take listen korbe  and aikhane value={name} diye amader name state ar sathe amader ai input field take connect kore diyechi  and akhane className={`${validInput ? "valid" : "invalid"}`} diye ami dynamic styling korechi dynamic styling bolte bojhai kono condition ar opor vitti kore kono styling korake jemon ami akhane className={`${validInput ? "valid" : "invalid"}`} amader input field ar moddhe className diye call add kore diyechi and ai class ta add hobe amder akta conditon ar opore vitti kore jodi amder validInput state ba variable ar value true hoy tahole amder "valid" class ar moddhe jei degine gulo kora ache oi degine gulo add hobe and jodi amader vaildInput state ba variable ar value ta false hoy tahole amder "invalid" class ar moddhe jei degine gulo kora ache oi degine gulo add hobe and amader ai "valid" and "invalid" class gulo ami amar public/index.css ar moddhe degine korechi and oi index.css file take amader index.html ar moddhe link kore diyechi and aikhane amra chaile tarnary operator use na kore shortCerkit ta oo use korte partam ai vabe className={`${validInput && "valid"}`} mane jodi amader validInput state ba variable ar value ta true hoy taholei shudu tar porer pashe jabe and amder "valid" class ar moddhe jei degine gulo kora ache public/index.css ar moddhe oi degine ta akhane apply hoye jabe */}
        </div>
    )
}

export default App
