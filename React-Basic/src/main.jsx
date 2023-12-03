import React from 'react'
import ReactDOM from 'react-dom/client'
import './custom.css'
 

const root = ReactDOM.createRoot(document.getElementById('root'));   //// amader render korar aage amader ai element gulo jei HTML page ar moddhe giye render hobe oi page ar moddhe amader jei id ba class ta ahche mane oi HTML page ar moddhe ai jei jaiga take id ba class ar akta nam diye define kore diyechi oi id ar nam ba class ar nam diye ami akta root create korechi amader oi HTML page ar moddhe oi define kora id ba class porjonto jawar jonno amra aikhane akta route create korechi... 
const title = 'Home Page';   //// akhane ami javascript ar akta variable define korechi title nam aaa and ai title ar value hocche Home Page
const date = new Date;
const fullDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(); 

//internel CSS
const custom_style = { 
    backgroundColor: 'purple',
    color: 'white',
    textAlign: 'center',
    fontSize: '5rem',    
}



root.render(
  // <h1>Welcome</h1>          ////ami jodi render ar moddhe aivabe 2 ta elemetn likhi tahole amader render function akta error throw korbe karon amader render method ta akta element receive kore kintu amara aikhane 2 ta element likhechi tai amra amader render function ar moddhe 2ta ba tar beshi element ooo pass korte pari kintu oi element guloke amader <div></div> ba <></> ar moddhe rakhte hobe tahole amader render function ta amader browser ar moddhe oi element guloke render kore debe
  // <h2>dip</h2>

  <div>             {/* jokhon amader render function ar moddhe oonek gulo element thakbe tokhon oi element guloke amader <div></div> ba <></>  ar moddhe rakhte hobe */}
    <h1>{title}</h1>              {/* akhane ami amader javascript ar title variable ar value take print koriyechi */}
    <h3 style={{color : 'red', fontSize : '3rem'}}>dip</h3>              {/* jokhon amra amader .jsx file ar moddhe style korbo tokhon amader sytle ar pore = dye amader {} dite hobe karon ami aikhane css use korchi tai and ai {} ar moddhe amader aabar akta {} mane curly braces dite hobe karon amader ai css gulo akta object aakare thakbe tai.. and amader CSS ar moddhe jai tag gulo emon font-size chilo oi guloke amader ai .jsx file ar moddhe ai vabe likhte hobe fontSize (camol case format aa) mane amader second letter ta capital latter aaa hobe and aita hocche amader in-line CSS*/}
    <h2 style={custom_style}>Welcome</h2>       {/* amra aivabe ooo amader style take add kore dite pari amader style take akta JavaScript variable  ar moddhe store kore then oi variable ar nam ta amader {} ai curly braces ar moddhe likhe diyechi */}
    <h3>{fullDate}</h3>
    <p className='External_css'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, asperiores?</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam inventore porro in expedita delectus harum ea veritatis dolorem quisquam doloremque corporis ut optio, minus quidem soluta officiis distinctio aspernatur molestiae!</p>
  </div>
);
   
 