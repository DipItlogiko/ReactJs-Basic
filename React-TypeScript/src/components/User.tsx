/////======= UserDefined PropsType Example with Array =========//////
// import React from "react"

// type UserProps = {    //////akhane amader App.tsx component ar moddhe theke jei props gulo pass korechi amader ai User.tsx component ar moddhe oi Props guloke ami akhane  UserProps ar moddhe receive korechi akta object ar moddhe amader oi key guloke rekhechi jei key and value pair aaa amader App.tsx component ar moddhe thkeke amader ai User.tsx ar moddhe props aakara data pathiyechi oi key gulo ar nam diye bole diyechi amader ai key gulor moddhe jei data gulo ashbe oi data gulor dataType ki hobe
//     name: string;  ////akhane amder name key ar moddhe jei data ta ashbe oi data ta oobosoi string hote hobe jodi amra string bade oono kichu pass kori tahole amader error dekhabe
//     age: number; 
//     isRegistered: boolean;
//     lang: string[] /////akhane amder lang key ar moddhe jei data ta ashbe oi data ta oobosoi string array hote hobe mane akta array thakbe and oi array ar moddhe string data thakbe jodi amader array ar moddhe number data pass kora hoy tahole amader error dekhabee amader App.tsx ar moddhe karon ami App.tsx ar moddhe theke amader User.tsx component take call kore data pass korechi
    
// }

// function User({ name , age , isRegistered , lang }: UserProps) {   /////akhane amader UserProps ar moddhe jei object ta ache oi object ar moddhe theke ami name,age,isRegistered,lang ai 4 ta ke distructuring kore ber kore niye ashechi jar fole amader rrr UserProps.name  UserProps.age ai vabe likhte hobe na sora sori name , age aivabe likhte parbo and jehetu UserProps ar moddhe amader object aakare data ache tai amra distructuring korar somoy { } curly braces ar moddhe rekhechi jodi amder UserProps ar moddhe [ ] array akare data thakto tahole amader distructuring korar somoy [ ] ar moddhe rakhte hoto amader key ar nam gulo
//     return(
//         <div>
//             <h2>Users Management</h2>

//             <h3>{ name }</h3>
//             <p>{ age } years old</p>
//             {isRegistered ? <p>Registered User</p> : <p>Unregistered User</p>} {/* akhane ternary operator use korechi jodi amder isRegistered ar value ta true hoy tahole amader Registered User print korbe and jodi amder isRegistered ar value ta false hoy tahole amader Unregistered User aita print korbe ...tarnary operator mane hocche jei operator ar 3 ta part thake */}

//             <p>Speaks:
//                 {lang.map((language, index)=> <span key={index}> {language} </span>)} {/* lang ar moddhe theke akta akta kore language amader language ar moddhe ashbe and protibar amder span ar moddhe giye print hobe and amader protita language ke unique korar jonno amra array ar index take use korechi and span ar moddhe key={index} diye bole diyechi amder array ar index number onujayi amader portita language ke unique korbe */}
//             </p>
           
           
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero quisquam quod, ex esse possimus at placeat architecto nobis dolorem.</p>
//         </div>
//     )
// }

// export default User


/////======= UserDefined PropsType Example with Object =========//////
import React from "react"

type UserProps = {    //////akhane amader App.tsx component ar moddhe theke jei object take  pass korechi user key ar moddhe amader ai User.tsx component ar moddhe oi object take ami akhane  UserProps ar moddhe receive korechi user hocche amader key ar nam jei key ar moddhe amader object take pass korechi amader App.tsx ar moddhe theke
    user: {
        name: string;  ////amader user key ar moddhe jei object ta pass korechi amader App.tsx ar moddhe theke oi object ar moddhe key ar moddhe jei data gulo ache oi data gulor dataType ba propsType gulo ami akhane set kore diyechi and ai dataType ba PropsType bade jodi oonno kono data pass kora hoy amader object ar key ar moddhe App.tsx ar moddhe theke tahole error dekhabe
        age: number;
        isRegistered: boolean;
        lang: string[];
    }
    
}

function User({ user }: UserProps) {   /////akhane amader UserProps ar moddhe jei object ta ache oi object ar moddhe theke ami name,age,isRegistered ai 3 ta ke distructuring kore ber kore niye ashechi jar fole amader rrr UserProps.name  UserProps.age ai vabe likhte hobe na sora sori name , age aivabe likhte parbo and jehetu UserProps ar moddhe amader object aakare data ache tai amra distructuring korar somoy { } curly braces ar moddhe rekhechi jodi amder UserProps ar moddhe [ ] array akare data thakto tahole amader distructuring korar somoy [ ] ar moddhe rakhte hoto amader key ar nam gulo
    return(
        <div style={{ border: "1px solid", margin: "0.5rem" }}>
            <h2>Users Management</h2>

            <h3>{ user.name }</h3>
            <p>{ user.age } years old</p>
            {user.isRegistered ? <p>Registered User</p> : <p>Unregistered User</p>} {/* akhane ternary operator use korechi amader user ar moddhe jei isRegistered ta ache jodi amder isRegistered ar value ta true hoy tahole amader Registered User print korbe and jodi amder isRegistered ar value ta false hoy tahole amader Unregistered User aita print korbe ...tarnary operator mane hocche jei operator ar 3 ta part thake */}

            <p>Speaks:
                {user.lang.map((language, index)=> <span key={index}> {language} </span>)} {/*akhane user ar moddhe jei  lang ta ache oi lang ar moddhe theke akta akta kore language amader language ar moddhe ashbe and protibar amder span ar moddhe giye print hobe and amader protita language ke unique korar jonno amra array ar index take use korechi and span ar moddhe key={index} diye bole diyechi amder array ar index number onujayi amader portita language ke unique korbe */}
            </p>
           
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero quisquam quod, ex esse possimus at placeat architecto nobis dolorem.</p>
        </div>
    )
}

export default User