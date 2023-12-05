import React from 'react'
import Card1 from './components/Card1'
import Card2 from './components/Card2'

function App() {
    return (
        <div>
            <h1>Welcome</h1>
            <Card1 name="card1" desc="this is card1" /> {/* Functional Component ke call kore amra ai functional component ar moddhe kichu data pass kore diyechi */}
            <Card2 name="card2" desc="this is card2" />  {/* Class Component ke call kore amra ai class component ar moddhe kichu data pass kore diyechi */}
        </div>
    )
}

export default App
