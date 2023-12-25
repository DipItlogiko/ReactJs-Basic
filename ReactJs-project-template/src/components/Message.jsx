import React,{memo} from "react"

function Message(props){   
    const { number } = props
    console.log("Message Render") ///// jokhon amader ai Message Component ta render hobe tokhon amader console ar moddhe aita dekhabe Message Render
    return(        
        <div>
            <p>Send {number} messages</p>
            <button onClick={props.onGetDataFromChildComponentMessage}>Increment Message Number</button>
        </div>
    )
}

export default memo(Message)