import React from 'react'

function User({id , name , email, phone , onPassDataToParentComponentApp}){  ////jehetu  amader ai User Component ke Users Component theke call kore amader ai User Component ar moddhe sprade operator use kore object ar dataguloke distucturing kore data ta pass kora hoyeche tai akhane amra oi object ar moddhe jei key gulo ache oi key ar nam gulo akhane likhe diyeci...jehetu amader Users Component ar moddhe theke object ke pathano hoyeche tai amra amader object ar key gulo ke { } curly braces ar moddhe rakhbo and jodi amader Users Component ar moddhe theke array pass kora hoto amader ai User Component ar moddhe  tahole amara oi take [ ] ar moddhe rakhtam   
    
   const handleDelete = (id) =>{
    onPassDataToParentComponentApp(id)
   }
    
    return(
        <div>
            <article className='user'>
                <h3>{id}</h3>
                <h3 className='user__name'>{name}</h3>
                <p className='user__email'>{email}</p>  
                <a className="user__phone" href={'tel:+' + phone}>{phone}</a>     
                <button onClick={()=>{handleDelete(id)}}>Delete</button>     
            </article>
        </div>
    )
}

export default User