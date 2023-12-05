import React, { Component } from 'react' ///akhane amai jehetu Class Component create korbo tai amader react ar sathe Component ke ooo import korte hobe

class Card2 extends Component {  ///akhane amra Class Component create korechi prothom aa class likhechi tar pore Component ar nam Card2 and tar pore amader import kora Component ke Extends kore diyechi amader class component ar sathe akhon amader Components ar moddhe jei functionality gulo ache sob amader Class  Component mane Card2 ar moddhe chole ashbe and extends korake bole inharit kora ba inharitance
    render() {   ///amra jokhon Class Component create korbo tokhon amader render() ar moddhe return take likhte hobe aita hocche amader Class Component ar syntax
        // const { name , desc } = this.props   ////// amra chaile amader props ar moddhe theke asha data take ami ai vabe distructuring kore nite pari tahole amader props ar value gulo amader this.props.key_ar_nam  ai vabe protibar likhte hobe na amra just this.props.name  na likhe sorasori name likhe debo distructuring korar pore
        return (  ////amader ReactJs ar moddher return/render akta element receive kore tai jodi amra multiple elements amader return/render ar moddhe pass korate chai tahole amader oi multiple elements guloke <div></div> ba <></> ar moddhe rakhte hobe
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.desc}</h2>
            </div>
        )
    }
}

export default Card2
