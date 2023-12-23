import React from "react"
import { useParams } from "react-router-dom" ////// akhane amra jei ReactRouter package ta install korechi amader ai ReactJs project ar moddhe routing ar facility ta pawar jonno oi ReactRouter package ar moddhe theke useParams Hook take import korechi amader route paramiter take access korar jonno.....

function User(){
    const { userID } = useParams()  /////akhane amader useParams hook ta amader route paramiter ta aane debe and kon route paramiter ta anbe aikhane ami bole diyechi { userID } karon amder oonek route  ar moddhei  route paramiter thakte pare jemon ami amader App.jsx ar moddhe theke ai /user/:userID  route ar paramiter ta ke access korchi useParams hook ar maaddhome
    return(
        <div>
           { userID }
        </div>
    )
}

export default User