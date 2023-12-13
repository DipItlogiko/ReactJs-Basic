import React from 'react'

import Todo from './components/Todo'
import NewTodo from './components/NewTodo'

function App() {
    const handelChildData = (childData) =>{  /// amader NewTodo child component ar moddhe theke jei data ta ashbe  amader ai parent component ar moddhe oi data take receive korbe amader childData ai variable ta and ai variable ar value ta ami niche console ar moddhe print kore diyechi....
        console.log(childData)
    }
    return (
        <div>
            <NewTodo onHandelChildData={handelChildData} />  {/* akhane amader child component take call kore akta method pathano hoyeche props akare and ai method ar maddhome arma amader NewTodo child component ar moddhe theke amder ai parent component ar moddhe data niye ashbo */}
            <Todo title="ReactJs" />  {/* akhane amder child component ke call kore oi child componet ar moddhe data pathano hoyeche amader parent component ar moddhe theke */}
            <h2>dip</h2>
        </div>
    )
}

export default App
