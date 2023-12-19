/////=========== PropsType Practices 1 ==================//////

// import React from 'react'

// ////------- Props Type --------////
// import PropTypes from 'prop-types'

// //console.log(PropTypes)  /////akhane amra console.log kore dekhe niyechi console ar moddhe amder PropTypes ar moddhe ki ki type ache

// function User(props){
//     const { userName , userID } = props ///distructuring korechi props ar moddhe theke
//     return(
//         <div>
//             <p>{ userID }</p>
//             <h1>{ userName }</h1>
//         </div>
//     )
// }

// User.propTypes = {  ////akhane amder User component ar sathe propsType property ta add kore diyechi and { } curly braces ar moddhe amader User component ar moddhe jei props gulo ashbe tar data-type set kore diyechi
//     userName : PropTypes.string,  ///akhane amader User component ar moddhe jei props gulo ashbe oi props gulor props type set kore diyechi key value pair aaa amader userName ta hocche props and ai userName props ar value ta hobe string jeita ami aivabe likhechi PropTypes.string ...jodi amader ai userName props ar moddhe number aakre data ashe tahole amader browser ar console ar moddhe akta warning dekhabe je amader props ar moddhe data ashche number aakare kintu amra expect korchi string
//     userID : PropTypes.number

// }


// User.defaultProps = { ////akhane ami amader User component ar moddhe jei props gulo ashbe oi props ar  moddhe jodi kono data na ashe  tahole akhan theke amader props gulo default value niye nebe jemon ami akhane amader ak akta props ar default value ba data set kore diyechi...and jodi amader props ar moddhe data ashe tahole jei data gulo ashche props ar moddh oi data guloi amader show korbe tokhon r ai default value gulo nebe na amader props....
//     userName : 'default user name',
//     userID : 0,
// }

// export default User


/////============ PropsType Practice 2 ===============/////

import React from 'react'

////------- Props Type --------////
import PropTypes from 'prop-types'

//console.log(PropTypes)  /////akhane amra console.log kore dekhe niyechi console ar moddhe amder PropTypes ar moddhe ki ki type ache

function User(props){
    const { user } = props ///distructuring korechi props ar moddhe theke
    
    return(
        <div>
            <p>{ user.id }</p>
            <h1>{ user.name }</h1>
        </div>
    )
}

User.propTypes = {  ////akhane amder User component ar sathe propsType property ta add kore diyechi and { } curly braces ar moddhe amader User component ar moddhe jei props gulo ashbe tar data-type set kore diyechi
    
    user : PropTypes.shape({   ///akhane amader User component ar moddhe jei user props ta ashbe oi props ar  props type set kore diyechi key value pair aaa amader user ta hocche props and ai user props ar value ta hobe object jeita ami aivabe likhechi PropTypes.object.isRequired...jodi amader ai user props ar moddhe object aakre data na ashe tahole amader browser ar console ar moddhe akta warning dekhabe.....and shape ar moddhe bole diyechi amader user props ar moddhe jei object ta ashbe and oi object ar moddhe jei data gulo thakbe key and value pair aa oi key ar data-type gulo amra shape() ar moddhe { } carly braces ar moddhe set kore diyechi 
        name : PropTypes.string,
        id : PropTypes.number,
    }),

}

export default User