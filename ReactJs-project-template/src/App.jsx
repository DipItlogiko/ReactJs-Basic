import React from "react"
 
import Index from "./routes/Index" 
import './App.css'

function App(){
    return(
        <div style={{ textAlign: 'center' }}>
            <h1>CRUD app using ReduxToolkit</h1>            

            <Index />   {/* App.jsx ar moddhe amra shudhu amader Route guloke access korbo ta chara oonno kono kaj korbo na ....jemon ta amra akhane korchi*/}
             
        </div>
    )
}

export default App