import React from 'react'
import { FaFacebook, FaExpeditedssl, FaAlgolia } from 'react-icons/fa' ///akhane ami amader react icon take amader ReactJs project ar moddhe install korar pore(check README.md) amader google theke react icon diye search diye oi react icon website ar moddhe gele amra dekhte pabo oora shundor kore bole diyeche amra amader ReactJs project ar moddhe ki vabe amader icon gulo use korte pari..
import { TiArrowMaximiseOutline, TiAdjustBrightness } from "react-icons/ti"


function App() {
    return (
        <div>
            <h1>React App</h1>
            <h2>Welcome</h2>
            <h3>Dip</h3>
            <span>
                <FaFacebook className="icon" />  {/* akhane amader opore import kora icon guloke use korechi component jeivabe use kore oi vabe karon react icon use korar niyom aitai eee and amader ai icon ar moddhe ami akta className diye diyechi icon name and ai class name take dhore ami amader ai icon guloke degine korbo amader css ar maddhome */}
                <FaExpeditedssl className="icon" />
                <FaAlgolia className="icon" />
                <TiArrowMaximiseOutline className="icon" />
                <TiAdjustBrightness  className='icon'/>
            </span>
        </div>
    )
}

export default App
