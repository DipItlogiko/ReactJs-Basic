/////======= UserDefined PropsType Example with Array =========//////

// import React from 'react' 

// import User from './components/User'

// function App() {
 

//   return (    
//       <div style={{ textAlign: "center" }}>
//         <h1>React-TypeScript</h1>

//         <User name="dip" age={20} isRegistered={false} lang={["Bangla" , "English" , "Hindi"]} />  {/* akhane amader User component take call kore props aakare kichu data pass korechi amder User component ar moddhe....and amader protita component file ar seshe .tsx diyechi karon ami ReactJs ar sathe TypeScript use korchi tai component ar sathe .tsx extention ta add kore diyechi tsx mane hocche type script xml */}
        
//       </div>
//   )
// }

// export default App


/////======= UserDefined PropsType Example with Object =========//////

// import React from 'react' 

// import User from './components/User'

// const user1 = { /////akhane ami akta object create korechi and ai object ar moddhe name,age,isRegistered,lang ai key gulor moddhe kichu data rekhechi and ai object take user1 variable ar moddhe store kore diyechi
//   name :"dip",
//   age : 20 ,
//   isRegistered : false ,
//   lang: ["Bangla" , "English" , "Hindi"],
// }

// function App() {
 

//   return (    
//       <div style={{ textAlign: "center" }}>
//         <h1>React-TypeScript</h1>

//         <User user={user1} />  {/* akhane amader User component take call kore props aakare amader user key ar moddhe user1 object take pass kore diyechi amder User component ar moddhe....and amader protita component file ar seshe .tsx diyechi karon ami ReactJs ar sathe TypeScript use korchi tai component ar sathe .tsx extention ta add kore diyechi tsx mane hocche type script xml ta chara jokhon amra jokhon kono object pass korbo kono component ar moddhe tokhon jei key ar moddhe amader object ta pass korbo oi key ar opore hover korle amader oi object ar moddhe jai key gulo ache oi key gulo soho amader key ar value gulor dataType ba PropsType ta dekhabe amra chile key ar opore hover kore amader object tar key ar dataType ba PropsType gulo copy kore niye amader oi component ar moddhe ai copy kor object ar datatype ba propstype gulo past kore dite pari jei component ar moddhe amra ai object take pass korchi oi component ar moddhe */}
        
//       </div>
//   )
// }

// export default App



/////======= UserDefined PropsType Example with Union =========//////
import React from 'react' 

import User from './components/User' 

function App() {
 

  return (    
      <div style={{ textAlign: "center" }}>
        <h1>React-TypeScript</h1>

        <User status="success" />  {/* akhane amader User component take call kore props aakare amader status key ar moddhe success string take pass kore diyechi amder User component ar moddhe....and amader protita component file ar seshe .tsx diyechi karon ami ReactJs ar sathe TypeScript use korchi tai component ar sathe .tsx extention ta add kore diyechi tsx mane hocche type script xml */ }
        
      </div>
  )
}

export default App


