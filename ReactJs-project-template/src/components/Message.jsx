// import React,{memo} from "react"

// function Message(){    
//     console.log("Message Render") ///// jokhon amader ai Message Component ta render hobe tokhon amader console ar moddhe aita dekhabe Message Render
//     return(        
//         <div>
//             <p>Send 0 messages</p>
//         </div>
//     )
// }

// export default Message


////////OR ---------------------------------
import React,{memo} from "react"

function Message(props){   
    const { number } = props
    console.log("Message Render") ///// jokhon amader ai Message Component ta render hobe tokhon amader console ar moddhe aita dekhabe Message Render
    return(        
        <div>
            <p>Send {number} messages</p>
        </div>
    )
}

export default memo(Message)