import React from 'react'

import User from './User'
// import { UsersContext } from '../UsersContext'
import { useUsersContext } from '../CustomHook/useUsersContext'


function Users(){
    //const { users } = useContext(UsersContext)  ////amader parent componet ar  moddhe ami jei Globla state ar value set kore diyechi oi value take access korte parbe amder ai App component ar ai child component ta ai oi global state ar value take consume ba access korar jonno amader  useContext hook ta oopore import kore nite hobe and tar pore amra jei context file ar moddhe jei context ta create korechi oi variable take oo import korte hobe amader oi file theke and ta pore amader useContext hook ar moddhe oi context file ar moddhe theke jei variable take import kore niye ashechi oi variable take pass kore dite hobe and jehetu amder ai UsersContext variable ta 2 ta jinish provide korche amader App component ar ai child component theke object aakare tai amder ai variable ar moddhe theke value guloke distructuring korar somoy amai oi value guloke { } curly braces ar moddhe rekhechi
    const { state ,dispatch } = useUsersContext() ////ai useUsersContext custom hook ta ami create korechi and ai hook ta amder parent ar moddhe theke ami jei state ar value take Global eeee set korechi oi state ar value take access korte sahajjo korbe 
    return(
        <div>
            <section className='users'>
                {state.UsersData.map((user) => <User key={user.id} {...user} />)}
            </section>
        </div>
    )
}

export default Users