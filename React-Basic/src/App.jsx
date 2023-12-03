import React from "react"
import Card from './components/Card'  /// here  we have imported our created Functional Component which is located into the src/components/Card.jsx....and another important things is we can give any name here 'Card', according our need but always remember whatever name you can give here but that name's first letter will be Capital...otherwise it's won't work..
import Data from './data.json'    //// amra aikhane Data ar jaigai jekono nam dite pari kintu jei nam eee dei na keno tar prothom ookhor boro hater dite hobe...

// function App()
// {
//     // console.log(Data)
//     return(
//         <div>  {/* jokhon amader return/render function ar moddhe oonek gulo element thakbe tokhon oi element guloke amader <div></div> ba <></>  ar moddhe rakhte hobe */}

//            <h2 className='custom_style'>Welcome</h2>  {/* amra amader public/custom.css ar moddhe amader ai custom_style nam aa akta class ar degine korechi and jehetu aita amader .jsx file tai amader class take className likhte hobe ta chara aita kaj korbe na*/}      
           
//          {/* akhane amader data.json file ar moddhe theke jei data gulo ashche oi data guloke ami opore Data ar moddhe store kore diyechi import korar somoy and ami oi data guloke akhane Card component ar moddhe pass kore dicchi and ai data ta amader Card component ar moddhe props aakhae jabe and amader component ta props ar moddhe akhan theke pathano data gulo pabe */}
//            <Card Title={Data[0].Title} Desc={Data[0].Desc} />    {/* akhane amader Card component take call kore amra ai Card component ar moddhe data pass kore diyechi and ai key and value pair a jei data guloke ami pathiyechi ai data gulo amader Card component ta Props aaakare received korebe go to src/components/Card.jsx and akhane amder Data[0].Title mane amader Data ar moddhe 0 index a jei datagulo ache oi data ar record theke Title key ar value ta amader aikhane pass korbe Card component ar Title key ar value hishebe */}
//            <Card Title={Data[1].Title} Desc={Data[1].Desc} /> 
//            <Card Title={Data[2].Title} Desc={Data[2].Desc} /> 
//            <Card Title={Data[3].Title} Desc={Data[3].Desc} /> 
//            <Card Title={Data[4].Title} Desc={Data[4].Desc} /> 
//            <Card Title={Data[5].Title} Desc={Data[5].Desc} /> 
//         </div>  
//     )
// }

////// OR------------------------------------------------------------------------------------------------------------------------
//// amra jodi ooporer oi niyome amader json file theke data aane oi vabe amader component ar moddhe pass kori tahole problem ta hocche amader json file ar moddhe joto gulo data thakbe protita data amader component ar moddhe pass koranor jonno amader component ke call korte hobe jodi amader json file ar moddhe 1 lakh data thake tahole amader 1 lakh bar component ke call korte hobe and oi component ar moddhe data pass korte hobe..tai amra oporer oitake aivabe for loop ar moddheooo korte pari....

// function App()
// {
//     let items = [];  ///akhane ami akta variable dicler korechi items name and ai items variable ar moddhe amader sob items thakbe.....
//     for(let x=0; x<Data.length; x++){    ///akhane ami for loop ar moddhe bole diyechi amader x=0; mane loop ta 0 theke shuru hobe and x<Data.length; mane amader x ta cholbe amader Data ar length theke kom data ar length mane bojhano hocche amader Data ar moddhe jei koita data ache take jodi amader Data ar moddhe 6 ta data thake tahole 5 bar cholbe amader ai loop tar pore amra x++ diye bole diyechi protibar 1 kore increment hobe
//         items.push(<Card  Title={Data[x].Title} Desc={Data[x].Desc}/>) ///akhane loop ar moddhe amader Card component ke call kore diyechi mane amader loop ta jotobar ghurbe amader Card component ta toto bar call hobe and card componet ar moddhe portibar Data ar index number oonujayi data ashbe and amader component ar key ar moddhe oi data gulo chole jabe and protibar ai process ta howar pore ami ai Card component ke push kore dicchi amader items array ar moddhe ..
//     }
    
//     return(
//         <div>  {/* jokhon amader return/render function ar moddhe oonek gulo element thakbe tokhon oi element guloke amader <div></div> ba <></>  ar moddhe rakhte hobe */}

//            <h2 className='custom_style'>Welcome</h2>  {/* amra amader public/custom.css ar moddhe amader ai custom_style nam aa akta class ar degine korechi and jehetu aita amader .jsx file tai amader class take className likhte hobe ta chara aita kaj korbe na*/}      
//            {items} 
          
//         </div>  
//     )
// }

////// OR -----(MAPPING)-----------------------------------------------------------------------------------------------------------------------------
////amra oporer 2 ta niyom dekhechi tar modde for loop diye amra jei vabe korechi ai vabe kora jai kintu amra amader real life project aa for loop use kore korbo na amra aikhetre Mapping use korbo..karon Mapping ta easy and ai Mapping ta sob jaigai use hoy tai amra Mapping tai eee use korbo kono json data ke amader component ar moddhe pass korar jonno...

// function App() {
//     let items = []; ///akhane amader sob items gulo store hobe

//     items = Data.map((item , index) => <Card  key={index} Title={item.Title} Desc={item.Desc} />)  ///akhane amader json file ar sob data Data ar moddhe ache and ai Data ar moddhe joto gulo data ache mane amader json file ar moddhe joto gulo data ache sob data index number onujayi akta akta kore data map mane maping hoye amader item ar moddhe ashbe and index mane hocche jei data ta amader item ar moddhe ashbe oi data tar index number ta amader index ar moddhe ashbe and ai index number ta ami amader component ke call kore key={index} aita bole diyechi jodi aita na kori tahole amader browser ar console ar moddhe 'Warning: Each child in a list should have a unique "key" prop.' ai warning ta dekhabe ai prop ke unique korar jonno ami akhane amader json file ar protita data ar index number diye amader protita props ke unique kore diyechi..tar pore amader Card component ke call kore tar moddhe Title key ar value  set kore diyechi amader Data ar moddhe theke akta akta kore jei data ashche oi data ar theke ba oi object ar theke 'item.Title' Title ar value take ami akhane pass kore dicchi amader Title key ar value hishebe amader Card component ar moddhe..... 

//     return (
//         <div>  {/* jokhon amader return/render function ar moddhe oonek gulo element thakbe tokhon oi element guloke amader <div></div> ba <></>  ar moddhe rakhte hobe */}

// //            <h2 className='custom_style'>Welcome</h2>  {/* amra amader public/custom.css ar moddhe amader ai custom_style nam aa akta class ar degine korechi and jehetu aita amader .jsx file tai amader class take className likhte hobe ta chara aita kaj korbe na*/}      
// //            {items} 
          
// //         </div> 
//     );
// }


///// ba amra ai MAPPING take ai vabe ooo likhte pari--------------------------------

function App() {      

    return (
        <div>  {/* jokhon amader return/render function ar moddhe oonek gulo element thakbe tokhon oi element guloke amader <div></div> ba <></>  ar moddhe rakhte hobe */}

            <h2 className='custom_style'>Welcome</h2>  {/* amra amader public/custom.css ar moddhe amader ai custom_style nam aa akta class ar degine korechi and jehetu aita amader .jsx file tai amader class take className likhte hobe ta chara aita kaj korbe na*/}      
            {Data.map((item , index) => <Card  key={index} Title={item.Title} Desc={item.Desc} />)} {/* akhane amader json file ar sob data Data ar moddhe ache and ai Data ar moddhe joto gulo data ache mane amader json file ar moddhe joto gulo data ache sob data index number onujayi akta akta kore data map mane maping hoye amader item ar moddhe ashbe and index mane hocche jei data ta amader item ar moddhe ashbe oi data tar index number ta amader index ar moddhe ashbe and ai index number ta ami amader component ke call kore key={index} aita bole diyechi jodi aita na kori tahole amader browser ar console ar moddhe 'Warning: Each child in a list should have a unique "key" prop.' ai warning ta dekhabe ai props ke unique korar jonno ami akhane amader json file ar protita data ar index number diye amader protita props ke unique kore diyechi..tar pore amader Card component ke call kore tar moddhe Title key ar value  set kore diyechi amader Data ar moddhe theke akta akta kore jei data ashche oi data ar theke ba oi object ar theke 'item.Title' Title ar value take ami akhane pass kore dicchi amader Title key ar value hishebe amader Card component ar moddhe.....*/} 
          
         </div> 
    );
}


export default App;