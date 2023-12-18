import React from "react"

import User from "./User"


function Users(props){
    const { users } = props
    return(
        <div>
            <section className="users">
                {users.map((user) => <User key={user.id} {...user} onPassDataToParentComponentApp={props.onGetDataFromChildComponentUser} /> )}  {/* akhane amader users variable ar moddhe theke akta akta kore object ashbe user variable ar moddhe and ai user variable ar moddhe aasha protita object ke ami User Component ar moddhe pass kore dichhi and protita object User Component aaa pass korar somoy portita object ke unique kore dicci amader object ar moddhe jei id ta ache oi id oonujaeee key={user.id} and amader user variable ar moddhe protibar jei object ta ashbe oi object take ami sprade operator use kore object theke data guloke distructruing kore then amader User Component ar moddhe pass kore dicchi aivabe {...user} and jehetu amader user variable ar moddhe protibar akta akta kore object ashbe tai amra { } cruly barces ar moddhe amader Sprade operator take use korechi */}
            </section>
        </div>
    )
}

export default Users