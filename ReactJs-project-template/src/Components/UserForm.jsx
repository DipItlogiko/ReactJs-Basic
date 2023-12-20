/////========== Use Ref in Functional Component with Example =============/////
///NOTE: jemon ta amra dekhte parchi aita akta uncontrolled component karon amara amader form ar data guloke state ar maddhome handel na kore amra sora sori useRef() hook ar maddhome form ar data gulo handel korchi..jei karone aita akta uncontrolled Component...amra sora sori aivabe korbo na mane amader form ar data gulo state chara handel korbo na karon jodi amara aivabe kori mane useRef hook use kore sora sori Dom(Document Object Model) ke menupulate kori tahole amder performance issue hobe...amader uchit jotota somvob Dom(Document Object Model) ke sora sori menupulate na kora..

import React,{ useRef } from 'react'

function UserForm(){

    const userNameRef = useRef()  ////akhane ami amader userName input field ke useRef() hook use kore directly access korte chacchi tai useRef() hook take amder ai variable ar moddhe userNameRef store kore diyechi and ai variable take amder Dom(Document Object Model) ar element ar sathe connect kore diyechi niche
    const passwordRef = useRef() 


   const handleSubmit = (e) => { /////jokhon eee amder form ta submit hobe tokhon eeee amader onSubmit event ta fire hobe and oi onSubmit event take listen korbe amder ai handleSubmit function ba method ta and ai "e" variable ba paramiter ar moddhe amader event ta receive korbe
     e.preventDefault()
    //  console.log(userNameRef.current.value) /////akhane amader
    //  console.log(passwordRef.current.value)
    ////OR----
    const Name = userNameRef.current.value
    const password = passwordRef.current.value
    console.log({Name , password})

    userNameRef.current.style.backgroundColor = "red"  ////akhane amader ai userNameRef jei input field ar sathe connect kora ache jokon amader form ta submit hobe tar pore amder oi input file ar background color ta red hoye jabe
    passwordRef.current.style.backgroundColor = "green"

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">UserName: </label>
                    <input type="text" id="userName" ref={userNameRef} />  {/* akhane amder ai ref={userNameRef} ar maddhome amader ref take connect kore diyechi  */}
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" ref={passwordRef} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default UserForm