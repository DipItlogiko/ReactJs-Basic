import React from 'react'
import ReactDOM from 'react-dom/client'
 

const root = ReactDOM.createRoot(document.getElementById('root'));   //// amader render korar aage amader ai element gulo jei HTML page ar moddhe giye render hobe oi page ar moddhe amader jei id ba class ta ahche mane oi HTML page ar moddhe ai jei jaiga take id ba class ar akta nam diye define kore diyechi oi id ar nam ba class ar nam diye ami akta root create korechi amader oi HTML page ar moddhe oi define kora id ba class porjonto jawar jonno amra aikhane akta route create korechi... 

const title = 'Home Page';   //// akhane ami javascript ar akta variable define korechi title nam aaa and ai title ar value hocche Home Page

const date = new Date;
const fullDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(); 

root.render(
  // <h1>Welcome</h1>          ////ami jodi render ar moddhe aivabe 2 ta elemetn likhi tahole amader render function akta error throw korbe karon amader render method ta akta element receive kore kintu amara aikhane 2 ta element likhechi tai amra amader render function ar moddhe 2ta ba tar beshi element ooo pass korte pari kintu oi element guloke amader <div></div> ba <></> ar moddhe rakhte hobe tahole amader render function ta amader browser ar moddhe oi element guloke render kore debe
  // <h2>dip</h2>


  <div>             {/* jokhon amader render function ar moddhe oonek gulo element thakbe tokhon oi element guloke amader <div></div> ba <></>  ar moddhe rakhte hobe */}
    <h1>{title}</h1>              {/* akhane ami amader javascript ar title variable ar value take print koriyechi */}
    <h2>Welcome</h2>
    <h3>dip</h3>
    <h3>{fullDate}</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, asperiores? Corporis perspiciatis, officiis cupiditate ipsum minus sapiente, pariatur, expedita consequatur nisi voluptates nesciunt facere doloremque amet reprehenderit sed nemo asperiores.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam inventore porro in expedita delectus harum ea veritatis dolorem quisquam doloremque corporis ut optio, minus quidem soluta officiis distinctio aspernatur molestiae!</p>
  </div>
);
   
 