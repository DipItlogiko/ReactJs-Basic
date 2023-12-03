import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' /// here  we have imported our created Functional Component which is located into the src/App.jsx....and another important things is we can give any name here 'App', according our need but always remember whatever name you can give here but that name's first letter will be Capital...otherwise it's won't work..

const root = ReactDOM.createRoot(document.getElementById('root'));   //// amader render korar aage amader ai element gulo jei HTML page ar moddhe giye render hobe oi page ar moddhe amader jei id ba class ta ahche mane oi HTML page ar moddhe ai jei jaiga take id ba class ar akta nam diye define kore diyechi oi id ar nam ba class ar nam diye ami akta root create korechi amader oi HTML page ar moddhe oi define kora id ba class porjonto jawar jonno amra aikhane akta root create korechi... 


root.render( /// amra jei root create korechi oi root ar moddhe amader ai code guloke render korbe
  
  <App />    /// here i have called the Functional Component by it's name App 
);
   
 