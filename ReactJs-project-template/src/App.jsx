/////============== Fragment ==============////
// import React from 'react'

// function App(){
//     return(
//         <div>
//           <>   {/* akhane amra fragment use korechi akhane chile amra div oo use korte partam kintu div use korle amra jodi amder browse ar moddhe giye inspact kori tahole dekhte pabo amader html file ar moddhe jeikhane amader ai jsx ta load hocche oi khane nested div dekhte pabo and ami jodi fragment ar moddhe likhi tahole amra amader html file ar moddhe inspact kore dekhle dekhbo oikhane akta div ee dekhacche and jar moddhe amader element gulo ache */}
//             <h1>welcome</h1>
//             <p>dip</p>
//           </>
//         </div>
//     )
// }

// export default App

/////================ Another Way to use Fragment ===================/////

// import React, {Fragment} from 'react'

// function App(){
//     return(
//         <div>
//           <Fragment>   {/* akhane amra fragment use korechi akhane chile amra div oo use korte partam kintu div use korle amra jodi amder browse ar moddhe giye inspact kori tahole dekhte pabo amader html file ar moddhe jeikhane amader ai jsx ta load hocche oi khane nested div dekhte pabo and ami jodi fragment ar moddhe likhi tahole amra amader html file ar moddhe inspact kore dekhle dekhbo oikhane akta div ee dekhacche and jar moddhe amader element gulo ache */}
//             <h1>welcome</h1>
//             <p>dip</p>
//           </Fragment>
//         </div>
//     )
// }

// export default App

/////============== Another Way to use Fragment ===================/////

// import React from 'react'

// function App(){
//     return(
//         <div>
//           <React.Fragment>   {/* akhane amra fragment use korechi akhane chile amra div oo use korte partam kintu div use korle amra jodi amder browse ar moddhe giye inspact kori tahole dekhte pabo amader html file ar moddhe jeikhane amader ai jsx ta load hocche oi khane nested div dekhte pabo and ami jodi fragment ar moddhe likhi tahole amra amader html file ar moddhe inspact kore dekhle dekhbo oikhane akta div ee dekhacche and jar moddhe amader element gulo ache */}
//             <h1>welcome</h1>
//             <p>dip</p>
//           </React.Fragment>
//         </div>
//     )
// }

// export default App


/////================ Practical Example of Fragment =====================/////

import React from 'react'

import Table from './Component/Table'

function App(){
    return(
        <div>
          <Table />
        </div>
    )
}

export default App