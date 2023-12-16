import React from 'react'

function Todo({ userId , title }){  ////jehetu amader DtaFatch component ar moddhe theke amder ai Todo component take call kore sprade operate ar maddhome data take fatch kore then pass kora hoyeche tai amra aikhane sora sori amader object ar moddhe jei key gulo chilo oi key ar nam ta likhe dite pari aikhane jemon ami aikhane likhe diyechi amder protita object ar moddhe jei key na nam gulo ache oi gulo and jehetu object aakare amra data gulo pacchi tai amader object ar key guloke { } curly braces ar moddhe rekhechi
    return(
        <div>
            {userId} <br />
            {title}
        </div>
    )
}

export default Todo