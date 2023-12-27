import { INCREMENT } from '../constants/CounterConstant'   /////akhane amader constants guloke import kore niye ashechi mane amader action ar type ar nam gulo jei file ar moddhe store kore rekhechi oi file ar moddhe theke oi variable guloke niye ashechi
import { DECREMENT } from '../constants/CounterConstant'
import { RESET } from '../constants/CounterConstant'

export const incrementCounterAction = () => {   /////jehetu amder action take akta function ar moddhe rekhe return korchi tai ai incrementCounterAction function take bola hobe Action Creator Function.....amra jani amader action { } object ar moddhe lekha hoy and action ar moddhe 2ta jinish thake 'type' ai type ar moddhe amader action ar type  ta bole dei amader action type ta ki hobe and ai action  type ta amra akta variable ar moddhe define kore then oi variable ar nam ta akhene likhe dite hobe karon amader ai nam ta aabar amader Reduser ar moddhe likhe te hobe tai jeno amader speling mistek na hoy tar jonno amra amder action ar type ar nam ta akta variable ar moddhe store kore rakhbo src/services/constants and oi variable take use korbo and action ar moddhe 'payload' ooo thake and ai payload ar maddhome amra action ar moddhe theke Reducer ar moddhe data pass korte pari 
    return {
        type: INCREMENT,  ////akhane amader ai action ar type ta hocche increment
    }
}

export const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    }
}

export const resetCounterAction = () => {
    return {
        type: RESET,
    }
}
