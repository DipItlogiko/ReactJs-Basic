import React from 'react';
import { v4 as uuidv4 } from 'uuid'; //// amader uuid ta amader project ar root file ar moddhe install korar pore amader aita ke import kore dite hobe and ai uuid take amra uuidv4 ai nam aa call korte parbo and for installing this uuid package go to README.md file



const todos = [
    {
        "id": uuidv4(),
        "Title": "Home",
        "Desc" : "The home page"
    },
    {
        "id": uuidv4(),
        "Title": "Office",
        "Desc" : "The Office page"
    },
    {
        "id": uuidv4(),
        "Title": "College",
        "Desc" : "The College page"
    },
    {
        "id": uuidv4(),
        "Title": "School",
        "Desc" : "The School page"
    }

];

function List()
{
    //console.log(uuidv4()); ////amra amader console ar moddhe dekhte pabo amader browser protibar refresh korar sathe sathe amader id ta change hocche
    return(
        <div> {/* jokhon amader return/render function ar moddhe oonek gulo element thakbe tokhon oi element guloke amader <div></div> ba <></>  ar moddhe rakhte hobe */}
            {todos.map((todo) => {
                const {id,Title,Desc} = todo  /// akhane amader todo ar moddh jei data ta ashche oi data ta object aakare ashche tai amara akhane Distructuring korar somoy { } curly bleases ar moddhe amader variable ar nam ta likhechi jodi amader ai todo ar moddhe array aakare data ashto tahole amra amader variable gulo [ ] ar moddhe rakhtam...
                return(
                    <div key={id}>
                        <h3>{Title}</h3>
                        <p>{Desc}</p>
                    </div>
                );
            })}
        </div>
    );
}



export default List;