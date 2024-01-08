import React,{ useState } from "react";

///===amader ai type gulo akta file ar moddhe rakha uchit jemon ami src/types.ts ar moddhe akta type ke rekhechi amra chaile amder ai type take akhan theke cut kore niye amader src/types.ts ar moddhe rekhe dewa and oi file ar moddhe theke export kore dewa and oi file ar moddhe theke amder ai AddTodoProps import kore niye akhane use korte hobe aita hocche good practice====///
type AddTodoProps = { ////akhane ami akta type   create korechi AddTodoProps nam aaa  amra akhane je kono nam dite pari
    onGetDataFromChildComponentAddTodo: Function; ////akhane amader App.tsx component ar moddhe theke amader ai AddTodo component ar moddhe jei method ba function ta pass korechi jei key ar moddhe props aakare oi key ar nam ta akhane likhe props ar type ta akhane likhe diyechi Funciton
}

function AddTodo(props : AddTodoProps) {    /////akhane amader AddTodoProps type ar moddhe ja ja ache sob props ar moddhe chole jabe and props ar type ta ami AddTodoProps diye difine kore diyechi
    const [title , setTitle] = useState('') ////akhane ami useState hook use kore title nam aaa akta state define korechi and setTitle nam aaa akta function define korechi amader title state ar value take update korar jonno and useState() hook ar moddhe '' empty string diye amader title state ar value take '' empty string diye initialize kore diyechi
    
    const handelChange  = (e : React.ChangeEvent<HTMLInputElement>) => {  /////jokhon amader onChange event ta fire hobe tokhon oi onChange event take handel ba listen korbe amader ai handelChange ai function ta jokhon onChange event ta fire hobe oi onChange event ta amder ai handleChanage ai function ar moddhe 'e' ar moddhe chole ashbe and ami "e" mane event and e: diye amader event ar type ta set kore diyechi 'React.ChangeEvent<HTMLInputElement>'  mane React ar moddhe jei ChangeEvent ta ache oitake access korechi karon amader onChange event ta fire hole amader ai function ar moddhe ashbe tai ami akhane React.ChangeEvent ta likhechi and kon dhoroner ChangeEvent aitake rrr ooo specific vabe bole diyechi <HTMLInputElement>
        setTitle(e.target.value)
    }

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {  ////jokhon amader onSubmit event ta fire hobe tokhon oi onSubmit event take handel ba listen korbe amader ai handelSubmit function ta jokhon amader onSubmit event ta fire hobe oi onSubmit event ta amader ai handelSubmit ai function ar moddhe 'e' ar moddhe chole ashbe and ami "e" mane event and ai e: diye amder event ar  type ta set kore diyechi ' React.FormEvent<HTMLFormElement>' mane React ar moddhe jei FormEvent ta ache  oitake access korechi karon jokhon amader form ar moddhe onSubmit event ta fire hole amader ai function ar moddhe ashbe tai ami akhane React.FormEvent ta likhechi and kon dhoroner FormEvent aitake rrr ooo specific vabe bole diyechi <HTMLFormElement>
        e.preventDefault() ////form ta submit howar pore jeno refresh na hoy tar jonno aita likhechi

        const newTodo = {  ///akhane newTodo nam aa akta object create korechi
            id: Math.random().toString(),   ////akhane id: key ar value ta ami Math.random().toString() diye rendom akta unique number generate korchi protibar and amader id: key ar value hishebe set kore diyechi
            title: title    ///akhane title: key ar value hishebe amder title state ar value take set kore diyechi..akhane jehetu amder key and value ar nam same tai amra chaile title likhte pari akbar ta ooo kaj hobe
        }

        props.onGetDataFromChildComponentAddTodo(newTodo) /////akhane amder props ar moddhe jei onGetDataFromChildComponentAddTodo nam aaa function ta ache ai function take call kore newTodo object take pass kore dicci amader App.tsx parent component ar moddhe

        setTitle('')  ///akhane amader title state ar value take setTitle() function take call kore aabar '' empty string set kore diyechi
    }

    return(
        <div>
           <form onSubmit={handelSubmit}> {/* jokhon ee amder ai form ar moddhe save button ar moddhe click kore amader ai form ta submit kora hobe tokhon amader onSubmit event ta fire hobe and amder ai onSubmit event ta fire fole amader ai onSubmit event take listen korbe ba handel korbe amder handelSubmit ai function ta jei function ta ami opore create korechi */}
            <div>
                <label htmlFor="title">Todo Title: </label>
                <input type="text" name="title" value={title} onChange={handelChange} placeholder="Enter title" required autoFocus /> {/* akhane value={title} aita diye amder title state ar sathe amder ai input field take connected kore diyechi and jokon eee amader ai input field ar moddhe kichu lekha hobe tokhon eee amader onChange event ta fire hobe and amader ai onChange event take listen ba handel korbe handelChange function ta jita amra opore create korechi.....and required diye bolechi amader ai input field ta fillup na kore ai form ta submit kora jabe na ba ai form ta submit korte parbe na...and autoFocus diyechi karon amader page ta jokhon ee refresh kora hobe tokhon autometically amader ai input field ta active hoye jabe lekhar jonno*/}
            </div>
            <button type="submit">Save</button>
           </form>
        </div>
    )
}

export default AddTodo