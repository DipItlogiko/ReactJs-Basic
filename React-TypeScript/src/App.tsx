import React from "react";

import ButtonStyle from "./components/ButtonStyle";

const customStyle = { color : "green" , backgroundColor : "yellow"}

function App() {
  return(
    <div style={{ textAlign: "center" }}>
     <h1>style props</h1>  

     <ButtonStyle myStyle={{ color: "Red" }} /> {/* akhane amader ButtonStyle component take call kore myStyle key ar moddhe akta style pass kore diyechi props aakare amader ButtonStyle component ar moddhe */}   
     <ButtonStyle myStyle={ customStyle } /> {/* akhane ami ButtonStyle component take call kore myStyle key ar moddhe amader customStyle variable take pass kore diiyechi and ai customStyle variable ar moddhe amder kichu styling kora ache */}
    </div>
  )
}

export default App