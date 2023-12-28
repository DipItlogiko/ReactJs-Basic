import React from "react"
import { useSelector , useDispatch } from "react-redux"  /////akhane amader react-redux package ar moddhe theke useSelector Hook take import korechi amader main.jsx ar moddhe theke jei Store take amra golobally set kore diyechi oi Store ar value take access korar jonno and useDispatch hook ta use korechi amader kono action ke dispatch korar jonno

import { dicrement, increment, incrementByAmount, reset } from "./counterSlice"  ////akhane amader action guloke  import kore niyechi


function CounterView(){
    const Count = useSelector((state) => state.counter.count) ////akhane amra useSelector hook ta use kore amader main.jsx ar moddhe theke jei store take globla eeee set kore diyechi oi store ar value take ami akhane access korechi amader state ar moddhe Store ar value gulo ashbe and oi value gulo ar moddhe theke ami counter ar moddhe theke ami count state ar value take access korechi tai ami akhane state.counter.count aita likhechi and mader count state ar value ta Count variable ar moddhe store kore rekhechi
    const dispatch = useDispatch()  ///akhane useDispatch() method take dispatch variable ar moddhe store kore diyechi

    return(
        <div>
           <h2>Count: {Count}</h2>  {/* akhane Count variable ar value ta print korbe { Count } */}
           <button onClick={()=> { dispatch(increment()) }}>+</button>
           <button onClick={()=> { dispatch(dicrement()) }}>-</button> {/* jokhon amader - button ar moddhe click kora hobe tokhon amader onClick event ta fire hobe and oi onClick  event take listen korbe inline functional approch ta jokhon amader - button a kew click korbe tokhon amader ai dicrement() action ta dispatch hobe and ai action ta amader Reduser ar moddhe jabe and amder action oonujayi amader logic gulo handel kore state take update kore amader Store ar moddhe pass kore debe and amader Store ta amader View ke update kore debe updated state ar value diye */}
           <button onClick={()=> { dispatch(reset()) }}>reset</button>
           <button onClick={()=> { dispatch(incrementByAmount(5)) }}>incrimentBy5</button> {/* jokhon amader incrimentBy5 button ar moddhe click kora hobe tokhon amader onClick event ta fire hobe and oi onClick  event take listen korbe inline functional approch ta jokhon amader - button a kew click korbe tokhon amader ai incrementByAmount(5) action ta dispatch hobe and ai action ta dispatch howar pore amader 5 ke niye jabe action ar sathe and ai action ta amader Reducer ar moddhe jabe and Reducer ar moddhe theke amader ai 5 ke action.payload ar moddhe pabe and logic gulo handel kore amader state take update kore amader Store ar moddhe pass kore debe and amader Store ta amader View ke update kore debe updated state ar value diye */}
        </div>
    )
}

export default CounterView