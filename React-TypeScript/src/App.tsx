// import React,{ useState } from "react";



// function App() {
//   const [count, setCount] = useState(0)  ////akhane amader useState() hook ar moddhe 0 diye diyechi tai amader ai count state ar dataType ta ba PropsType ta autometically number dhore nebe jodi ami useState() hook ar moddhe initial value string set kore dei tahole amader count state ar dataType ba propsType ta string set hoye jabe autometically and jodi useState() hook ar moddhe ture ba false dei tahole amader count state ar dataType ba propsType boolean set hoye jabe autometically...and jodi amder useState() hook ar moddhe 0 mane number diye amader count state take initialize kore dei tahole probortite jadi ami amader setCount function take call kore kono string diye amader count state ar value take update korte chai tahole amader error dekhabe karon ami initial value 0 diyechi tai amader count ar dataType ba propsType autometically number set hoye giyeche tai number chara amder ai count state ta oonno kichu receive korebe na ...and amra jodi amader state ar oopore hover kori tahole dekhte pabo amader state ar dataType ba propsType automet ki set hoyeche
//   return(
//     <div style={{ textAlign: "center" }}>
//       <h1>UseState Hook Props</h1>

//       <h2>Count : {count}</h2>  {/* akhane amader count state ar value ta amader dekhabe */}
//       <button onClick={()=>{setCount((count)=>count + 1)} }>Increment</button> {/* jokhon ee amader Increment button ar moddhe click kora  hobe tokhon amader onClick event ta fire hobe and ai onClick event take listen korbe amader ai inline functional approch and ai inline functional approch ta amader setCount function take call kobe and amaer count state ar privious value (count) ar opore vitti kore amader count state ar value ar sathe 1 jog kore amader count state ar value take update kore diyechi  and amra chaile ai kaj take inline functional approch ar maddhome na kore opore akta function create kore oi function ar nam ta onClick={ ar moddhe } likhe dite partam */}

//     </div>
//   )
// }

// export default App


/////========OR

// import React,{ useState } from "react";



// function App() {
//   const [count, setCount] = useState<string | number>(0) //////akhane amader useState() hook ar moddhe 0 diye amader count state ar dataType ba propsType take number diye set kore diyechi jei ta autometically set hoye jabe  and setCount function take call kore jodi kew number chara string diye amader coutn state take update korte chai tahole string diyeoo amader count state ar value take update korte parbe karon ami useState() hook ar moddhe amader count state ar value take 0 mane number diye initialize kore diyechi tai ai count state ar dataType ba propsType ta autometically number set hoye jabe kintu jokhon ami amader setCount function take call kore string dite amder count state ar value take update korbo tokhon amader string diye ooo amader count state ar value ta update hobe karon ami useState hook ar sathe <string | number> aita add kore diyechi mane akhane ami string union number aita likhe diyechi mane string ba number jeitai aaashuk ta keno oi string ba number diye amader count state ar value take update korte parbe 

//   return(
//     <div style={{ textAlign: "center" }}>
//       <h1>UseState Hook Props</h1>

//       <h2>Count : {count}</h2>  {/* akhane amader count state ar value ta amader dekhabe */}
//       <button onClick={()=>{setCount( 'dip')} }>Increment</button> {/* jokhon ee amader Increment button ar moddhe click kora  hobe tokhon amader onClick event ta fire hobe and ai onClick event take listen korbe amader ai inline functional approch and ai inline functional approch ta amader setCount function take call kobe and amaer count state ar value take 'dip' ai string diye update kore debe karon ami useState ar pore <string | number> ai ta diye bole diyechi string ba number amder count state ta receive korbe kintu jodi ami akhane true ba false diye amader count state take update korar try kori tahole amader error dekhabe amder setCount function ar niche karon amader count state ta string and number receive korte parbe jaita amra <string | number> aita diye bole diyechi tai jodi amra akhae true and false mane boolean value diye amader count state ar value ta update korte chai tahole error dekhabe "|" aita mane hocche union */}

//     </div>
//   )
// }

// export default App


////==================== Another Example =====================///////

// import React,{ useState } from "react";

// type User = {   ////akhane amader object ar key gulor dataType ba propsType set kore diyechi
//   id: number; 
//   name: string;
//   email: string; 
// }

// function App() {
//   const [user , setUser] = useState<null | User>(null)  ////akhane amader useState hook ar sathe <null | User> null union User likhechi mane amader user state ar value ta null thakte pare aabar User ooo thakte pare kintu amra jodi ar baire kono kichu jemon kono string ba number ba boolean value diye amader user state take update korte chai amader setUser function take call kore tahole amader error dekhabe 

//   const handelAddUser = () => {    ////jokon amader AddUser button ar moddhe click kora hobe tokhon amader onClick event ta fire hobe and oi onClick event take handel korbe amader ai  handelAddUser function ta
//     setUser({id: 1, name: "DIP", email: "dip@gmail.com"})  ////akhane amader setUser function take call kore amader user state ar moddhe ai object ta diye amder user state take update kora hoyeche tar jonno amaer opore type User ar moddhe amder ai object ar key gulor dataType ba propsType set kore diyechi 
//   }

//   return(
//     <div style={{ textAlign: "center" }}>
//       <button onClick={handelAddUser}>AddUser</button> {/* akhane jokhon amader AddUser button ar moddhe click kora hobe tokhon amader onClick event ta fire hobe and amader ai onClick event take listen korebe amader handelAddUser ai function ta jei funtion take amra oopore create korechi amra chaile inline functional approch ar maddhome ooo ai kaj ta korte partam kono function create na kore  */}

//       <p>{user?.name}</p>  {/* akhane amader user state ta jehetu prothom aa null thakbe karon ami useState() hook ar moddhe null diye amader user state take initialize korechi tai and oi karone ami user? aita likhechi mane amader user ar moddhe kono data thakte ooo pare aaabar na ooo thakte pare and user?.name mane user state ar moddhe jei object ta ache oi object ar moddhe theke name key ar value ta dekhabe */}
//     </div>
//   )
// }

// export default App


/////==========OR

import React,{ useState } from "react";

type User = {   ////akhane amader object ar key gulor dataType ba propsType set kore diyechi
  id: number; 
  name: string;
  email: string; 
}

function App() {
  const [user , setUser] = useState<User>({} as User)  ////akhane amader useState hook ar sathe <User>  User likhechi mane amader user state ar value ta User ar moddhe theke ja ashbe shudhu tai eee hobe ar baite kono kichu diye jodi ami amader user state take update korte chai amader setUser() function take call kore jemon string , number , boolean mane true false ai dhoroner data diye jodi amader user state take update korte chai amader setUser() function take call kore tahole amader error dekhabe karon amader useState hook ar sathe <User> aita add kore diyechi mane amader User ar value diyei shudhu amader user state ta update hobe ta chara oono kono data diye amader user state ta update kora jabe na and useState() hook ar moddhe ami ({} as User) diye amader user state take initialize kore diyechi mane amader user state ar value ta porthom aaa empty {} object thakbe tai amra {} as User likhechi mane User ke {} empty string hishebe prothom aa amader user state ar moddhe initialize kore debe 

  const handelAddUser = () => {    ////jokon amader AddUser button ar moddhe click kora hobe tokhon amader onClick event ta fire hobe and oi onClick event take handel korbe amader ai  handelAddUser function ta
    setUser({id: 1, name: "DIP", email: "dip@gmail.com"})  ////akhane amader setUser function take call kore amader user state ar moddhe ai object ta diye amder user state take update kora hoyeche tar jonno amaer opore type User ar moddhe amder ai object ar key gulor dataType ba propsType set kore diyechi 
  }

  return(
    <div style={{ textAlign: "center" }}>
      <button onClick={handelAddUser}>AddUser</button> {/* akhane jokhon amader AddUser button ar moddhe click kora hobe tokhon amader onClick event ta fire hobe and amader ai onClick event take listen korebe amader handelAddUser ai function ta jei funtion take amra oopore create korechi amra chaile inline functional approch ar maddhome ooo ai kaj ta korte partam kono function create na kore  */}

      <p>{user.name}</p>  {/* akhane amader user state ta jehetu prothom aa null thakbe na empty {} object thakbe   karon ami useState() hook ar moddhe {} as User diye amader user state take initialize korechi empty {} object diye tai and oi karone ami user? aita likhi nai akhane karon amader user state na null thakbe na prothom akhan prothome amader empty {} object thakbe tai jehetu amader user state ta porthom aa null thakbe na tai amader aita check korar proyojon nei je amader user state ar moddhe data thakte ooo pare aabar na ooo thakta pare aitar maddhome user? */}
    </div>
  )
}

export default App