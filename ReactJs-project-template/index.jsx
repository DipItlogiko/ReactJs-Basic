////////=========Multiple Reducers=========////////
///akhane amra 2ta Reducer create korbo

///productReducer : aakhane product related jei state gulo thakbe oi state gulo niye kaj korbe 

///cartReducer : aaakhane cart related jei state gulo thakbe oi state gulo niye kaj korbe


///////-----product Reducer-------//////
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
            return state;
    }
}
////amra amader 2 ta reducer ar jonno akta eee store use korbo jei ta amra niche korechi
//store
// const { createStore } = require("redux")

// const store = createStore(productReducer)

// store.subscribe(()=> {
//     console.log(store.getState())
// })

// store.dispatch(getProduct())
// store.dispatch(addProduct("blazzer"))


///////-----Cart Reducer-------//////
//constents
const GET_CART = "GET_CART"
const ADD_CART = "ADD_CART"


//state
const initialCartState = {
    cart:["blazzer"],
    totalCart:1,
}

//action
const getCart = () => {
    return{
        type: GET_CART,
    }
}

const addCart = (Data) => {
    return{
        type: ADD_CART,
        payload: Data,
    }
}

//Reduser
const cartReducer = (state=initialCartState , action) => {
    ////===amra cahile ai switch na bebohar kore if else diye oo korte partam check GitHub ReactJs Basic repository useReducer() hook branch===///
    switch (action.type) {
        case GET_CART:
            return{
                ...state
            }
            
        case ADD_CART:
            return{
                cart: [...state.cart , action.payload],
                totalCart: state.totalCart + 1
            }
    
        default:
            return state;
    }
}
///amra amader product Reducer and  Cart Reducer ar jonno akta eeee store create korchi
//store
const { createStore, combineReducers } = require("redux")  /////akhane amader redux javascript library ar moddhe theke createStore ke import korechi store create korar jonno and combineReducers ke import korechi amader 2ta reducer ke combine kora jonno

const rootReducer = combineReducers({   ////akhane combineReducers() method take call kore tar moddhe akta object define kore diyechi and ai object ar moddhe 
    productR: productReducer,    /////amader productReducer ke productR key ar moddhe store kore diyechi
    cartR: cartReducer, ////amader cartReducer ke cartR key ar moddhe store kore diyechi
})

const Store = createStore(rootReducer)   //////akhane amra akta store create korechi createStore() method take call kore and tar moddhe amader rootReducer ke pass kore diyechi...amader rootReducer ar moddhe amra 2 ta reducers ke combine kore diyechi karon amra sorosori createStore() ar moddhe 2 ta Reducer ke akbare likhte parbo na tai amra ai 2ta Reducer ke combine kore rootReducer variable ar moddhe rekhe diyechi and oi variable take akhane pass kore diyechi

Store.subscribe(()=> {  //////subscribe hocche amader store ar akta method jar maddhome amra amader store ar theke View ar moddhe amader update kore debe and amra dekhte pabo 
    console.log(Store.getState())   /////getState() hocche amader store ar akta method  jar maddhome amader state ar obochtha dekhte pari akhane amra amader console ar moddhe state ar obochta ta dekhabe node index.jsx command ta chalale
})

Store.dispatch(getCart())   /////dispatch() hocche amader store ar r akta method jar maddhome amra amader kono action ke dispatch korte pari....and jokhon amder kono action dispatch hoy tokhon oita action ar moddhe jai and oi action ar type onujayi amader Reduser ar moddhe jabe and Reducer ar moddhe action type oonujayi jei kaj gulo kora ache oi kaj gulo korebe tar pore amder state ta update hoye store ar moddhe chole ashbe and ai store ar moddhe theke view ar moddhe update hoye jabe
Store.dispatch(addProduct("blazzer"))
