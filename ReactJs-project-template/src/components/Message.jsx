/////================ Without useMemo Hook ====================//////
// import React,{memo} from "react"

// function Message(props){   
//     const { number , onGetDataFromChildComponentMessage } = props

//     let temNumber = 0       ////akhane amra akta variable niyechi temNumber nam aaa and oi variable ar value diyechi 0
//     for(let i=0; i < 5000000000; i++){  ///akhane ami akta For loop chaliyechi and ai for loop ta 0 theke suru hobe 5000000000 porjonto cholbe and protibar 'i++' 1 kore increment hobe 
//         temNumber++ ////akhane amader for loop ta joto bar cholbe toto bar amader temNumber ar sathe 1 , 1 kore increment hobe ba jog hobe 
//     }
    
//     console.log("Message Render") ///// jokhon amader ai Message Component ta render hobe tokhon amader console ar moddhe aita dekhabe Message Render
    
//     return(        
//         <div>
//            <h2>Number: {temNumber}</h2>  {/* akhane amader temNumber variable ar value ta akhane boshbe for loop ar maddhome calculate kore jei value ta pabo amader temNumber variable ar oi value ta akhane boshbe jokhon ai amader ai project ta run kore amader + button ar moddhe click korbo tokhon oita amader App.jsx component ar moddhe theke amader ai page ar moddhe chole ashbe then ai component take render korar somoy amader ai temNumber variable ar value take print korar somoy amader for loop ar caluculation ta hoye jawar pore amader temNumber ai variable ar value ta amader browser ar moddhe show korbe jar jonno amader oonek somoy nebe and jokon ee amai amader project ar + button ar moddhe click korbo proti bar eee amader same somoy nebe to ai calculation ar ai problem take solve korar jonno amra ReactJs ar builtin useMemo Hook ta use korte pari jei ta amra niche korechi  */}

//             <p>Send {number} messages</p>
//             <button onClick={onGetDataFromChildComponentMessage}>Increment Message Number</button>
//         </div>
//     )
// }

// export default memo(Message)


///////============With useMemo Hook===============////
import React,{memo , useMemo} from "react"

function Message(props){   
    const { number , onGetDataFromChildComponentMessage } = props

    const calculatedNumber = useMemo(() => { /////akhane amra useMemo Hook take use korechi and useMemo Hook ar moddhe akta anonimous function likhechi and oi anonimous function ar moddhe amader calculation ar kaj ta rekhe diyechi
        let temNumber = 0
        for(let i=0; i < 5000000000; i++){
           temNumber++
        }
        return temNumber  ////calculation ar pore amader ai temNumber ar value  value ta amader calculatedNumber variable ar moddhe store hoye jabe
    }, []) ////akhane amader useMemo Hook ar moddhe jei anonimous function ta ache oi anonimous function ar  pore amra dependency add kore diyechi aita [] mane jokhon amader ai Message component ar return ta  prothom bar render hobe shudhu tokhon eee amader ai useMemo Hook ta call hobe and calculation kore oi value ta amader calculatedNumber ai variable ar moddhe store kore rakhbe tai prothom aa jokhon amader ai component ta render hobe tokhon akta time nebe kintu pore amra joto bar eee amader project ar + button ar moddhe click kori na keno tokhon rr time nebe na     
    
    console.log("Message Render") ///// jokhon amader ai Message Component ta render hobe tokhon amader console ar moddhe aita dekhabe Message Render
    
    return(        
        <div>
           <h2>Number: {calculatedNumber}</h2>  {/* akhane amader calculatedNumber variable ar moddhe jei value ta set hoye thakbe amader ai component ta prothom bar render howar pore oi value tai eee akhane bose jabe and amader ai component ta prothom bar render howar somoy aktu somoy jebe karon amader ai component ta jokhon prothom bar render hobe shudhu tokhon tokhon eee amader useMemo() Hook ta call hobe karon ami amader useMemo hook ar moddhe dependency add kore diyechi and tokhon ee amader useMemo Hook ar moddhe calculation ta hobe and oi calculation ar result ta amader calculatedNumber variable ar moddhe store hoye thakbe and tar pore amader ai component ta joto bar eee render hok ta keno amader useMemo Hook ta r call hobe na just amder calculatedNumber ai variable ar value ta ashe aikhane boshe jabe tai ditiyo bar jokhon amader ai component ta call hobe and render hobe tokhon rr time nebe na render hote karon amader calculation korbe na ditiyo bar jokhon amader ai component ta render hobe*/}

            <p>Send {number} messages</p>
            <button onClick={onGetDataFromChildComponentMessage}>Increment Message Number</button>
        </div>
    )
}

export default memo(Message)