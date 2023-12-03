const date = new Date;
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const Title = 'Hello Card';
const Desc = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, asperiores?';


///======= Functional Component =====///
function Card()   /// here i have created a function Component..as we know ReactJs has a 2 type of Component one is Class Based Component and another is Functional Component...and we should always give a Component name first letter Capital...as we given here our function component name Card
{
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