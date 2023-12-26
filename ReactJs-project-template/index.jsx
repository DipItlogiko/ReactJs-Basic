// state - count:0
//actions - increment, decrement ,reset
//reduser - actions guloke handel  korbe
/// store - amader reduser ar moddhe theke jei updated state ar value gulo ashbe oi updated state ar value gulo amader ai store ar moddhe store  hoye jabe and ai store ar moddhe theke amader view ar moddhe update hoye jabe

///constants ------------------------   
const INCREMENT = 'INCREMENT'   ///akhane ami constants create korechi mane akta variable ar moddhe akta string ke store kore rekhechi jeno amader speling mistake na hoy mane jeno amader banan vul na hoy tar jonno kokhon amra amader action ar moddhe type likhbo tokhon amader oonek somoy speling mistake hote pare tai oi type ar string take amra aivabe akta variable ar moddhe store kore rekhe tar pore ai variable take amader action ar type ar moddhe likhe debo
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'


///define state----------------------
const counterInitialState = {  /////akhane amra count nam aaa akta state create korechi and ai state take akta { } object ar moddhe rekhe diyechi and ai { } object take ami counterInitialState variable ar moddhe store kore diyechi amra chaile ai { } object ar moddhe multiple state oo create korte partam 
    count: 0,
}

///action define-------------------------
const countIncrement = () => {   ////akhane amader action ke akta function ar moddhe rekhechi tai ai function ke bole action creator function
    return {
        type: INCREMENT,
    }
}

const countDecrement = () => {
    return {
        type: DECREMENT,
    }
}

const reset = () => {
    return {
        type: RESET,
    }
}

///define Reducer-------------------------------
const counterReducer = (state=counterInitialState , action) => { /////amader action gulo dispatch hoye action ar type oonujayi amaer Reduser state take update kore oi updated state take amader store ar moddhe pathiye debe
    ////===amra cahile ai switch na bebohar kore if else diye oo korte partam check GitHub ReactJs Basic repository useReducer() hook branch===///
      switch (action.type) {
        case INCREMENT:
           return {
            ...state,
            count : state.count + 1
           }

        case DECREMENT:
            return {
            ...state,
            count : state.count - 1
            }  
            
        case RESET:
            return {
            ...state,
            count : 0
            }    

        default:
            state; ////jehetu amader Reducer ta hocche akta pure function tai ai function ta kichu na kichu return korbei tai jodi amder akta ooo action dispatch na hoy tahole oooo amader ai Reducear function ta state ar value take return korbe...karon Reduser hocche akta pure function and ai pure function ar kaj hocche kichu na kichu return kora
    }
}

////Store---------------------------

const { createStore } = require('redux')   ////akhane amader 'redux javascript ar library' theke createStore take import korechi Store create korar jonno

const store = createStore(counterReducer)  /////akhane amader createStore(counterReducer) createStore() akta store create korebe counterReducer function ar moddhe theke jei state ta updated hoye amader ai store ar moddhe ashbe tar jonno akta store create korbe and oi store ke store nam ar ai variable ar moddhe store kore debe

store.subscribe(()=>{   /////akhane amader store variable ar sathe subscribe() method take call korechi jar fole amader store ta View ar moddhe update hoye jabe and amra dekhte pabo
    console.log(store.getState())  ////akhane console.log kore amder state variable ar sathe getState() method take call kora hoyeche amader ai store variable ar moddhe theke state ar obochtha ta amader dekhabe ai getState() method ta
})

store.dispatch(countIncrement())  ///// and akhane ami amader store variable ar sathe dispatch() method ta likhechi and ai dispatch() method ar moddhe action likhe diyechi tai amader ai dispatch() method ta amader action guloke dispatch korbe jei action gulo amra amader dispatch() ar moddhe pass kore debo oi action guloke
store.dispatch(countIncrement())
store.dispatch(countIncrement())
store.dispatch(countIncrement())
store.dispatch(countDecrement())
store.dispatch(reset())


///// if you don't understand this code please check README.md file

