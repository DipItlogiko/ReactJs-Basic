import React from 'react'

function Test() {
    const handleParentClick = (event) => {
        console.log('parent', event)
    }

    const handleChildClick = (event) => {
        event.stopPropagation()   ///// jehetu ami child ar moddhe  event.stopPropagation() aita likhechi tai amader Event Bubbling problem ta solve hoye jabe mane jokhon amader child ar event ta call hobe tokhon rr automatically amader parent ar event ta call hobe na...
        console.log('child', event)
    }

    return (
        <div style={{ backgroundColor: 'red' }} onClick={handleParentClick}>  {/* akhane jokhon amader div ar moddhe click kora hobe amader onClick event ta fire hobe and amader ai handleParentClick function ta amader ai onClick event take listen korbe kintu problem hocche jokhon amader ai parent element ar modde jei child element ta ache and ai child element take jokhon click kora hocche tokhon amder child element ar  event ta call howar pore aabar parent ar event ta oo call hocche autometically and ai problem takei bole Event Bubbling ai problem take solve korar jonno amder child ar event ta amader jei listener listen korche oi listener ar moddhe giye amader 'event.stopPropagation();' aita likhe dite hobe */}
            <h1>Welcome Everyone</h1>
            <button onClick={handleChildClick}>+</button>
        </div>
    )
}

export default Test
