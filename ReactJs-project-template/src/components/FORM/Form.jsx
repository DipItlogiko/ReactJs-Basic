import React, { useState } from 'react'     ///akhane amder react module ar moddhe theke React and useState Hook ta ke import korechi karon amra amader Functional Component ar moddhe state use korbo tai akhane react module theke useState Hook take import korechi...and amader react module  ar moddhe babol name akta compailer thake ai compailer ar kaj hocche amader jsx file ar moddhe joto html code thakbe oi code guloke javascript aaa compaile korbe..
import style from './form.module.css'  ///akhane ami amader ai form take degine korar jonno akta css file create kore oi file ar moddhe kichu degine korechi and oi css  file take ami aikhane import korechi

function Form() {   ////akhane amra Functional Component create korechi
    const [name, setName] = useState('')    ///akhane ami Functional Component ar moddhe state use korechi useState Hook ar maddhome and ai useState ar moddhe ami '' empty string diye diyechi mane amder name variable tar value amader useState '' empty string diye inisalize kore diyeche and set name hocche amader akta function
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e) => {            /////jokhon kew amader form ar name field ar moddhe kichu likhbe tokhon amader onChange Event ta fire hobe and oi Event take amader ai function ta listen korbe...and ai e mane hocche Event bojhai
        setName((name) => name = e.target.value)    //// akhane amader setName() function take call korechi amder state ar value take update korar jonno and jemonta amra jani amra jokhon eee amader state ar value ke update korbo tokhon amader privious state ar value ar oopor vitti kore amader state take update kora uchit akhane amra tai eee korechi...(name) ar moddhe amader privious state ar value take pacchi and ai value ar opore vitti kore amra amder state take update korchi...and e.target.value aitar mane hocche amader event ar moddhe theke value take target korbe and oi  value take amader name ar moddhe store kore debe
    }

    const handleEmailChange = (e) => {
        setEmail((email) => email = e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword((password) => password = e.target.value)
    }

    const handleSubmit = (e) => {
        console.log('form is submitted')
        //console.log(name, email, password)
        let userInfo = {   //// jokhon amder form ar moddhe data diye kew form take submit korbe tokhon amader oi data gulo state ar moddhe giye update hoye jabe and ami akhane theke state ar data guloke akta variable ar moddhe store kore dicchi object aaakare...jemon amder state ar moddhe name  nam aa akta variable ache and email nam aa akta variable ache and password nam aa akta variable ache and state ar moddhe oi variable ar moddhe amader form ar datagulo store kore rakhchi 
            name : name,
            email : email,
            password : password
        }
        console.log(userInfo)
        e.preventDefault()  /// akhane e.preventDefault aita lekhar karon hocche amader form ta jokhon ee submit korbo tokon jeno form ta submit howar somoy reload ta hoy ba refresh na hoy ai submit howar somoy reload ba refresh take bondho kore diyechi aita dara e.preventDefault() function dara
    }

    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>   {/* jokhon amader ai form ar moddhe data fill kore submit button click korbe tokhon amader ai onSubmit event ta fire hobe and amader ai onSubmit Event take listen korbe amader ai  handleSubmit function ta */}
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={name} onChange={handleNameChange} required />  {/* akhane amader ai input field ar moddhe jodi kew kichu lekhe tahole amader onChange Event ta fire hobe and ai Event take listen korbe amader ai  handleNameChange function ta  and ai value={name} akhane  value ar moddhe jei name ta ache ai ta hocche amader state ar variable*/}
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={email} onChange={handleEmailChange} required />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} required />
                </div>

                <div className={style.formGroup}>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Form
