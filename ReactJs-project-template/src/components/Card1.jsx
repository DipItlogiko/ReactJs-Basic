import React from 'react' ////akhane amra react ke import korechi and ai react module ar moddhe amader babol nam aaa akta compailer ache jei compailer ar kaj hocche amader jsx file ar html code guloke javascript aaa compaile kora

function Card1(props) {
    /// akhane amra akta functional component create korechi...amra jani amader ReactJs ar moddhe amra 2 vabe Component likhte pari 1 hocche Functional Component and 2 holo amader Class component amra ai 2 tar moddhe jei kono ak vabe amra amader Component create korte pari
    //const { name, desc} = props; ///// amra aikhane amader props ar moddhe asha data guloke distructuring kore nite pari mane amader props ar moddhe theke data guloke vange ber kore niye ashte pari and amader ai distructuring ar khettre kichu bishoy mathai rakhte hobe ta holo jodi amader props ar moddhe data ta object aaakare ashe tahole amader { } curly braces use korte hobe variable rakhar jonno and jodi amader props ar value array aakare ashe tahole amader variable gulo [ ] ar moddhe rakhte hobe and amader variable gulor nam hobe amra jokhon amader component ke call kore data pass korechilam tokhon jei key ar moddhe amra amader data pass korechilam oi key ar nam ta aikhane { } ba [ ] ar moddhe likhe dite hobe....distructaring korar pore amader props.key_ar_nam aivabe likhte hobe na amra tokhon sorasori distructring kora variable ar nam boshiye debo... 
    return (
        ////amader ReactJs ar moddher return/render akta element receive kore tai jodi amra multiple elements amader return/render ar moddhe pass korate chai tahole amader oi multiple elements guloke <div></div> ba <></> ar moddhe rakhte hobe
        <div>
            <h1>{props.name}</h1>
            <h2>{props.desc}</h2>
        </div>
    )
}

export default Card1
