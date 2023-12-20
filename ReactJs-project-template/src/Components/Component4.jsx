import React from 'react'

function Component4(props){
    const { UserInfo } = props
    return(
        <div>
            <p>{ UserInfo.id }</p>
            <p>{ UserInfo.name }</p>
        </div>
    )
}
export default Component4