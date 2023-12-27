/////======without React Redux=======///// 

// import React,{ useState } from 'react'

// function Counter() {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <h2>Counter App</h2>
//             <h3>Count : {count}</h3>
//             <button onClick={()=> {setCount((count)=>count + 1)}}>+</button>
//             <button onClick={()=> {setCount((count)=>count - 1)}}>-</button>
//             <button onClick={()=> {setCount(0)}}>reset</button>
//         </div>
//     )
// }

// export default Counter

///////==========with React Redux============///////

import React from 'react'
import { useSelector, useDispatch } from 'react-redux' /////akhane amader react-redux package ar moddhe theke useSelector Hook take import korechi amader main.jsx ar moddhe theke jei Store take amra golobally set kore diyechi oi Store ar value take access korar jonno and useDispatch hook ta use korechi amader kono action ke dispatch korar jonno

import { incrementCounterAction } from '../services/actions/CounterAction' ////akhane amader action guloke import korechi ai jehetu amader src/services/actions/CounterAction.jsx file ar moddhe theke amader action guloke shudhu export korechi tai ami akhane amader action guloke { } ar moddhe rekhechi....jodi ami amder action guloke src/services/actions/CounterAction.jsx file ar moddhe theke export default kortam tahole amader import korar somoy { } object ar moddhe amader ai action ar nam gulo likhte hoto ta tokhon amra sorasori amder action ar nam gulo likhte partam import korar somoy.....
import { decrementCounterAction } from '../services/actions/CounterAction'
import { resetCounterAction } from '../services/actions/CounterAction'

function Counter() {
    const count = useSelector((state) => state.count)  /////akhane amader useSelector() hook ta use kore amader main.jsx ar moddhe golobally set kora Store take access korchi amader state ar moddhe Store ar sob value gulo ashbe and oi value ar moddhe theke ami shudhu count state ar value take niyechi ba select korechi and oi count state ar value ta amader count variable ar moddhe store hoye jabe
    const dispatch = useDispatch()  /////akhane amader useDispatch() hook  ta ke  dispatch variable ar moddhe rekhe diyechi

    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count : {count}</h3>  {/* akhane amader count variable ar value ta show hobe */}
            <button onClick={()=> {dispatch(incrementCounterAction())}}>+</button>  {/* jokhon eee amaer + button aa click korbe amader ai incrementCounterAction() action ta dispatch hobe and amader ai action ar type oonujayi Reducer ar moddhe jabe and Reducer amader ai action ar type oonujayi logic handel kore state take update kore Store ar moddhe pathiye debe and ai Store ar moddhe jei updated state ar ar value ta thakbe oi value ta diye amader Store View ke update kore debe and amra dekhte pabo amder browser ar moddhe */}
            <button onClick={()=> {dispatch(decrementCounterAction())}}>-</button>
            <button onClick={()=> {dispatch(resetCounterAction())}}>reset</button>
        </div>
    )
}

export default Counter
