import React,{ useState , useEffect } from "react"
import { useParams ,useLocation } from "react-router-dom" ////// akhane amra jei ReactRouter package ta install korechi amader ai ReactJs project ar moddhe routing ar facility ta pawar jonno oi ReactRouter package ar moddhe theke useLocation Hook take import korechi dynamic routing ar jonno usePrames hook diye ooo amara dynamic routing korte pari kintu usePrames hook ar theke useLocation Hook use kore amra khub sohoje amader dynamic routing ar kaj korte pari.....

//import { blogsData } from "../Data/Data"  /////jehetu ami amader src/Data/Data.jsx ar moddhe theke akta variable ke shudhu export defalut na kore shudhu export korechi tai amader oi variable take { }curly braces ar moddhe rakhte hobe import korar somoy


function DynamicRouting(){
   // const { title } = useParams() ////ai useParams() hook ta amader App.jsx ar moddhe /blogs/:title ar moddhe theke title ar value ta  khuje ante help korbe and oi :title ar value ta ke ami { title } ar moddhe rekhechi........
    const location = useLocation() /////akhane amader src/Pages/Blog.jsx ar moddhe theke ami Link ar moddhe theke state={ } ar moddhe jei data gulo pass korechi oi data guloke access korar jonno amader useLocation() hook ta  use korte hobe ....and akhane amader useLocation() hook ar moddhe ja ja pacchi sob amra location variable ar moddhe store kore diyechi......amra chaile ai location variable ke console.log(location) kore dekhte pari browser ar console ar moddhe amra location variable ar moddhe ki ki pacchi .....amader ai location variable ar moddhe state ar moddhe amra data pabo
     

    // const [bodyData ,setBodyData] = useState('')  

    // useEffect(()=>{
    //    const blogData = blogsData.filter((blogData)=> blogData.title === title)

    //    setBodyData(blogData[0].body) //// jehetu amader ai blogData variable ar moddhe filter hoye akta array ar moddhe value thakbe and oi array ta amader ai blogData ar moddhe store hoye thakbe and oi array ar moddhe jehetu filter howar pore 1 ta data ee thakbe tai ami blogData[0] diyechi and oi data ar moddhe theke shudhu body ar value take niyechi and oi body ar value diye amader bodyData state ar value take update kore diyechi setBodyData() function take call kore
    // }, []) ///// akhane useEffect hook ta use kore anonymous function ar pore ami dependency add kore diyechi [] ......mane jokhon eee amader return ta render hobe prothombar tokhon eee amader ai useEffect Hook ta call hobe ak bar eeee karon ami useEffect hook ar moddhe anonimous function ar pore dependency add kore diyechi [] aita tai jokhon amader return ta prothom bar render hobe tokhon eee shudhu amader ai useEffect hook ta call hobe tar pore joto bar eee amader return ta render hok ta keno amader useEffect hook ta rr call hobe ta karon amra amder useEffect hook ar moddhe anonimous functon ar pore dipendency add kore diyechi [] tai
     
    return(
        <div>
           <h1>{location.state.title}Page</h1>
           <p>{location.state.body}</p>   

           {/* <p>{location.state.body.slice(0,500)}</p> */} {/* amra chaile amader location variable ar moddh jei state ta ache and ai state ar moddhe ar moddhe jei body ache and ai body ar moddhe jei value gulo ache oi value gulke ai vabe slice kore ba kete kete dekhate pari jemon ai khane amader location.state.body ar value ar moddhe theke 0 theke 500 ta carecter amader ai p tag ar moddhe dekhabe */}
           {/* <p>{location.state.body.slice(501,600)}</p> */}
        </div>
    )
}

export default DynamicRouting
