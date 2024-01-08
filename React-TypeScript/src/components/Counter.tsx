import React,{ useReducer } from "react"

const initialState = {   ////akhane amra initialState variable ar moddhe akta object ar moddhe count nam aa akta state niyechi and tar value 0 set kore diyechi initial eee and amra chaile akhane r oo state define korete kari amader ai object ar moddhe and oi state gulor initial value set kore dite pari
    count : 0
}

type counterStateType = {  /////akhane ami type defiye korechi amder state ar jemon amader count state ar type ta hocche number tai tkhane number diye diyechi and ai type take ai counterStateType ar moddhe store kore diyechi
    count : number
}

/// akhane amader INCREMENT,DECREMENT,RESET oonek bar likhte hobe tai typing mistake jeno na hoy tar jonno ami akhane  Constrain create korechi mane variable ar moddhe amader string gulo rekhechi
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const INCREMENTBY5 = "INCREMENTBY5"

type IncrementActionType = {
    type : "INCREMENT"   ////akhane amader action ar type ki hobe Tar jonno type define kore diyechi jemon ami bolechi amader action ar type ta hobe "INCREMENT"  and ai  type take ami ai IncrementActionType ar moddhe store kore diyechi amra chaile type: "INCREMENT" aivabe na likhe  type: typeof INCREMENT ai vabe oo likhte partam akhane INCREMENT hocche amader constrain ba variable and ami typeof diye bolechi amader INCREMENT constrain ba variable ar  value ta jei type ar ache ba jeita ache oita hobe 
}
type DecrementActionType = {
    type : "DECREMENT"
}
type ResetActionType = {
    type : "RESET"
}
type IncrementBy5ActionType = {
    type: "INCREMENTBY5",
    payload : number  
}


type CounterActionType = IncrementActionType | DecrementActionType | ResetActionType | IncrementBy5ActionType  /////akhane ami CounterActionType nam aaa akta type define korechi and  '|' union use kore amader ai IncrementActionType | DecrementActionType | ResetActionType | IncrementBy5ActionType  action type gulo set kore diyechi ar moddhe jekono action hole oitai ee kaj korbe '|' union mane hocche ar moddhe je kono akta hote pare


const reducer = (state : counterStateType, action : CounterActionType) => {  ///akhane amra chaile amader state ar type ta aivabe ooo set korte partam state: typeof initialState  mane amder jei initialState variable ta ache oi variable ar moddhe jei value ta ache and oi value ar type ta ja ache oi type ta eeee hobe amader state ar type kintu ami akhane aalada kore akta type declear korechi opore counterStateType ai nam a and ar moddhe ami amader state ar type ta set kore diyechi and akhane action ar type ta set kore diyechi action : CounterActionType  ai  CounterActionType ta amra opore define korechi and oitake akhane assign kore diyechi amader action : ar type hishebe .......amra chaile amade amader action ar type take action: string aivabe ooo define kore dite partam kintu amra chacchi amader INCREMENT,DECREMENT,RESET,INCREMENTBY5 ai gulo chara jeno oonno kichu amder action ar type hishebe ashle oi gulo kaj korbe na tai amra aivabe korechi
    ///====ai kaj ta amra switch case na use kore if else diye oo korte partam check useReducer hook branch====///
    switch (action.type) {
        case INCREMENT:  ////akhane jodi amader action ar type ta INCREMENT hoy tahole return ar moddhe ja ache oi kaj ta korbe     
            return {count : state.count + 1} ////akhane amdaer count : state ar value take update korbe state ar moddhe jei count ta ache state.count ar jei privious value ta ache tar sathe 1 jog kore amder count state ar value take update kore debe
            
        case DECREMENT:
            return {count : state.count - 1}

        case RESET:
            return {count : 0} 
            
        case INCREMENTBY5:
            return{ count : state.count + action.payload}   ////akhane amdaer count : state ar value take update korbe state ar moddhe jei count ta ache state.count ar jei privious value ta ache tar sathe action ar moddhe theke payload ar moddh theke jei value ta ashbe  oi value ta jog hoye jabe and  amder state ar value take update kore debe....amra jani amader kono action dispatch korar somoy amra oi action ar moddhe amra action ar type ta bole dei and oi action ar moddhe kono data pass korte chaile amra payload ar moddhe amader oi data take pass kore dei and reducer function ta oi action ar type and payload ar data ta pai action.type and action.payload ar moddhe   
    
        default:
            return state;  ////amra jai amader Reducer hocche akta pure function and pure function ar kaj hocche kichu na kichu return kora tai amader jodi kono action dispatch na hoy and amader ai reducer function ar moddhe jodi kono action ta ashe dispatch hoye ta oo amader ai reducer pure function ta amder state ar value take return korbe
    }
}

function Counter() {
    const [state , dispatch] = useReducer(reducer , initialState )  /////akhane amra useReducer() hook take use korechi and amra jani amder useReducer() hook ta 2 ta jinish accept kore function and initialState, prothom ta hocche akta functino jei function ar nam ami diyechi reducer and r akta jinish receive kore oita hocche initialState amra oopore ai initialState nam a akta variable declear kore object ar moddhe amader state gulo define kore diyechi and oi state ar akta initial value set kore diyechi and oi variable ar nam ta akhane likhe diyechi initialState.....amra chaile amder state gulo variable ar moddhe na rekhe amra sora sori { count : 0, } ai vabe oo likhe dite pari amder useReducer() hook ar moddhe
    
    return(
        <div>
            <h1>Count : {state.count}</h1> {/* akhane state, state ar moddhe jei count state ta ache oi count state ar value take ami akhane print korechi */}
            <button onClick={()=> {dispatch({type:INCREMENT})}}>Increment</button>
            <button onClick={()=> {dispatch({type:DECREMENT})}}>Decrement</button>
            <button onClick={()=> {dispatch({type:RESET})}}>Reset</button>
            <button onClick={()=> {dispatch({type:INCREMENTBY5 , payload: 5})}}>IncrementBy5</button>  {/* jokhon amader incrementBy5 button ar moddhe click kora hobe tokhon amader onClick event ta fire hobe and ai onClick event take handel ba listen korbe amader ai inline functional approch ta  and ai inline functional approch ta amder dispatch() function take call kore amder akta action ke dispatch korbe jemon ami type diye bole diyechi amader kon action ta dispatch korbe jemon akhane INCREMENTBY5 ai action ta dispatch korbe and amder ai actino ta dispatch howar somoy amader ai action ar sathe akta data niye jabe jei data ta ami payload ar moddhe pass kore diyechi jokhon ee amader kono action dispatch hobe tokhon oi action ta amder reducer funtion ar moddhe chole jabe action ar type and action ar payload na niye  */}
        </div>
    )
}

export default Counter