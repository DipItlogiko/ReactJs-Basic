const date = new Date;
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

 

///======= Functional Component =====///
//--Props--(check README.md)---//
// function Card(props)   /// here i have created a functional Component..as we know ReactJs has a 2 type of Component one is Class Based Component and another is Functional Component...and we should always give a Component name first letter Capital...as we given here our functional component name Card....and this Card() function will receive data by props .. when i will called this Card component and if i pass any data into the Card component those data will received by this props 
// {
//   return(

//     <div className='card'>  
//         <h3 className='cardTitle'>{props.Title}</h3>     
//         <p className='cardDesc'>{props.Desc}</p>
//         <p>{day + '/' + month + '/' + year}</p>
//         <p className='cardFooter'>Lorem ipsum!</p>
//     </div>

//   )
// }


//---Destructuring--(check README.md)---//
function Card(props)   /// here i have created a functional Component..as we know ReactJs has a 2 type of Component one is Class Based Component and another is Functional Component...and we should always give a Component name first letter Capital...as we given here our functional component name Card....and this Card() function will receive data by props .. when i will called this Card component and if i pass any data into the Card component those data will received by this props 
{
  const { Title, Desc} = props;  /// akhane ami Destructuring korechi mane amader props ar moddhe Title and Desc name 2 ta key ar moddhe value pass kore diyechi ami amader  src/App.jsx theke and akhane ami props ar moddhe theke data guloke  Destructuring korechi mane props ar moddhe theke amra dataguloke venge ber kore niye ashechi amader Destructuring ar maddhome and oi value guloke amader const { Title, Desc} ai 2ta variable ar moddhe store kore debe ai variable ar nam gulo amader same rakhte hobe jei nam aa amra amader component ar sathe data gulo pathabo oi nam ar sathe...and jodi props ar moddhe data gulo object aakare ashe tahole amder { } curly braces ar moddhe amder variable gulor nam likhte hobe...and jodi amader props ar moddhe data gulo array aakare ashe tahole amader [ ] ar moddhe amader variable ar nam gulo likhte hobe...
  return(

    <div className='card'>  
        <h3 className='cardTitle'>{Title}</h3>     
        <p className='cardDesc'>{Desc}</p>
        <p>{day + '/' + month + '/' + year}</p>
        <p className='cardFooter'>Lorem ipsum!</p>
    </div>

  )
}

///======= End Functional Component =======///




export default Card;   /// here we must need to export our Component by it's  name....otherwise we won't be able to use/import this Component into the other pages...