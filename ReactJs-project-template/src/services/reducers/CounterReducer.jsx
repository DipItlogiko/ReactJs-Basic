import { INCREMENT } from '../constants/CounterConstant'  /////////akhane amader constants guloke import kore niye ashechi mane amader action ar type ar nam gulo jei file ar moddhe store kore rekhechi oi file ar moddhe theke oi variable guloke niye ashechi
import { DECREMENT } from '../constants/CounterConstant'
import { RESET } from '../constants/CounterConstant'

const initialCounterState = {  //////akhane amra state create korchi 1ta tai oi state take akta object { } ar moddhe rekhechi and ai object { } take ami initialCornterState ai variable ar moddhe store kore diyechi..ami chile joto khusi toto state ai object { } ar moddhe define kore dite pari
    count: 0,
}

const counterReducer = (state = initialCounterState, action) => {   //////Reduser hocche amader akta pure function...pure function mane hocche jokhon akta function kichu ta kichu return korbei tokhon oi function ke bole pure function....and jokhon amader kono action dispatch hobe tokhon oi action ta action ar moddhe theke action ar type oonujayi amader Reduser ar moddhe chole ashbe and Reducer ar moddhe theke amader action ar type oonujayi logic guloke handel kore state ta update hoye jabe and ai updated state ar value ta chole jabe amader store ar moddhe and store amader ai updated state ar value take View ar moddhe update kore debe.....amader Reducer ta state and action ai 2 ta jinish receive kore and state take ami amader ai initialCounterState variable ar value diye initialize kore diyechi and action ar moddhe amra 2 ta jinish pabo action.type jar moddhe amader action ar type ta pabe and action.payload jar moddhe amra amader action ar moddhe theke asha data ta pabo...
   ////===amra cahile ai switch na bebohar kore if else diye oo korte partam check GitHub ReactJs Basic repository useReducer() hook branch===///
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, /////akhane amader state ar moddhe ja ja ache sob akhane niye ashbe karon ami sprade oparator use korechi state ar sathe ...state
                count: state.count + 1, ///state ar moddhe theke just count state ar value ja chilo aage tar sathe  1 kore increment kore debe 
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }

        case RESET:
            return {
                ...state,
                count: 0,
            }

        default:
            return state /////Reducer hocche akta pure function ...pure function mane hocche jei function input niye output kichu na kichu return kore tai jodi amder akhane kono action eee na hoy ba kono action na ashe tahole oooo amader state ar value ta return korbe karon amader Reducer function ta hocche pure function and ai pure function ar kaj hocche kichu na kichu return kora
    }
}

export default counterReducer
