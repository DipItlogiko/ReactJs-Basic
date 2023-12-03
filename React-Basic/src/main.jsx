import React from 'react'
import ReactDOM from 'react-dom/client'
 

const root = ReactDOM.createRoot(document.getElementById('root'));   //// amader render korar aage amader ai element gulo jei HTML page ar moddhe giye render hobe oi page ar moddhe amader jei id ba class ta ahche mane oi HTML page ar moddhe ai jei jaiga take id ba class ar akta nam diye define kore diyechi oi id ar nam ba class ar nam diye ami akta root create korechi amader oi HTML page ar moddhe oi define kora id ba class porjonto jawar jonno amra aikhane akta route create korechi... 

const date = new Date;
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const Title = 'Hello Card';
const Desc = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, asperiores?';



root.render(
  
  <div>             {/* jokhon amader render function ar moddhe oonek gulo element thakbe tokhon oi element guloke amader <div></div> ba <></>  ar moddhe rakhte hobe */}
                  
    <h2 className='custom_style'>Welcome</h2>       {/* amra aivabe ooo amader style take add kore dite pari amader style take akta JavaScript variable  ar moddhe store kore then oi variable ar nam ta amader {} ai curly braces ar moddhe likhe diyechi */}
    
    <div className='card'>  
      <h3 className='cardTitle'>{Title}</h3>     
      <p className='cardDesc'>{Desc}</p>
      <p>{day + '/' + month + '/' + year}</p>
      <p className='cardFooter'>Lorem ipsum!</p>
    </div>

  </div>

);
   
 