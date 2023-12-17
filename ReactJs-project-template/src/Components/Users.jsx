import React from 'react'

import User from './User'

function Users(props){
    const { users } = props
    return(
        <div className="users">
            {users && users.map((user)=> <User key={user.id} {...user} />) }  {/* akhane amader users ar moddhe theke akta akta kore object amader user ar moddhe ashbe and protibar oi object guloke ami amader User component ar moddhe pass kore dicchi and ai data gulo ke unique korar jonno ami key{user.id} aita diye diyechi manu user ar ar moddhe jei id ta thakbe oi id ta oonu jayi amader ai data gulo unique hobe and tar pore amader user ar moddhe jei object gulo ashche oi object guloke ami sprade operator use kore object ar moddhe theke data guloke distructruing kore then amader User component ar moddhe pass kore diyechi ai vabe {...user}*/}
        </div>
    )
}

export default Users