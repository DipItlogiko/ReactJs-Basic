import React from "react"
import { Navigate } from "react-router-dom"   ////// akhane ami jei ReactRouter package ta install korechi amader ai ReactJs project ar moddhe routing facility ta pawar jonno oi ReactRouter package ar moddhe theke ami Navigate take import korechi redirect ar kaj korar jonno

function Protected({ isLoggedIn , children }) {   //////akhane amader RoutesFile.jsx ar moddhe theke ami jei isLoggedIn state ar value take pass korechi props aakare oitake aikhane receive kore distructuaring kore niychi and children ar moddhe amader oi component ta ashbe jei component take ami RoutesFile.jsx ar moddhe theke pass korechi

    if(!isLoggedIn){  /////akhane jodi amader isLoggedIn state ar value ta flase hoy tahle amader ai if block ar moddhe thaka code ta execute hobe 
       return <Navigate to="/" replace />   /////akhane return korbe amader Navigete korbe / ai route aa
    }
   
    return children   ////jodi amader isLoggedIn state ar value ta true hoy mane jodi amader user ta login thake tahole amader children take return korbe and amra janai amader ai children ar moddhe akta component ache and oi component take return korbe
     
}

export default Protected