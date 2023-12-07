import React, { useState } from 'react'     ///akhane amder react module ar moddhe theke React and useState Hook ta ke import korechi karon amra amader Functional Component ar moddhe state use korbo tai akhane react module theke useState Hook take import korechi...and amader react module  ar moddhe babol name akta compailer thake ai compailer ar kaj hocche amader jsx file ar moddhe joto html code thakbe oi code guloke javascript aaa compaile korbe..
import style from './form.module.css'  ///akhane ami amader ai form take degine korar jonno akta css file create kore oi file ar moddhe kichu degine korechi and oi css  file take ami aikhane import korechi

function Form() {               ////akhane amra Functional Component create korechi
    
    // const [name, setName] = useState('')    ///akhane ami Functional Component ar moddhe state use korechi useState Hook ar maddhome and ai useState ar moddhe ami '' empty string diye diyechi mane amder name variable tar value amader useState '' empty string diye inisalize kore diyeche and set name hocche amader akta function
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    ///======= Opore amra 3 ta input field ar jonno 3 ta state niyechi alada alada kore kintu jodi amder form ar moddhe 10 ta ba tar theke oo beshi input thake pare tahole ki amra porer moto protita input field ar jonno akta akta kore state oporer oi vabe amra likhbo na ..amra useState Hook ar moddhe sorasori object use korbo =========////
    const [user,setUser] = useState({name: '', email: '', password: ''})  ////akhane amader 3 ta input field ar state take amader useState hook ar moddhe akta object aakare likhe diyechi and oi state gulor inicial value amra diyechi '' empty string...and amder useState Hook ar moddher object ta user variable ar moddhe giye store hobe..and setUser aita hocche amader function
    const { name, email, password} = user       ////jehetu amader user variable ar moddhe object aakare data ache tai ai user ar moddhe theke data ke distructuring kore mane data guloke amader user variable ar moddhe theke venge ber kore niye ashechi jehetu amader user variable ar moddhe object aakare data ache tai distructuring  korar somoy amader variable ar nam take { } curly braces ar moddhe rekhechi..jodi user ar moddhe array aakare data ashto tahole amra distructuring korar somoy variable guloke [ ] ar moddhe rakhtam

    // const handleNameChange = (e) => {            /////jokhon kew amader form ar name field ar moddhe kichu likhbe tokhon amader onChange Event ta fire hobe and oi Event take amader ai function ta listen korbe...and ai e mane hocche Event bojhai
    //     setUser({ name: e.target.value, email, password })    //// akhane amader setName() function take call korechi amder state ar value take update korar jonno and jemonta amra jani amra jokhon eee amader state ar value ke update korbo tokhon amader privious state ar value ar oopor vitti kore amader state take update kora uchit akhane amra tai eee korechi...(name) ar moddhe amader privious state ar value take pacchi and ai value ar opore vitti kore amra amder state take update korchi...and e.target.value aitar mane hocche amader event ar moddhe theke value take target korbe and oi  value take amader name ar moddhe store kore debe
    // }

    // const handleEmailChange = (e) => {
    //     setUser({ name, email: e.target.value, password })
    // }

    // const handlePasswordChange = (e) => {
    //     setUser({ name, email, password: e.target.value })
    // }

    ////========== Opore amader 3 ta input field ache tai amra 3 ta listener add korechi jodi amader input field oonek gulo thake tahole amader ai vabe akta akta kore oonek gulo listener create korte hobe tai amra oi vabe kaj korbo na mane protita input field ar jonno alada alada kore listener create korbo na tai amra aivabe amader listener gulo create korbo mane akta listener create korbo and ai akta listener diye sob input field ar jonno kaj korate parbo ==================////
    // const handelChange = (e) =>
    // {
    //     const filedName = e.target.name     ///akhane e.target.name diye amder input field ar name take dhorechi and oi name take amra fieldName ar moddhe store kore diyechi
    //     if (filedName === 'name') {
    //         return setUser({ name: e.target.value, email, password })
    //     }
    //     else if (filedName === 'email') {
    //         setUser({ name, email: e.target.value, password })
    //     }
    //     else{
    //         setUser({ name, email, password: e.target.value })
    //     }
        
    // }

    ////// OR ---(amra chaile if elseif else ai gulo use na kore  ooo khub sohoje ai kaj ta korte pari)------
    const handelChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })  //// akhane ami sperade operator ta use korechi....[e.target.name] akhane amder jei input field ar moddhe value dewa hobe oi input field ar nam ta chole ashbe amder e mane event theke tar pore akta clone hobe : tar pore e.target.value aita mane amder e mane even theke value guloke anbe and ai name : value guloke amader user variable ar moddhe jei object ta ache oi object ar moddhe add kore nebe
    }

    const handleSubmit = (e) => {
        console.log('form is submitted')
        //console.log(name, email, password)
     
        console.log(user)
        e.preventDefault()  /// akhane e.preventDefault aita lekhar karon hocche amader form ta jokhon ee submit korbo tokon jeno form ta submit howar somoy reload ta hoy ba refresh na hoy ai submit howar somoy reload ba refresh take bondho kore diyechi aita dara e.preventDefault() function dara
    }

    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>   {/* jokhon amader ai form ar moddhe data fill kore submit button click korbe tokhon amader ai onSubmit event ta fire hobe and amader ai onSubmit Event take listen korbe amader ai  handleSubmit function ta */}
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={name} onChange={handelChange} required />  {/* akhane amader ai input field ar moddhe jodi kew kichu lekhe tahole amader onChange Event ta fire hobe and ai Event take listen korbe amader ai  handleNameChange function ta  and ai value={name} akhane  value ar moddhe jei name ta ache ai ta hocche amader state ar variable*/}
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={email} onChange={handelChange} required />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={password} onChange={handelChange} required />
                </div>

                <div className={style.formGroup}>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Form
