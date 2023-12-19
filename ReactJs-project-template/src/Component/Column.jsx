import React from 'react'

function Column(props) {
    const { name , address } = props ///distructuring
    return (
        <>  {/* akhane jodi ami div dei tahole amader ai project take run kore inspact ar moddhe gele amra dekhte pabo amader table tr tag ar moddhe ai div ta dekhacche kintu aita kono valid syntax na ..ta ooo amader code ta kaj korbe kintu amra chaibo na amader code tar syntax ta invalid hok tai amra jehetu jani amader return/render function ta akta element accept kore tai amader multiple element guloke <div></div> ba <></> fragment ar moddhe rakhte hobe and aikhane amara div use korbo na karon Fragment use korbo <></>....ai Fragment use korle amader notun kore kono element create hoy na kintu jodi ami div likhtam tahole amader div element ta create hoto */}
            <td>{name}</td>
            <td>{address}</td>
        </>
    )
}
export default Column
