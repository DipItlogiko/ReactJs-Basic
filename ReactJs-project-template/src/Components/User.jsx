import React from 'react'

function User({ id, name, email, phone }) {    ////jehetu amader ai User component ke Users componet ar moddhe call kore oi Users component ar moddhe theke data pass kora hoyeche sprade operator use kore object ar data guloke distructuring kore then amader ai User Componet ar moddhe pass kora hoyeche amader Users component theke tai amra sora sori amder object ar key ar nam gulo ke aivabe likhe diyechi {id, name , email, phone}....jehetu amader data ta object aakare ashce tai amara amader object ar key guloke { } carly braces ar moddhe rekhechi...
    return (
        <div>
            <article className="user">
                <h3>{id}</h3>
                <h3 className="user__name">{name}</h3>
                <p className="user__email">{email}</p>
                <a className="user__phone" href={'tel:+' + phone}>
                    {phone}
                </a>
            </article>
        </div>
    )
}

export default User
