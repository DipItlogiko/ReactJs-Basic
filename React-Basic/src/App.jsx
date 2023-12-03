import React from "react"
import Card from './components/Card'  /// here  we have imported our created Functional Component which is located into the src/components/Card.jsx....and another important things is we can give any name here 'Card', according our need but always remember whatever name you can give here but that name's first letter will be Capital...otherwise it's won't work..


function App()
{
    return(
        <div>  {/* jokhon amader return/render function ar moddhe oonek gulo element thakbe tokhon oi element guloke amader <div></div> ba <></>  ar moddhe rakhte hobe */}

           <h2 className='custom_style'>Welcome</h2>  {/* amra amader public/custom.css ar moddhe amader ai custom_style nam aa akta class ar degine korechi and jehetu aita amader .jsx file tai amader class take className likhte hobe ta chara aita kaj korbe na*/}      
           <Card Title="hello" Desc="this is the desc1"/>  {/* akhane amader Card component take call kore amra ai Card component ar moddhe data pass kore diyechi and ai key and value pair a jei data guloke ami pathiyechi ai data gulo amader Card component ta Props aaakare received korebe go to src/components/Card.jsx  */}

        </div>  
    )
}

export default App;