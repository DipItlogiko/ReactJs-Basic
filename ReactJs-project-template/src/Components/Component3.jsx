import React from 'react'

import Component4 from './Component4'

function Component3(props){
    return(
        <div>
            <Component4 UserInfo={props.userinfo} />
        </div>
    )
}
export default Component3