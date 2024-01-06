
/////========== kichu builtIn dataType jemon String,Number,Boolean,Void , null aagulo chara oo amader r oo dataType ache =======//////

// import React from "react"

// function User(props: { name: string; age: number}) {   /////jehetu amader App.tsx ar moddhe theke amder ai User.tsx component ke call kore props aakare kichu data pathano hoyeche tai props diye oi data guloke ami receive korechi amader ai User.tsx component ar moddhe and props ar moddhe jei key gulo ashchee oi key gulor data type gulo akhane set kore diyechi { name: string; age: number} jodi amdaer props ar moddhe jei data gulo ashbe key value pair aaa oi key gulor jodi ami data type set kore na dei tahole amader error dekhabe...akhane ami jemon name key ar dataType set kore diyechi string tai jodi amader App.tsx component ar moddhe theke kew User.tsx component take call kore name key ar moddhe string chara oonno kono data pass kori tahole amader amader error dekhabe App.tsx component ar moddhe and oi error ar opore hover korle amra dekhte pabo je oi khane amader ki bug ba error ache 
//     return(
//         <div>
//             <h2>Users Management</h2>

//             <h3>{ props.name }</h3>
//             <p>{ props.age } years old</p>
//             <p>dip@gmail.com</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero quisquam quod, ex esse possimus at placeat architecto nobis dolorem.</p>
//         </div>
//     )
// }

// export default User

///// OR----------------------------------------------------
import React from "react"

type UserProps = {    //////akhane amader App.tsx component ar moddhe theke jei props gulo pass korechi amader ai User.tsx component ar moddhe oi Props guloke ami akhane  UserProps ar moddhe receive korechi akta object ar moddhe amader oi key guloke rekhechi jei key and value pair aaa amader App.tsx component ar moddhe thkeke amader ai User.tsx ar moddhe props aakara data pathiyechi oi key gulo ar nam diye bole diyechi amader ai key gulor moddhe jei data gulo ashbe oi data gulor dataType ki hobe
    name: string;  ////akhane amder name key ar moddhe jei data ta ashbe oi data ta oobosoi string hote hobe jodi amra string bade oono kichu pass kori tahole amader error dekhabe
    age: number; 
    isRegistered: boolean;
}

function User({ name , age , isRegistered }: UserProps) {   /////akhane amader UserProps ar moddhe jei object ta ache oi object ar moddhe theke ami name,age,isRegistered ai 3 ta ke distructuring kore ber kore niye ashechi jar fole amader rrr UserProps.name  UserProps.age ai vabe likhte hobe na sora sori name , age aivabe likhte parbo and jehetu UserProps ar moddhe amader object aakare data ache tai amra distructuring korar somoy { } curly braces ar moddhe rekhechi jodi amder UserProps ar moddhe [ ] array akare data thakto tahole amader distructuring korar somoy [ ] ar moddhe rakhte hoto amader key ar nam gulo
    return(
        <div>
            <h2>Users Management</h2>

            <h3>{ name }</h3>
            <p>{ age } years old</p>
            {isRegistered ? <p>Registered User</p> : <p>Unregistered User</p>} {/* akhane ternary operator use korechi jodi amder isRegistered ar value ta true hoy tahole amader Registered User print korbe and jodi amder isRegistered ar value ta false hoy tahole amader Unregistered User aita print korbe ...tarnary operator mane hocche jei operator ar 3 ta part thake */}
           
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero quisquam quod, ex esse possimus at placeat architecto nobis dolorem.</p>
        </div>
    )
}

export default User