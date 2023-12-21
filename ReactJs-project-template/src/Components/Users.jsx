import React from 'react'

import User from './User'

function Users(props){
    const { usersInfo } = props
    return(
        <div>
            <section className='users'>
                {usersInfo.map((userInfo) => <User key={userInfo.id} {...userInfo} onGetDataFromChildComponentUser={props.onGetDataFromChildComponentUser} />)}
            </section>
        </div>
    )
}

export default Users