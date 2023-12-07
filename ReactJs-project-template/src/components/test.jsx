////=============== Use state in Class Component =================////
///--amra jani amader Class Component ar moddhe state use korar jonno kono Hook use kora lage na kintu functional component ar moddhe state use korte hole amader useState Hook ar help nite hoy--///
// import React, { Component } from 'react'

// class Test extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0,
//         }
//     }

//     handerIncrement = () => {
//         this.setState({
//             count: this.state.count + 1,
//         })
//     }

//     render() {
//         const { count } = this.state
//         return (
//             <div>
//                 <h2>Count: {count}</h2>
//                 <button onClick={this.handerIncrement}>Increment</button>
//             </div>
//         )
//     }
// }

// export default Test




////    AMRA CLASS COMPONENT AR MADDHOME STATE USE KORE JEI KAJ TA KORECHI SAME KAJ TA AMRA FUNCTIONAL COMPONENT AR MADDHE useState HOOK USE KORE KORECHI KHUB SOHOJE KONO this  AR JHAMELA CHARAI.....



////=================== Use state into the Functional Component by useState Hook ==================////
import React, { useState } from 'react'   ///akhane jehetu ami amader functional component ar sathe useState hook ta use korbo tai amader react module ar theke React and useState hook take import korechi

function Test() {                ////aita hocche amader akta Functional Component
    const [count, countSet] = useState(0)       ////akhane  ami const diye variable diclear korechi count nam aa and tar porer ta hocche amader function akhane amai amader function ar je kono akta nam diye dite pari jemon ai akhane amader function ar nam diyechi countSet and tar pore amra amader useState Hook take call kore or moddhe akta initial akta value diye diyechi 0;

    const handelIncrement = () => {    ///akhane amra akta Es6 ar akta function likhechi..
        countSet(count + 1)     ////jokhon amader onClick Event ta fire hobe tokhon oi onClick event take listen korbe amader ai function ta and ai function a ashar pore amader countSet() function ta call hobe and ai countSet() ar moddhe ami bole diyechi amader proti count + 1 mane jokhon ee amader onClick Event ta Fire hobe tokhon amader ai handelIncrement function ta oi event take listen korbe and amader countSet function ke call kore amader count ar value ar sathe protibar 1 kore increment korbe
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handelIncrement}>Increment</button>  {/* akhane amader Increment button a kew click korle amader onClick event ta fire hobe and ai onClick Event take Listen korbe amader handelIncrement ai function ta */}
        </div>
    )
}

export default Test
