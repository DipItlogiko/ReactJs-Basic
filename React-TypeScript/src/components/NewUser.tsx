import React,{ useState } from "react";

function NewUser() {
    
   const [name , setName ] = useState('') ////akhane useState() hook ar maddhome name nam aa akta state create korechi and ai name state ar value ke update korar jonno setName ai function ta create korchi and name state ar value take empty string diye initialize kore diyechi ''
   const [email , setEmail] = useState('')  ////amra chaile protita input field ar jonno alada alada kore state create na kore  akta state create kore useState() ar moddhe object ar moddhe  amader protita state define kore tar akta initial value set kore dite pari....ja amra aager oonek practice ar moddhe korechi check other branches

   ///---akhane amra jemon protita event ke listen korar jonno alada alada kore lister function create korechi amra chaile akta lister function create kore sob event ar jonno kaj korte partam ja amra aager practice gulote oonek bar korechi check other branches...
   const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {  /////jokhon amader onChange event ta fire hobe tokhon oi onChange event take handel ba listen korbe amader ai handleName ai function ta jokhon onChange event ta fire hobe oi onChange event ta amder ai handleName ai function ar moddhe 'e' ar moddhe chole ashbe and ami "e" mane event and e: diye amader event ar type ta set kore diyechi 'React.ChangeEvent<HTMLInputElement>'  mane React ar moddhe jei ChangeEvent ta ache oitake access korechi karon amader onChange event ta fire hole amader ai function ar moddhe ashbe tai ami akhane React.ChangeEvent ta likhechi and kon dhoroner ChangeEvent aitake rrr ooo specific vabe bole diyechi <HTMLInputElement>
        setName(e.target.value)
   }

   const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
       setEmail(e.target.value)
   }

   const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {  ////jokhon amader onSubmit event ta fire hobe tokhon oi onSubmit event take handel ba listen korbe amader ai handelSubmit function ta jokhon amader onSubmit event ta fire hobe oi onSubmit event ta amader ai handelSubmit ai function ar moddhe 'e' ar moddhe chole ashbe and ami "e" mane event and ai e: diye amder event ar  type ta set kore diyechi ' React.FormEvent<HTMLFormElement>' mane React ar moddhe jei FormEvent ta ache  oitake access korechi karon jokhon amader form ar moddhe onSubmit event ta fire hole amader ai function ar moddhe ashbe tai ami akhane React.FormEvent ta likhechi and kon dhoroner FormEvent aitake rrr ooo specific vabe bole diyechi <HTMLFormElement>
       e.preventDefault()  ////form ta submit howar pore jeno refresh na hoy tar jonno aita likhechi
      
       const newUser = { ////akhane newUser nam aa akta  object create korechi and object ar key ar value hishebe amader state ar nam take likhe diyechi mane amder state ar value gulo ja hobe amade ai object ar key ar value gulo tai ee hobe 
         name: name,  ///akhane jemon amade ai object ar key ar nam ooo ja aabar value ar nam oo tai tobe amra aitake name: name aivabe na likhe aivabe {name, email} likhte pari ta ooo amader kaj korbe karon amader object ar key ar nam and value ar nam aakoi tai amra aivabe likhte parbo
         email: email,
       }

       console.log(newUser) ////browser ar console ar moddhe amder ai newUser object ar value ta dekhabe  

       setName('')  ////akhane amader setName() function take call kore amader name state ar value take '' empty string kore diyechi jokhon amader form ta submit hobe tar pore
       setEmail('')
    }

    return(
        <div>
            <h2>Create User</h2>

            <form onSubmit={handelSubmit}>  {/* jokhon amader ai form ar moddhe jei submit button ta ache oi button a kew click korbee tokhon amader ai onSubmit event fire hobe and ai onSubmit take handel ba listen korbe amder ai handelSubmit function ta */}
                <div>
                    <label htmlFor="name">
                        Name:

                        <input type="text" id="name" value={name} onChange={handleName}  required/>   {/* akhane value={name} diye amader ai input field ar sathe amader name state take connected kore diyechi and jokhon eee amader ai input field ar moddhe kichu lekha hobe tokhon eee amader onChange event ta fire hobe and ai onChange event take handel korbe ba listen korbe  amder ai handleName function ta.......amra chaile akhane kono function ar nam na diye inline functional approch ar maddhome oo korte partam 1 line ar moddhe amader setName function take call kore amader name state ar value take update kore dite partam */} 
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="email">
                        Email:

                        <input type="email" id="email" value={email} onChange={handleEmail}  required/>    
                    </label>
                    
                </div>

                <button type="submit">Create User</button>  {/* jokhon kew ai Create User button ar moddhe click korbe tokhon amader ai form ta submit hoye jabe */}
            </form>
        </div>
    )
}

export default NewUser