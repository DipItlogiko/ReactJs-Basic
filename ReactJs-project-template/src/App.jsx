////========= Passing data Parent to child component(top to bottom) jehetu amader App component ta hocche amder Parent component and Child component hocche amder child component ==================////

// import React from 'react'

// import Child from './State_Lifting/Child'

// function App() {
//     const data = 'Data from parent component (App)'
//     return (
//         <div>
//             <h1 style={{ textAlign: 'center' }}>Welcome</h1>

//             <Child data={data} />
//         </div>
//     )
// }

// export default App

/////=============== Receving data from the Child component ================////

import React from 'react'

import Child from './State_Lifting/Child'

function App() {
    const handelChildData = (childData) => {  ////akhane amader Child component theke jei data ta amara receive korbo oi data take receive korar jonno amra aikhane akta method diclear korchi and ai method ta amra amader child component ar moddhe pass kore diyechi props aakhare karon amader ai method ta amader child component theke data take niye ashbe amader Parent component ar moddhe
        console.log(childData)  ////amader child component ar moddhe theke jei data ta ashche oi data ta amader childData ai variable ar moddhe store hobe and ami ai variable take console aaa log kore dekhechi amader data ta thik thak vabe ashche ki na
    }

    return (
        <div>
            <h1>hello</h1>
            <Child  onChildData={handelChildData} />  {/* akhane ami amder method ta pass kore diyechi amder child component ar moddhe props aakare ai nam aaa onChildData  */}
        </div>
    )
}

export default App
