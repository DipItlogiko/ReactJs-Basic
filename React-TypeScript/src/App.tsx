import React from "react";

import UserDemo from "./components/UserDemo";


const users = [  ////akhane ami akta array ar moddhe 2 ta object rekhechi ami chaile ai array ar moddhe rr ooo object rakhte pari and aije je ami akta array ar moddhe object rekhechi aitakei bole array of object
  {
    id: 1,
    name: "Dip",
    email: "dip@gmail.com",
    age: 18,
  },
  {
    id: 2,
    name: "Dibbo",
    email: "dibbo@gmail.com",
    age: 25,
  },
]

function App(){
  return(
    <div style={{ textAlign: "center" }}>
      <h1>React-TypeScript</h1>

      <UserDemo  users={users} />    {/* akhane amader UserDemo.tsx component take call kore users array ta pass kore diyechi props aakare users key ar moddhe and amra jodi users key ar opore hover kori tahole amader ai array of object jeita amra pass korechi amader users key ar moddhe oi array of object ar dataType ba PropsType ta amra dekhte pabo and amra chaile oitake copy kore niye amader UserDemo component ar moddhe past kore dite pari */}
    </div>
  )
}

export default App