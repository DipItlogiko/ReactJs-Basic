// import React from 'react'

// function Child(props) {
//     return (
//         <div>
//             <h1>hello</h1>
//             <h2>{props.data}</h2>
//         </div>
//     )
// }

// export default Child

//////=========================== Passing data Child To Parent component(bottom to top) jehetu amader App component ta hocche amder Parent component and Child component hocche amder child component ===========================////

import React from 'react' 

function Child(props) {
    const data = 'i am form child component (Child)' //// amder child component ar moddhe amra jei data nam a variable take declear korechi and ai data variable ar moddhe amader akta string rekhechi ai variable ar value hishebe...kintu amra je amder Parents component ar moddhe data pathabo oi parents component take to ami aikhan theke call dey ni jodi amder oi parents component take call kortam tahole ami oi parents component ar moddhe props aakare data pathate partam...kintu jehetu ami amder child ar modde amder parents take call kori nai tai amader child component teke kono data parent component ar moddhe pass korte hole amder oi parent ar moddhe akta method diclear korte hobe amader child componet theke kono data received korar jonno...akhne  amader parent component ta hocce App componet and child component ta hocche amader Child component aita...
    props.onChildData(data)  /// akhane amra props ar moddhe jei onChildData method ta pacchi oi method ar moddhe ami aikhane amader data variable take pass kore diyechi
    
    return (
        <div>
            <h1>hello</h1>
            <h2>Dip</h2>
        </div>
    )
}

export default Child
