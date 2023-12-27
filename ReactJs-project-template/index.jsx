//======================================================================================//
//async action - api calling
//api url - https://jsonplaceholder.typicode.com/todos
//middleware - redux-thunk
//axios  - ar maddhome amra api theke data fetch korbo amra jani ReactJs ar akta builtin useEffect() Hook ache jar maddhome amra API theke data fetch korte pari
//========================================================================================//

const { createStore , applyMiddleware } = require("redux")   /////akhane ami redux javascript library ar moddhe theke createStore ke import korechi store create korar jonno and applyMiddleware take import korchi middleware use korar jonno
const { default: axios } = require("axios")   /////akhane amra axios take install kore import kore diyechi karon amra axios diye amader API ar moddhe theke Data fetch korbo tai amra ReactJs ar moddhe ReactJs ar builtin useEffect() hook use kore API theke data fetch korte pari
const { thunk } = require("redux-thunk")   /////redux-thunk hocche akta middleware jar maddhome amra asyncronous action create korte pari and oi action ar moddhe API theke data fetching ar kaj korte pari asyncronous vabe

///constent
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"
const API_URL = "https://jsonplaceholder.typicode.com/todos"


// state 
const initialTodosState = {   //////akhane amra state create korchi 3ta tai oi state guloke akta object { } ar moddhe rekhechi and ai object { } take ami initialTodosState ai variable ar moddhe store kore diyechi..ami chile joto khusi toto state ai object { } ar moddhe define kore dite pari
    todos: [],
    isLoding: false,
    error: null,
}

//action
const getTodosRequest = () => {   /////jehetu amder action take akta function ar moddhe rekhe return korchi tai ai getTodosRequest function take bola hobe Action Creator Function.....amra jani amader action { } object ar moddhe lekha hoy and action ar moddhe 2ta jinish thake 'type' ai type ar moddhe amader action ar type  ta bole dei amader action type ta ki hobe and ai action  type ta amra akta variable ar moddhe define kore then oi variable ar nam ta akhene likhe dite hobe karon amader ai nam ta aabar amader Reduser ar moddhe likhe te hobe tai jeno amader speling mistek na hoy tar jonno amra amder action ar type ar nam ta akta variable ar moddhe store kore rakhbo and oi variable take use korbo and action ar moddhe 'payload' ooo thake and ai payload ar maddhome amra action ar moddhe theke Reducer ar moddhe data pass korte pari 
    return{
        type: GET_TODOS_REQUEST,
    }
} 

const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error,
    }
}

const getTodosSuccess = (Data) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: Data,
    }
}


//Reducer
const todosReducer = (state=initialTodosState, action) => {
    ////===amra cahile ai switch na bebohar kore if else diye oo korte partam check GitHub ReactJs Basic repository useReducer() hook branch===///
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state, ////akhane amader state ar moddhe ja ja ache sob niye ashe dekhabe karon ami state ar sathe spared oparator use korechi ...state
                isLoding: true, /// and state ar  moddhe theke shudhu amader isLoding state ar value take update kore debe true
            }
            
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoding: false,
                todos: [ ...state.todos , action.payload ], ////akhane ...state.todos mane amader state ar moddhe jei todos nam aa jei state ta ache oi state ar aager value ar sathe action ar payload theke jei data ta ashche  action.payload oi data ta amader ai todos state ar sathe jog hoye jabe 
            }

        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoding: false,
                error: action.payload,
            }    
    
        default:
            return state;  /////Reducer hocche akta pure function ...pure function mane hocche jei function input niye output kichu na kichu return kore tai jodi amder akhane kono action eee na hoy ba kono action na ashe tahole oooo amader state ar value ta return korbe karon amader Reducer function ta hocche pure function and ai pure function ar kaj hocche kichu na kichu return kora
    }
}

//async Action Creator
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest())  ////akhane amader prothom ai eeeee dispatch hobe ai getTodosRequest() action ta ...amader ai getTodosRequest() action ar moddhe jabe and and oi action ar type oonujayi amader Reducer ar moddhe jabe and Reducer action ar type onnujayi amader state take update kore store ar moddhe pass kore debe 
        axios.get(API_URL)      //////akhane amader API ar moddhe theke data  axios ar maddhome fetch korechi
        .then((res) => {   //////API theke data fecth korar pore oi response ta amader res variable ar moddhe chole ashbe  
           const todos = res.data  /////res variable ar moddhe jei data gulo ache oi data guloke ami todos ar moddhe store kore diyechi
           const title = todos.map((todo) => todo.title)  /////akhane todos ar moddhe theke mapping korechi akta akta kore todo amader todo ar moddhe ashbe and protita todo ar moddhe theke ami just todo ar title take niyechi and amader   title variable ar moddhe store kore diyechi
           dispatch(getTodosSuccess(title))     /////akhane amader getTodosSuccess() action ta dispatch hobe......amader ai getTodosSuccess() action ar moddhe jabe and title ar value ta oo niye jabe and oi action ar type oonujayi payload ar maddhome amader ai title ar value ta   amader Reducer ar moddhe jabe and Reducer action ar type onnujayi amader state take update kore store ar moddhe pass kore debe  
        })
        .catch((error) => { ////jodi kono error pai amader API theke data fetch korar somoy tokhon amader oi error take catch korbe and oi error ta amader error variable ar moddhe store hoye jabe
            const errorMessage = error.message  ///error ar moddhe jei message ta ache oi message take ami errorMessage variable ar moddhe store kore diyechi
            dispatch(getTodosFailed(errorMessage))   ///akhne amader getTodosFailed() action ta dispatch hobe hobe and errorMessage ta niye jabe akhan theke action ar moddhe and action ar moddhe theke amader ai errorMessage ar value take payload ar maddhome amader reduser ar moddhe pass kore dite parbo and amader Reducer amader action ar type onujayi amader state ar value take update kore store ar moddhe pass kore debe and store ar moddhe theke amader view ta update hoye jabe
        })
    }
}



//store
const StoreTodos = createStore(todosReducer , applyMiddleware(thunk))   //////akhane amader todosReducer ar moddhe theke jei updated state ar value ta ashbe mane jokhon kono action dispatch hobe oi action ar type oonujayi amader Reducer ar moddhe jabe and amader Reducer ar moddhe theke state ta update hoye akhane chole ashbe and oi updated state ta niye akta store create korbe and StoreTodos variable ar moddhe store kore debe and akhane ami applyMiddleware() ai method ar moddhe bole diyechi ami kon middleware ta use korbo....jemon ami akhane bole diyechi thunk use korbo and ami middleware ar jonno redux-thunk package take install korechi and ai file ar opore oitake import kore niyechi...

StoreTodos.subscribe(()=> {  //// akhane ami store ar subscribe() method take call korechi karon subscribe() method ta amder store ar theke View ke update kore debe and amra dekhte pabo..
    console.log(StoreTodos.getState())   ///akhane amader store ar getState() method take call korechi ai getState() method ar kaj hocche amader state ar oobochtha gulo dekhano jemon ami aikhane StoreTodos.getState() take call kore amader StoreTodos variable ar state ar obochtha ta dekhchi getState ar maddhome console ar moddhe 
})

StoreTodos.dispatch(fetchData()) //// aikhane store ar dispatch() method take call kore akta action function ar nam pass kore diyechi dispatch amader ai function ar moddhe jabe and dispatch korbe  
