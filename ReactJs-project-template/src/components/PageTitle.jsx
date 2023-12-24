import React from "react"
import { Helmet } from "react-helmet" /////amader page ar title mane amader browser ar tab ar moddhe jei nam ta dekhte pai oi nam take show korar jonno amader ai ReactJs project ar moddhe amra akta npm package install korechi jar nam helmet and oi helmet package ar modhhe theke Helmet take import korechi

function PageTitle(props){
    const  { titleName }  = props
    return(
        <div>
            <Helmet>  {/* akhane amder Helmet ar moddhe amader props ar moddhe theke title ar jei valu ta ashbe oi value ta diye amader page ar title set kore akhan theke return kore debe amader ai Title functional Component ta */}               
                <title>{ titleName }</title>
            </Helmet>
        </div>
    )
}

export default PageTitle