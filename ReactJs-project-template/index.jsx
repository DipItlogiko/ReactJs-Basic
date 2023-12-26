const { createStore , applyMiddleware } = require("redux") /////akhane redux javascript library ar moddhe theke createStore take import kora hoyeche store create korar jonno and applyMiddleware take import kora hoyeche middleware use korar jonno
const { default: logger } = require("redux-logger")  ////amra jei redux-logger middleware ta install korechi oi middleware ar moddhe theke logger ke import korechi


// constent
const GET_PRODUCT = 'GET_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'

//state 
const initialProductState = {  //////akhane amra state create korchi 2ta tai oi state guloke akta object { } ar moddhe rekhechi and ai object { } take ami initialProductState ai variable ar moddhe store kore diyechi..ami chile joto khusi toto state ai object { } ar moddhe define kore dite pari
    products:["shoes","shart"],
    countProducts:2
}

//action
const getProduct = () => {   /////jehetu amder action take akta function ar moddhe rekhe return korchi tai ai getProduct function take bola hobe Action Creator Function.....amra jani amader action { } object ar moddhe lekha hoy and action ar moddhe 2ta jinish thake 'type' ai type ar moddhe amader action ar type  ta bole dei amader action type ta ki hobe and ai action  type ta amra akta variable ar moddhe define kore then oi variable ar nam ta akhene likhe dite hobe karon amader ai nam ta aabar amader Reduser ar moddhe likhe te hobe tai jeno amader speling mistek na hoy tar jonno amra amder action ar type ar nam ta akta variable ar moddhe store kore rakhbo and oi variable take use korbo and action ar moddhe 'payload' ooo thake and ai payload ar maddhome amra action ar moddhe theke Reducer ar moddhe data pass korte pari 
    return{
        type: GET_PRODUCT,
    }
}


const addProduct = (DATA) => {  ////ai addProduct action ta jokhon eee dispatch hobe tokhon ee oikhan theke amra akta data pabo and oi data take amder DATA variable receive korbe and payload ar maddhome amder Reducer ar moddhe pass kore diyechi amader ai DATA variable ar moddhe jei value ta ashbe oi value take
    return{
        type: ADD_PRODUCT,
        payload: DATA,
    }
}

//Reducer
const productReducer = (state=initialProductState , action) => {
  ////===amra cahile ai switch na bebohar kore if else diye oo korte partam check GitHub ReactJs Basic repository useReducer() hook branch===///
    switch (action.type) {
        case GET_PRODUCT:
            return{
                ...state,   ////akhane amader state ar moddhe ja ja ache sob niye ashe dekhabe karon ami state ar sathe spared oparator use korechi ...state
            }
            
        case ADD_PRODUCT:
            return{                
                products: [...state.products , action.payload], ////akhane ...state.products mane amader state ar moddhe jei products nam aa jei state ta ache oi state ar aager value ar sathe action ar payload theke jei data ta ashche  action.payload oi data ta amader ai products state ar sathe jog hoye jabe 
                countProducts: state.countProducts + 1  ////akhane amder countProducts state ar value ar sathe 1 jog hoye jabe
            }
    
        default:
            return state;  /////Reducer hocche akta pure function ...pure function mane hocche jei function input niye output kichu na kichu return kore tai jodi amder akhane kono action eee na hoy ba kono action na ashe tahole oooo amader state ar value ta return korbe karon amader Reducer function ta hocche pure function and ai pure function ar kaj hocche kichu na kichu return kora
    }
}
 
//store
const store = createStore(productReducer , applyMiddleware(logger)) //////akhane amader productReducer ar moddhe theke jei updated state ar value ta ashbe mane jokhon kono action dispatch hobe oi action ar type oonujayi amader Reducer ar moddhe jabe and amader Reducer ar moddhe theke state ta update hoye akhane chole ashbe and oi updated state ta niye akta store create korbe and store variable ar moddhe store kore debe and akhane ami applyMiddleware() ai method ar moddhe bole diyechi ami kon middleware ta use korbo....jemon ami akhane bole diyechi logger use korbo and ami middleware ar jonno redux-logger package take install korechi and ai file ar opore oitake import kore niyechi...and ai logger middleware ta amader previous state ,action, next state and action ta kokhon hoyechilo oi time ta dekhabe

store.subscribe(()=> { //// akhane ami store ar subscribe() method take call korechi karon subscribe() method ta amder store ar theke View ke update kore debe and amra dekhte pabo..
    console.log(store.getState())  ///akhane amader store ar getState() method take call korechi ai getState() method ar kaj hocche amader state ar oobochtha gulo dekhano jemon ami aikhane store.getState() take call kore amader store variable ar state ar obochtha ta dekhchi getState ar maddhome console ar moddhe 
})

store.dispatch(getProduct()) //// aikhane store ar dispatch() method take call kore akta action function ar nam pass kore diyechi and ai dispatch method ta amder oi pass kora action take dispatch korbe and oi action ta amader Reducer ar moddhe jabe and amader Reducer ar moddhe theke action type oonujayi amader state ar value take update kore store ar moddhe pass kore debe  
store.dispatch(addProduct("blazzer")) ////akhane ami addProduct() action take dispatch korar somoy akta data pass kore diyechi "blazzer" and ai data ta amader ai action function ta receive korbe and payload ar maddhome amader ai data take Reducer ar moddhe pass kore debe tar pore amder Reducer ar moddhe theke action ar type oonujayi amader state ta update hoye amader store ar moddhe chole ashbe 


 