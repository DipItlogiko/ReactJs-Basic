import React from 'react'
import { Link } from 'react-router-dom'  //// akhane amra jei ReactRouter package ta install korechi amader ai ReactJs project ar moddhe routing ar facility ta pawar jonno oi ReactRouter package ar moddhe theke Link take import korechi 

function Blog({ id, title , body }){    

    const truncateString = (str , num) => { ////amra ai function take create korechi tai aita akta user define function and niche ai function take call kore 2ta paramiter pass kora hoyeche body , 100 akhan theke body ar moddhe jei valu ta ache oi value ta amader str ar moddhe jabe and 100 ta amader num ar moddhe jabe  

        if(str.length > num){   ////akhane ami check korechi jodi amader str ar length ta number ar theke boro hoy tahole amader ai if blog ar moddhe jabe and ar moddhe thaka code take execute korbe
            return str.slice(0, num) + '...'  ////akhane return korbe amader str ar moddhe jei value ta ache oi value theke slice korbe mane katbe 0 theke oi num ar value porjonto and tar sathe "..." aita add kore debe
        }
        else{      /////jodi amader str ar value ta num ar value ar theke choto hoy tahole amader str tai return korbe 
            return str
        }

    }
    return(
        <div style={{paddingBottom: '10px'}}>
           <article>
             <h3>{title}</h3>
             <p>{truncateString(body , 100)}</p>  {/* akhane ami akta function opore create kore oi function take call kore oi function ar moddhe 2ta paramiter pass kore diyechi body , 100  */}
             <Link to={title} state={{ id ,title, body }}>Learn More</Link>  {/* akhane jokhon eee amader Learn More button ar moddhe click kora hobe tokhon amader "to" ar moddhe jei title ar value ta thakbe oi value oonujayi amader oi route ar moddhe niye jabe App.jsx ar moddhe theke and ami state ar moddhe amder id title and body ar value ta oo pass kore diyechi and ai data gulo amader App.jsx ar moddhe theke  oi route ar moddhe pass hoye jabe and ai state={ } ar moddhe ami jei data gulo pass korchi object ar moddhe ai data guloke access korar jonno amader useLocation hook ta use korte hobe*/}
           </article>
           
        </div>
    )
}

export default Blog