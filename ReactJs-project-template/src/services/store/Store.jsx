import { counterReducer } from "../reducers/ButtonReducer"
import { IncrementCounter } from "../actions/ButtonAction"

/////store ar moddhe amader Reducer ar moddhe theke jei action type oonujayi logic oonujayi jei state ta update hoye ashbe oi updated state ta amader ai store ar moddhe chole ashbe
////store ar moddhe 3 ta important bishoy ache jemon:
// getState() = jar maddhome amra amder state ar obochtha amra dekhte parbo
// dispatch() = jar sahajje amra kono action ke dispatch korte parbo
// subscribe() = jar sahajje amra amader View ar sathe Store ke  subscribe korte parbo 


const { createStore } = require("redux") /////akhane amai redux javascript ar library theke createStore take niye ashchi store create korar jonno

///create store
const store = createStore(counterReducer) /////akhene amader createStore functon ke call kore bole diyechi akta store create koro and oi store ar moddhe  amader counterReducer ai function ar moddhe theke jei state ta updated hoye ashche oi state take sote kore rakho


store.subscribe(()=>{   /////akhane amra store ar moddhe theke subscribe method take call kore amder amader browser ar console.log ar moddhe state ar obochata dekhechi store.getState() ai method ta use kore
    console.log(store.getState())
})

///dispatch action
store.dispatch(IncrementCounter)  /////akhane amader store variable ar sathe dispatch method take call kore akta action ke dispatch korechi IncrementCounter