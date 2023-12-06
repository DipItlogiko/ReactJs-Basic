////=============== Amra Props aakare jei data ta pacchi oi data take amader Class Component ar moddhe use korchi ================//// 

// import React, { Component } from 'react' //// amader react module theke amra React ke import kore diyechi..and amader ai react module ar moddhe babol nam aaa akta compailer ache and ai compailer ar kaj hocche amader jsx file ar moddhe jei html ar code gulo thakbe oi code guloke javascript a compaile kora..

// class State extends Component {  /// akhane ami akta class component create korechi State nam aa and amader ai class component ar sathe ami Component class take extends kore diyechi jar fole amader Component class ar sob functionality gulo amader State class component ar moddhe chole ashbe and amader ai State class component ta amader oi functionality gulo use korte parbe...aije jei amader State class component ar sathe Component ke extends kore diyechi ai extends kore dewake  bole inheritance ba inherite kore dewa..and jehetu amader Class component ar moddhe props lekhar kono jaiga nei jemon ta amra amadr Functional Component ar moddhe likhtam function Dip(props) tai amader bujte hobe amader Class Component ar moddhe autometically amader oi props ta chole ashbe jodi amra amader class component take kothaw call kore or moddhe data pass kore dei tahole....jehetu amader Class component ar moddhe props lekhar jaiga nei and amader props ta autometically chole ashe amader class component ar moddhe tai  amader oi props take dhorar jonno amra just likhbo this.props.key_ar_nam mane jekhan theke amader Class Component take call kore oi component ar moddhe jei key ar moddhe amra data ta ke pass korbo oi key ar nam ta likhe dilei hoye jabe.... 
//     render() {
//         return (
//             <div>
//                 <h2>Dip</h2>
//                 <h3>From Faridpur</h3>
//                 <h4>Count:{this.props.count}</h4>  {/* akhane amra props akare data pacchi jar akta problem hocche amra jei data take pacchi oi data take just dekhte parbo kintu amra oi data take change korte parbo na...data change korar jonno amader State ar concept aa jete hobe */}
//             </div>
//         )
//     }
// }

// export default State

////================= Akhane amra State use korechi amader Class Component ar moddhe karon amra kono data ke  change korte chai ==============================////

import React ,{ Component } from 'react';  //// amader react module theke amra React ke import kore diyechi..and amader ai react module ar moddhe babol nam aaa akta compailer ache and ai compailer ar kaj hocche amader jsx file ar moddhe jei html ar code gulo thakbe oi code guloke javascript a compaile kora..

class State extends Component{    /// akhane ami akta class component create korechi State nam aa and amader ai class component ar sathe ami Component class take extends kore diyechi jar fole amader Component class ar sob functionality gulo amader State class component ar moddhe chole ashbe and amader ai State class component ta amader oi functionality gulo use korte parbe...aije jei amader State class component ar sathe Component ke extends kore diyechi ai extends kore dewake  bole inheritance ba inherite kore dewa...... 
   
   constructor(props) {     // state ar jonno amader ai constructor function ta lagbe 
        super(props)

        this.state = {         // and ai this.state ar moddhe amra jei koita variable declear korte chacchi oi koita variable ar nam amader likhe dite hobe 
            count: 0,
        }
   }

   handelIncrement = () =>      ///akhane amra akta function create korechi handelIncrement nam aaaa and aita hocche amader Es6 ar function lekhar niyom..
   {
       //   console.log("clicked")
       this.setState({
          count: this.state.count + 1
       })
           
   }

   handelDcrement = () =>
   {
      this.setState({
        count: this.state.count -1
      })
   }
   
    render(){
        const {count} = this.state  ///akhane amai amader this.state theke distructuring kore data take venge ber kore niyechi and count variable ar moddhe data take store kore diyechi ...tai amader ai state ar value take print koranor jonno amader r aita likhte hobe na this.state.count karon amra amader this.state theke oi count ar value take distructuring kore niyechi...amader distructuring korar somoy akta bishoy mathai rakhte hobe je jodi amader this.state ar moddhe data ta object aakare ashe tahole aamader oi  data ta distructuring korar somoy amader variable gulo ke { } curly braces ar moddhe rakhte hobe and jodi amader this.state ar moddhe data ta array akare ashe tahole amader oi data ta distructuring korar somoy amader variable gulo [ ] ar moddhe rakhte hobe
        return(  
            <div>  {/* render/return jehetu akta element receive kore tai jodi amara amder return/render ar moddhe multiple element likhte chai tahole amader oobossoi oi element guloke <div></div> ba <></> ar moddhe rakhte hobe */}
                <h2>Dip</h2>
                <h3>From Faridpur</h3>
                <h4>Count:{count}</h4>
                <button onClick={this.handelIncrement}>+</button> {/* akhane amader button ar sathe onClick Event add kore diyechi jokhon ee kew amader ai button ar moddhe click korbe ai onClick Event ta fire hobe and amader onClick event ar moddhe amra ai event take listen korar jonno akta function add kore diyechi jokhon kew amader ai button ar moddhe click korbe  onClick Event fire hobe and onClick Event fire howar sathe sathe amader handelIncrement function ta ai event take listen korebe and amader aikhane ai handelIncrement function take call korar somoy amra this.  diye ai vabe likhechi this.handelIncrement karon amader ai function ta amader ai class component ar class ar moddhe ache tai and ai this diye bojhano hocche amader ai Class Component ke*/}
                <button onClick={this.handelDcrement} disabled={count==0 ? true:false}>-</button>  {/* akhane disabled={count==0 ? true:false} .....  disabled ar maddhome amader ai button take disabled korechi and kokhon amader ai button ta disable hobe oitake tarnary operator ar maddhome bole diyechi jokhon amader count variable ar value 0 hobe tokhon amader disabled ta kaj korbe ba disabled ta true hobe and amader oi button ta disabled hoye jabe and jodi amader count variable ar value 0 ar theke boro hoy tahole false hobe mane amader disabled ta false hobe mane amader button ta disabled hobe na */}
            </div>
        );
    }
}

export default State
