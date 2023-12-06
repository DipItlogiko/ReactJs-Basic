////=============== onClick Event handlers/listener =================////

// import React, { Component } from 'react'

// class Index extends Component {

//     handelClick = () => {
//         console.log('button clicked')
//     }

//     render() {
//         return (
//             <div>
//                 <h1>hello</h1>
//                 <button onClick={this.handelClick}>click here</button>   {/* akhane jokhon ee amader button a click kora hobe tokhon amader onClick Event ta fire hobe and oi onClick Event take listen korbe amader handelClick ai function ta and ai function tar aage this lekhar karon hocche amra amader ai class component ar moddhe ai function take create korechi and ai this mane bojhai amader class take */}
//             </div>
//         )
//     }
// }

// export default Index

////=============== onChange Event handlers/listener =================////
import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            changedValue: '',  ///akhane amra state ar moddhe akta variable niyechi jar nam changedValue and ai variable ar value ta hocche empty
        }
    }

    changeHandler = (e) => {  ///jokhon ee amader onChange event ta fire hobe tokhon oi changes gulo amader e ar moddhe chole ashbe

        this.setState({   ////akhane amader state ar value take set kore diyechi ba update kore diyechi
            changedValue: e.target.value,
        })
         
        //console.log(this.state.changedValue) ///and aikhane ami 'e' ar moddhe theke 'target' korechi 'value' take
    }


    render() {
        const { changedValue } = this.state  ///akhane ami this.state ar moddhe theke distructuring korechi mane amader this.state ar moddhe theke data guloke venge ber kore niye ashechi and oi datatake ai changedValue variable ar moddhe store kore diyechi...akhane amader akta bishoy mone rakhte hobe je amader this.state ar moddhe jodi object aaakare data ashe tahole amader oi data theke data distructuring korar somoy amader variable take { } curly braces ar moddhe rakhte hobe and jodi amader this.state ar moddhe jei data gulo thakbe oi data gulo jodi array aakare ashe tahole amader oi data theke distructuring korar somoy amader variable take [ ] ar moddhe rakhte hobe...
        return (
            <div>
                <input type="text" onChange={this.changeHandler} />   {/* akhane jokhon ee amader input filed ar moddhe kichu lekha hobe tokhon amader onChange Event ta fire hobe and oi onChange Event take listen korbe amader changeHandler ai function ta and ai function tar aage this lekhar karon hocche amra amader ai class component ar moddhe ai function take create korechi and ai this mane bojhai amader class take */}
                
                <p>{changedValue}</p>
            </div>
        )
    }
}

export default index
