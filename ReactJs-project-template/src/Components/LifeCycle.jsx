import React,{ Component } from 'react'

/////======= Class Componet Ar LifeCycle Method Ar Moddhe 3 Ta Important Bishoy Hocche ===============/////
 
//  1. Mounting(mane jokhon amader component ta browser a load hoye jabe mane jokhon amder componet take amader browser ar moddhe dekhte pabo tokhon oitake bole Mounting)
     
//     constructor->render->componentDidMount (jokhon amra component Mount korbo tokhon ai vabe amader method gulo call hobe)

//  2. Updating(mane jokhon amader component ta update hobe tokhon oitake bole Updating)
  
//      state/props->shouldComponentUpdate->render->componentDidUpdate  (state/props ar value ta update hoyar sathe sathe amader shouldComponentUpdate method ta call hobe and ai shouldComponentUpdate method ta jodi true return kore tahole render method ta call hobe and  tar pore componentDidUpdate method ta call hobe)

//  3. Unmounting(mane jokhon amader component ta browser ar moddhe theke chole jabe ba amader componet ta unmount hoye jabe tokhon oitake bole Unmounting....and aita importent na tai aitar practice dekhano hoy ni)

// Note: amader ai Class Component ar LifeCycle ar ai bishoy gulo amara amader Functional Component ar moddhe useEffect() hook ta use kore khub easyly korte pari
class LifeCycle extends Component {

    constructor(props) {
        super(props)
        console.log("constructor")  /////amra amder browser ar moddhe giye inspact korle dekhte pabo amader class componet ta jokhon load hocche tokhon sobar aage amader constructor method ta call hocche tar pore amader render method ba function ta call hocche and tar pore amader componentDidMount function ta call hobe componetDidMount mane hocche jokhon amader component ta render hoye amader browser a show korbe tokhon amader componentDidMount ta call hobe...

        this.state = {
            count: 0,
        } 
               
    }

    componentDidMount(){  //// amra chaile api call dite pari ai componentDidMount ar moddhe
        console.log("componentDidMount") 
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }


    handleClick = () => {
        this.setState({count : this.state.count + 1})
    }
   

    render() {
        {console.log("rendered")}
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

export default LifeCycle
