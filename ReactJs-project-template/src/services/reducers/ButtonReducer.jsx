import { INCREMENT } from '../constants/ButtonReducer'
import { DECREMENT } from '../constants/ButtonReducer'
import { initialCounterState } from '../../App'

//// Reducer hocche akta pure function ...pure function mane jocche je function input niye definetly akta output return korbe oi function ke pure function bole....Reducer ar kaj hocche amader ja ja logic ache sobkichu handel kore jei state ache oi state take update kora....amader Action ar type ar opore base kore Reducer amader state ke update kore debe and oi updated state ar value ta Store ar moddhe giye store hobe and Store amader View take change kore debe

export const counterReducer = (state = initialCounterState, action) => {
   ////===amra cahile ai switch na bebohar kore if else diye oo korte partam check GitHub ReactJs Basic repository useReducer() hook branch===///
    switch (action.type) {
        case INCREMENT:  ////jodi amader action type ta INCREMENT hoy tahole return ar modddhe jabe and amader state ar value take update kore debe
            return {
                ...state,  ////akhane ami state ar sathe sprade oparator diye state ar moddhe ja ja ache oi guloke distructuring kore niye ashechi and tar pore amra state ar moddhe thekhe count ar value ar sathe 1 jog kore diyechi 
                count: state.count + 1,
            }

        case DECREMENT:
            return{
                ...state,
                count: state.count - 1,
            }          

        default:
            state   /////jehetu Reducer hocche akta pure function tai ai function ta amader state ar value takei return korbe jodi amader INCREMENT ba DECREMENT kono action eee dispatch na hoy tahole amader ai state ar value take return korbe karon pure function kichu na kichu return kore tai...
    }
}


