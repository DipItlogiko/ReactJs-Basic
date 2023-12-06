import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }

        //this.handelClick = this.handelClick.bind(this) ///akhane ami this likhechi karon amra ai function take amader class ar moddhe likhechi tai and ai this mane bojhai amader class take...jodi amader Event binding kortei eee hoy tahole amra ai vabe korbo ...karon ai vabei aita kora hoy constructor method ar moddhe
    }

    handelClick() { ////jehetu amader ai handelClick function ta amader onClick event take listen koreche tai jodi ami ai function take Es6 ar function na likhe sadharon akta function likhtam tahole amra ai error ta face korbo 'Uncaught TypeError: Cannot read properties of undefined (reading 'setState')' and ai error ta solve korar jonno amader binding kore dite hobe amra chaile amader onClick(ar moddhe listener jei junction take likhi oi function ar sathe .bind(this) likhe dite pari tahole amader error ta chole jabe and button ar moddhe click korle sob thik thak kaj korbe...and r akta way hocche amader constructor ar moddhe ooo bind kore dite pari and aitai hocche recommended way amader event binding korar jonno......kintu ami jodi Es6 ar niyom oonujayi amader function take create kori tahole amader ai event binding ar jhamelata pohate hobe na Es6 aa amra ai vabe function likhi 'handelClick = () =>{}' jodi amra amder function take ai vabe Es6 ar moto kore likhi tahole amader binding ar eeto jhamela pohate hobe na and kota theke ooo amader .bind(this) aita likhte hobe na )
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handelClick.bind(this)}>increase</button>
            </div>
        )
    }
}

export default EventBinding
