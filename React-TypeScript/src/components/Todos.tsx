import React from "react";

import Todo from "./Todo";
import { todoPropsType } from "../types";

 
///===amader ai type gulo akta file ar moddhe rakha uchit jemon mai src/types.ts ar moddhe akta type ke rekhechi amra chaile amder ai type take akhan theke cut kore niye amader src/types.ts ar moddhe rekhe dewa and oi file ar moddhe theke export kore dewa and oi file ar moddhe theke amder ai TodosProps import kore niye akhane use korte hobe aita hocche good practice====///
type TodosProps = {  //////amra App.tsx component ar moddhe theke amader ai Todos component take call kore jei data gulo pass korechi props aakare oi props ar type gulo ami akhane set kore diyechi and TodosProps ar moddhe store kore diyechi
    Todos: todoPropsType[];
   //OR----
   //Todos: {
    //         id: string;
    //         title: string;
    //     }[]  ////Todos key ar moddhe jehetu amder array of object ashbe tai tar type ta aivabe set kore diyechi amader protita object ar moddhe amader id and title thakbe tai oi gulor type set korechi an sheshe [] likhechi karon amder akta array ar moddhe oonek gulo object ache tai and ai type ta amra copy kore anechi amder App.jsx component ar moddhe jekhane amader ai Todos component take call kore key ar moddhe props aakra data pass korechi oi key ar opore hober korle amder ai type ta dekhabe and amra oikhan theke copy kore niye akhane likhe diyechi  
    onGetDataFromChildComponentTodo: Function;  ////akhane amder App.tsx component ar moddhe theke amader ai Todos component ar moddhe jei method ba function ta pass korechi jei key ar moddhe props aakare oi key ar nam ta akhane likhe props ar type ta akhane likhe diyechi Funciton
}

function Todos( { Todos ,onGetDataFromChildComponentTodo } : TodosProps) {   /////akhane amder TodosProps ta likhe diyechi props type hishebe and TodosProps ar moddhe theke Todos ,onGetDataFromChildComponentTodo ai 2ta ke distructuring kore ber kore niye ashechi
     
    return(
        <section className="todos">

            { Todos.map((todo) => <Todo key={todo.id} todo={todo} getDataFromChildComponentTodo={onGetDataFromChildComponentTodo} />)}  {/* akhane amader Todos ar moddhe array of object ta ashbe mane jei array ar moddhe object aakare oonek data ache jeitake ami App.tsx ar moddhe theke pass korechi amader ai component ar moddhe and akhane oi Todos ar moddhe theke mapping korbe akta akta kore object asbe amder todo ar moddhe and ai todo object take amadr Todo component take call kore todo key ar moddhe props aakare amader Todo component ar moddhe pass kore diyechi and protita object take unique korar jonno key={todo.id} aita likhe diyechi and jehetu ami Todo component ar moddhe todo key ar moddhe and getDataFromChildComponentTodo key ar moddhe props aakare data pass korechi tai amder Todo component ar moddhe diye amder ai props key ar type gulo set kore dite hobe ta na korle amder todo key and getDataFromChildComponentTodo key ar niche error dekhabe and amra chaile amder ai key gulor opore hober kore props type ta copy kore niye amder Todo Component ar moddhe likhe dite pari */}
            
        </section>
    )
}

export default Todos