/////========== Use Ref in Class Component with Example =============/////
///NOTE: jemon ta amra dekhte parchi aita akta uncontrolled component karon amara amader form ar data guloke state ar maddhome handel na kore amra sora sori Ref ar maddhome form ar data gulo handel korchi..jei karone aita akta uncontrolled Component...amra sora sori aivabe korbo na mane amader form ar data gulo state chara handel korbo karon jodi amara aivabe kori mane Ref use kore sora sori Dom(Document Object Model) ke menupulate kori tahole amder performance issue hobe...amader uchit jotota somvob Dom(Document Object Model) ke sora sori menupulate na kora..

import React, { Component , createRef } from 'react' 

class UserForm extends Component {

    constructor(props) {
        super(props)

        this.userNameRef = createRef()  ////amra opore amder createRef ke import kore akhane amader userName input field ar jonno akta ref create korechi this.userNameRef ai nam aaa and ai variable ar moddhe amader createRef() method take define kore diyechi

        this.state = {

        }
    }

    handleSubmit = (e) => {  //// jokhon eeee amader form ta submit hobe tokhon eee onSubmit event ta fire hobe and amder oi onSubmit event take listen korbe amader ai function ta...
        e.preventDefault() ///submit howar sathe sathe browser ta bydefault vabe je reload ney oi take bondho kore diyechi
        console.log(this.userNameRef.current.value)  //// amder userName field ar moddhe jokhon kew kono value diye submit korbe tokhon oi userName field ar value take amra console ar moddhe dekhchi
        this.userNameRef.current.style.backgroundColor = "red"  ////amra chaile amader oi userName field take style ooo kore dite pari jemon ta amra korechi jokhon amder form ta submit hobe tar pore amader userName input field ar background color red hoye jabe...and amra chaile amader ai handleSubmit method ar moddhe amader form ar input field gulor jonno validation ooo korte pari ai Ref use kore
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="userName">UserName :</label>
                        <input type="text" name="" id="userName" ref={this.userNameRef} />  {/* akhane ref={this.userNameRef} aita diye amader this.userNameRef jeita ami opore create korechi tar sathe amader ai input field take connect kore diyechi */}
                    </div>

                    <div className="form-field">
                        <label htmlFor="password">Password :</label>
                        <input type="password" name="" id="password" />
                    </div>

                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default UserForm
