import React , {useState}  from "react"

import Style from "./faq.module.css"

function FAQ({id , name , desc}){  ////jehetu amra amader FAQs component ar moddhe theke amader ai FAQ component take call kore tar moddhe sprade operator use kore distructuring kore data ta pass kore diyechi tai akhane amra props likhi nai sora sori amader faq object ar moddhe jei jei key ar under a value gulo ache oi key ar nam gulo likhe diyechi
    
    const [toggle ,setToggle ] = useState(false)  ///akhane amader toggle variable ar moddhe ba state ar moddhe inisial value set kore diyechi flase useState Hook ar maddhome

    return(
        <div>
            <article className={Style.faq}>
                <div>
                    <h4>{name}</h4>
                    <button onClick={()=> {setToggle(!toggle)}}>  {/* jokhon amader ai button a click kora hobe tokhon ee amader onClick event ta fire hobe and ai onClick event take listen korebe amader ai inline functional approch amader setToggle ai function take call kore amader ai toggle variabe  ar ba state ar value take updata kore debe..and ai !toggle mane hocche amader toggle state  ba variable ar value ar value true thakle false update kore debe amader state ar value amader button a click korle aabar jodi amader state ar value ta false thake tahole amader button aa click korle amader state ar value ta true update  hoye jabe */}
                        {toggle ? "-" : "+"}   {/* akhane ami tarnary operator use korechi jokhon amader toggle variable ba state ar value ta true hobe mane amader p tag  ar content gulo dekhabe tokhon amader - button ta show korbe and jokhon amader toggle variable ba state ar value ta false hobe mane p tag ar content ta dekhabe na tokhon + button show korbe */}
                    </button>
                </div>
                {toggle && <p>{desc}</p>}  {/* akhane ami short sarkit use korechi and bole diyechi jodi amader toggle variable ba toggle state ar value ta jodi true hoye tahole amader ai p tag ta print korbe karon ami toggle ar pore && aita mane and operator ta use korechi ai and oprerator tar 2 pash ar contdition ta true na hole kichu read kore na and print ooo kore na jodi amader toggle variable ba state ar value ta false hoy tahole && aita mane and operator ta amader oonno side ar condition ta ke read ooo korbe na and print ooo korbe na */}
            </article>
        </div>
    )
}

export default FAQ