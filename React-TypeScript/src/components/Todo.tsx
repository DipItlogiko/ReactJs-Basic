import React from "react";

import { todoPropsType } from "../types";  ////akhane amader src/types.ts file ar moddhe ami akta type rekhechi and oi type take shudhu export korechi tai amader oi type take import korar somoy { } object ar moddhe rakhte hoyeche jodi ami export default kortam amader src/types.ts file ar moddhe theke amader ai todoPropsType  take tahole amra jekono nam aaa amader ai todoPropsType ke import korte partam

///===amader ai type gulo akta file ar moddhe rakha uchit jemon mai src/types.ts ar moddhe akta type ke rekhechi amra chaile amder ai type take akhan theke cut kore niye amader src/types.ts ar moddhe rekhe dewa and oi file ar moddhe theke export kore dewa and oi file ar moddhe theke amder ai TodoProps import kore niye akhane use korte hobe aita hocche good practice====///
type TodoProps = {
    todo: todoPropsType;  ///akhane amader todoPropsType ar moddhe amader todo key ar moddhe jei props gulo ashbe tar type set kora ache and ai todoPropsType take ami src/types.ts ar moddhe create kore oi file ar moddhe theke export kore diyechi and ai file ar moddhe theke ami oitake import kore akhane use korechi amra chaile OR ar moddhe jeivabe kora ache ai vabe ooo korte pari
 //OR-----
    //todo: {
        //         id: string;
        //         title: string;
        //     }

    getDataFromChildComponentTodo: Function;  ////akhane amader Todos.tsx component ar moddhe theke amader ai Todo component ar moddhe jei method ba function ta pass korechi jei key ar moddhe props aakare oi key ar nam ta akhane likhe props ar type ta akhane likhe diyechi Funciton
}

function Todo(props : TodoProps) {   /////akhane amader TodoProps ar moddhe amra props ar jei type gulo set kore diyechi ta akhane props ar modde assign kore diyechi mane TodoProps ar moddhe ja ja ache sob amader props ar moddhe chole jabe
    const { id , title } = props.todo; ////akhane props ar moddhe jei todo ta ache oi todo ar moddhe theke ami distructuring kore id and title take venge ber kore niyechi props.todo ar moddhe theke

    const handelDelete = (id : string) => {  ////jokhon amader Delete Todo button ar moddhe kew click korbe tokhon amder onClick event ta fire hobe and onClick event ta fire howar sathe sathe amder ai handelDelete function ta call hobe and id ta chole ashbe amader ai handelDelete function ar moddhe and ami id props ar type set kore diyechi string
       props.getDataFromChildComponentTodo(id)  ////akhane amader props ar moddhe jei getDataFromChildComponentTodo function ta ache oi getDataFromChildComponentTodo function take call kore amder id ta pass kore diyechi amader App.tsx parent component ar moddhe 
    }

    return(
        <div>
            <article className="todo">
                <h3>{id}</h3>  
                <p>{title}</p>

                <button onClick={()=> {handelDelete(id)}}>Delete Todo</button>  {/* jokhon amader Delete Todo button ar moddhe click kora hobe tokhon onClick event ta fire hobe tokhon amader oi onClick event take handel korbe amader inline functional approch amader ai inline functional approch ta amder handelDelete() function take call korbe and tar sathe amader id ta pass kore debe amader handelDelete() function ar moddhe */}
            </article>
        </div>
    )
}

export default Todo