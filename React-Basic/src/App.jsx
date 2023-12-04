import React from "react"
 

/// akhane amra users variable ar moddhe kichu data rekhechi json format aaa
const users = [
    {
        fullName: "John",
        age: 21,
        phons :[
            {
                home : "01758965478",
            },
            {
                office: "01569874125"
            }
        ]
    },

    {
        fullName: "Carry",
        age: 30,
        phons :[
            {
                home : "0216584",
            },
            {
                office: "9565158498"
            }
        ]
    },


];

function App() {     //// aita hocche amader functional Component...amara jani amader ReactJs ar moddhe Component 2 dhoroner akta hocche Functional Component and r akta hocche Class component 

    return (
        <div>  {/* jokhon amader return/render function ar moddhe oonek gulo element thakbe tokhon oi element guloke amader <div></div> ba <></>  ar moddhe rakhte hobe */}

             
            <h1>Nested Lists</h1>

            {users.map((user ,index)=> <article key={index} >      {/* akhane amader users variable ar value ar moddhe theke mapping korechi and users ar moddhe theke data gulo mapping hoye user ar moddhe ashbe amader ak ak ta object and oi object ar moddhe theke amra fullName and age take pabo and ai object ar moddhe phons ar moddhe jehetu aabar arta array ache and ai array ar moddhe amader r oo object ache tai amader aabar mapping korte hobe phons ar theke data ta pawar jonno and akhane amader users variable ar array ar moddhe theke index number onujayi jei object gulo ashche oi object golor index number ta amder ai index ar moddhe store hoye jachhe key={index} aita jodi amra na pass kori tahole amder console ar moddhe ai error ta dekhabe 'Warning: Each child in a list should have a unique "key" prop.' */}
                <h3>{user.fullName}</h3>
                <p>{user.age}</p>

                {
                    user.phons.map((phon,index) => <div key={index}> {/* jehetu amader users variable ar moddhe theke amader akta akta kore object user ar moddhe ashe and amader oi object ar moddhe phons ar moddhe aabar akta array ache and oi array ar moddhe aabar kichu object ache and oi phons ar data take ber korar jonno amader akhane aabar mapping korete hobe akhane ami akta mapping ar moddhe aabar mapping korchi and ai akta mapping ar moddh r oo mapping korake bole Nested Mapping ...akhane mader user ar moddhe jei phons key ta ache oi key ar theke mapping korchi karon amader ai phons key ar moddhe r oo akta array ache and ai phons ar moddhe theke data take ber korar jonno amader aabar mapping korte hobe */}
                        <p>{phon.home}</p>
                        <p>{phon.office}</p>
                    </div>)
                }

            </article> )}

         </div> 
    );
}


export default App;