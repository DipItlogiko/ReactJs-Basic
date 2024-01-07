import React,{ useState } from "react";

function NewUser() {
    const [userName , setUserName ] = useState('')  ////akhane useState() hook ar maddhome userName nam aa akta state create korechi and ai userName state ar value ke update korar jonno setUserName ai function ta create korchi and userName state ar value take empty string diye initialize kore diyechi ''

    const handelUserName = (e : React.ChangeEvent<HTMLInputElement>) => { /////jokhon amader onChange event ta fire hobe tokhon oi onChange event take handel ba listen korbe amader ai handelUserName ai function ta jokhon onChange event ta fire hobe oi onChange event ta amder ai handelUserName ai function ar moddhe e ar moddhe chole ashbe and ami "e" mane event and e: diye amader event ar type ta set kore diyechi 'React.ChangeEvent<HTMLInputElement>'  mane React ar moddhe jei ChangeEvent ta ache oitake access korechi karon amader onChange event ta fire hole amader ai function ar moddhe ashbe tai ami akhane React.ChangeEvent ta likhechi and kon dhoroner ChangeEvent aitake rrr ooo specific vabe bole diyechi <HTMLInputElement>
        setUserName(e.target.value)  ///akhane amra setUserName() function take call kore amader userName state ar value take update kore diyechi e.target.value ar moddhe jei data ta pacchi oi data ta diye  
    }

    const handelClick = (e : React.MouseEvent<HTMLButtonElement>) => {  /////jokhon amader onClick event ta fire hobe oi onClick event ta fire howar sathe sathe amader ai handelClick function ar moddhe 'e' ar moddhe amader oi onClick event ta chole ashbe akhane 'e' mane hocche event and e: aita diye amder ai event ar type ta set kore diyechi 'React.MouseEvent<HTMLButtonElement>' mane React ar moddhe jei MouseEvent ta ache oi event take ami access korechi karon jokhon amader mouse ar maddhome amader button ar moddhe click kora hobe tokhon onClick event ta fire hobe tai ami akhane React.MouseEvent React ar moddhe theke MouseEvent take access korechi and kon dhoroner MouseEvent aitake rrr ooo specific vabe bole diyechi <HTMLButtonElement>
        console.log(userName)   ////akhane userName state ar value take browser ar console ar moddhe dekhte pabo jokon amader onClick event ta fire hobe Show Name button aa click korar pore
    }
     
    return(
        <div>
            <h2>Create new user</h2>

            <input type="text" value={userName} onChange={handelUserName} placeholder="Enter User Name"/> {/* akhane value={userName} diye amader ai input field ar sathe amader userName state take connected kore diyechi and jokhon eee amader ai input field ar moddhe kichu lekha hobe tokhon eee amader onChange event ta fire hobe and ai onChange event take handel korbe ba listen korbe  amder ai handelUserName function ta.......amra chaile akhane kono function ar nam na diye inline functional approch ar maddhome oo korte partam 1 line ar moddhe amader setUserName function take call kore amader userName state ar value take update kore dite partam */}

             <button onClick={handelClick}>Show Name</button> {/* jokhon amader Show Name button ar moddhe click kora hobe tokhon amader onClick event ta fire hobe and ai onClick event take handel ba listen korbe amader handelClick function ta and amra chaile handelClick ai function take create na kore inline functional approch ar maddhome 1 line aa korte partam  */}
            
             <p>{userName}</p> {/* akhane amader userName state ar value take print korechi */}
        </div>
    )
}

export default NewUser