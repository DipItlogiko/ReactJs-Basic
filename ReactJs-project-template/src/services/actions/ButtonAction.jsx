import { INCREMENT } from '../constants/ButtonReducer'
import { DECREMENT } from '../constants/ButtonReducer'
import { ADD_USER } from '../constants/ButtonReducer'

//// action ar moddhe muloto akta object thake and ai object ar moddhe amra 2 ta jinish niye kaj kori akta hocche 'type' ai 'type' ar moddhe amra bole dite pari amader action ar type ta ki hobe and r akta hocche 'payload' ai 'payload' ar moddhome amra data pass korte pari amader Reducer ar moddhe..and amra sobsomoy amader action guloke akta function ar moddhe rekhe dei and oi function take bole action creator

export const IncrementCounter = () => {
    return {
        type: { INCREMENT },
    }
}

const DecrementCounter = () => {
    return {
        type: { DECREMENT },
    }
}

const addUser = () => {
    return {
        type: { ADD_USER },
        payload : { name : 'dip' }, 
    }
}
