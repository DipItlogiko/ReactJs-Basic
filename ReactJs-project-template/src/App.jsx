import React from 'react'
import State from './components/State'

function App() {
    return (
        <div>
            <h1>Welcome</h1>
            {/* <State count="0" /> */}   {/* amra akhane amader State nam ar class component take call kore oi component ar moddhe data pass kore dicchi count key ar moddhe and ai pathano data take amader component props aakare receive korbe */}
            <State />
        </div>
    )
}

export default App
