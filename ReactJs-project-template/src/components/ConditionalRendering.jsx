////============= Conditional Rendering With IF Else =============================////

// import React, { Component } from 'react' //// jehetu ami akhane class component use korechi tai amader react module theke React and Componet ai 2 take import korechi...and amader react module ar moddhe akta babol nam aaa akta compailer ache ai compailer ar kaj hocche amader jsx file ar  moddhe joto html code thakbe oi html code guloke javascript aaa compaile korbe
// import HomePage from './Home'
// import LoginPage from './Login'

// class ConditionalRendering extends Component {  //akhane amra akta class component create korechi jar nam  ConditionalRendering and amader ai ConditionalRendering class component ar sathe amra Component class ke extends kore diyechi jar fole amader Component class ar moddhe jei functionality gulo ache oi functionality gulo amader ConditionalRendering class component ar moddhe chole ashbe...and amra ai je jei amader ConditionalRendering class component ar sathe Component class take extends kore diyechi ai extends kore dewake bole inherit kora ba inheritance kora...
//     constructor(props) {
//         super(props)

//         this.state = {
//             isLoggedIn: false,  ////akhane ami state ar moddhe akta variable create korechi and ai variable ar value diyechi false...and amader ai variable ar value ar opore vitti kore amader conditional rendering ta hobe
//         }
//     }

//     render() {
//         const { isLoggedIn } = this.state   ////akhane amader this.state ar moddhe jei data gulo ache oi data guloke distructuring kore mane this.state ar moddhe theke venge ber kore niye ashechi and ai variable isLoggedIn ar moddhe store kore diyechi..

//         if (isLoggedIn) {    ////akhane amader if check korbe amader isLoggedIn ar value ki true ki na jodi true hoy tahole amader if ar moddhe dhukbe and Home page take return korbe
//             return <HomePage />
//         } else {                  ////jodi amader isLoggedIn ar value ta false hoy  tahole else ar moddhe ashbe and    LoginPage take return kore debe
//             return <LoginPage />
//         }
//     }
// }

// export default ConditionalRendering



////============= Conditional Rendering With element variable =============================////

// import React, { Component } from 'react' //// jehetu ami akhane class component use korechi tai amader react module theke React and Componet ai 2 take import korechi...and amader react module ar moddhe akta babol nam aaa akta compailer ache ai compailer ar kaj hocche amader jsx file ar  moddhe joto html code thakbe oi html code guloke javascript aaa compaile korbe
// import HomePage from './Home'
// import LoginPage from './Login'

// class ConditionalRendering extends Component {  //akhane amra akta class component create korechi jar nam  ConditionalRendering and amader ai ConditionalRendering class component ar sathe amra Component class ke extends kore diyechi jar fole amader Component class ar moddhe jei functionality gulo ache oi functionality gulo amader ConditionalRendering class component ar moddhe chole ashbe...and amra ai je jei amader ConditionalRendering class component ar sathe Component class take extends kore diyechi ai extends kore dewake bole inherit kora ba inheritance kora...
//     constructor(props) {
//         super(props)

//         this.state = {
//             isLoggedIn: false,  ////akhane ami state ar moddhe akta variable create korechi and ai variable ar value diyechi false...and amader ai variable ar value ar opore vitti kore amader conditional rendering ta hobe
//         }
//     }

//     render() {
//         const { isLoggedIn } = this.state   ////akhane amader this.state ar moddhe jei data gulo ache oi data guloke distructuring kore mane this.state ar moddhe theke venge ber kore niye ashechi and ai variable isLoggedIn ar moddhe store kore diyechi..

//         let element  ///akhane ami akta variable create korechi element nam aa

//         if (isLoggedIn) {    ////akhane amader if check korbe amader isLoggedIn ar value ki true ki na jodi true hoy tahole amader if ar moddhe dhukbe and Home page take element variable ar moddhe store korbe
//             element = <HomePage />
//         } else {                  ////jodi amader isLoggedIn ar value ta false hoy  tahole else ar moddhe ashbe and    LoginPage take element variable ar moddhe store korbe 
//             element = <LoginPage />
//         }

//         return(     ////amader akta bishoy sobsomoy mone rakhte hobe je amra return ar moddhe kokhono if else sorasori use korte parbo na karon amra return ar moddhe amder jsx likhi tai jodi amra  sorasori amader return ar moddhe if else likhi tahole amader error dekhabe.....
//             <div>
//                 {element}      {/* akhan theke ami amader element variable take return kore dicchi */}
//             </div>
//         )
//     }
// }

// export default ConditionalRendering



////============= Conditional Rendering With ternary operator =======================////

// import React, { Component } from 'react' //// jehetu ami akhane class component use korechi tai amader react module theke React and Componet ai 2 take import korechi...and amader react module ar moddhe akta babol nam aaa akta compailer ache ai compailer ar kaj hocche amader jsx file ar  moddhe joto html code thakbe oi html code guloke javascript aaa compaile korbe
// import HomePage from './Home'
// import LoginPage from './Login'

// class ConditionalRendering extends Component {  //akhane amra akta class component create korechi jar nam  ConditionalRendering and amader ai ConditionalRendering class component ar sathe amra Component class ke extends kore diyechi jar fole amader Component class ar moddhe jei functionality gulo ache oi functionality gulo amader ConditionalRendering class component ar moddhe chole ashbe...and amra ai je jei amader ConditionalRendering class component ar sathe Component class take extends kore diyechi ai extends kore dewake bole inherit kora ba inheritance kora...
//     constructor(props) {
//         super(props)

//         this.state = {
//             isLoggedIn: true,  ////akhane ami state ar moddhe akta variable create korechi and ai variable ar value diyechi false...and amader ai variable ar value ar opore vitti kore amader conditional rendering ta hobe
//         }
//     }

//     render() {
//         const { isLoggedIn } = this.state   ////akhane amader this.state ar moddhe jei data gulo ache oi data guloke distructuring kore mane this.state ar moddhe theke venge ber kore niye ashechi and ai variable isLoggedIn ar moddhe store kore diyechi..

//         let element  ///akhane ami akta variable create korechi element nam aa

//         element = isLoggedIn ? <HomePage /> : <LoginPage />   /// akhane amader tarnary operator ta check korbe jodi amader isLoggedIn variable ar value jodi true hoy tahole amader HomePage take store kore debe amader element variable ar moddhe and jodi amader  isLoggedIn variable ar value false hoy tahole amader tarnary operator ta LoginPage take store kore debe amader element variable ar moddhe....ta chara amra jodi amader isLoggedIn ? <HomePage /> : <LoginPage /> ai take sorasori amader return ar div ar moddhe likhi tahole ooo kaj korbe.....kintu if else ke sorasori amra amader return ar moddhe likhte parbo na tahole amader akta error dekhabe ....karon amra amader return ar moddhe jsx code likhi jeita dekhte html ar moto kintu html na...

//         return(     ////amader akta bishoy sobsomoy mone rakhte hobe je amra return ar moddhe kokhono if else sorasori use korte parbo na karon amra return ar moddhe amder jsx likhi tai jodi amra  sorasori amader return ar moddhe if else likhi tahole amader error dekhabe.....
//             <div>
//                 {element}      {/* akhan theke ami amader element variable take return kore dicchi */}
//             </div>
//         )
//     }
// }

// export default ConditionalRendering


////=============== Conditional Rendering With Short Cerkit =======================////

import React, { Component } from 'react' //// jehetu ami akhane class component use korechi tai amader react module theke React and Componet ai 2 take import korechi...and amader react module ar moddhe akta babol nam aaa akta compailer ache ai compailer ar kaj hocche amader jsx file ar  moddhe joto html code thakbe oi html code guloke javascript aaa compaile korbe
import HomePage from './Home'
import LoginPage from './Login'

class ConditionalRendering extends Component {  //akhane amra akta class component create korechi jar nam  ConditionalRendering and amader ai ConditionalRendering class component ar sathe amra Component class ke extends kore diyechi jar fole amader Component class ar moddhe jei functionality gulo ache oi functionality gulo amader ConditionalRendering class component ar moddhe chole ashbe...and amra ai je jei amader ConditionalRendering class component ar sathe Component class take extends kore diyechi ai extends kore dewake bole inherit kora ba inheritance kora...
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true,  ////akhane ami state ar moddhe akta variable create korechi and ai variable ar value diyechi false...and amader ai variable ar value ar opore vitti kore amader conditional rendering ta hobe
        }
    }

    render() {
        const { isLoggedIn } = this.state   ////akhane amader this.state ar moddhe jei data gulo ache oi data guloke distructuring kore mane this.state ar moddhe theke venge ber kore niye ashechi and ai variable isLoggedIn ar moddhe store kore diyechi..

        
        return(     ////amader akta bishoy sobsomoy mone rakhte hobe je amra return ar moddhe kokhono if else sorasori use korte parbo na karon amra return ar moddhe amder jsx likhi tai jodi amra  sorasori amader return ar moddhe if else likhi tahole amader error dekhabe.....
            <div>
                { isLoggedIn && <HomePage /> }    {/* akhane amader isLoggedIn variable ar value ta jodi true hoy tahole amader HomePage ta return korbe karon ami aikhane ai ta && use korechi mane and use korechi jodi amder && mane And ar prothom condition ta true hoy tahole amader prorer condition ar moddhe jai mane ar &&  and ar 2 pasher condition eee match kote hobe ta chara oo kaj korbe na and aivabe render korakei bole short cerkit use kore conditionally render kora  */}   
                 
            </div>
        )
    }
}

export default ConditionalRendering