import React from "react";


type UserDemoProps = {    /////App.tsx component ar moddhe theke ami amader ai UserDemo.tsx component take call kore tar moddhe akta array of object pass kore diyechi props aakare and oi props akare ai jei array of object take pass korechilam oi arrar of object take akhane receive korechi and UserDemoProps ar moddhe store kore diyechi
    users: {  ////amra users key ar moddhe amader array of object take pass korechi amder App.tsx component ar moddhe theke tai akhane users likhechi
        id: number;
        name: string;
        email: string;
        age: number;
    }[] ////akhane [] ai array ta lekhar karon hocche amra amder App.tsx component ar moddhe theke array of object pass korechi tai amader ai [] array ta akhane likhte hobe
}

function UserDemo({ users } : UserDemoProps) {  /////UserDemoProps ar moddhe theke users ke distructuring kore venge ber kore niye ashechi amader UserDemoProps ar moddhe theke
    return(
        <div>
            {users.map((user)=> {   ////akhane users array ar moddhe theke akta akta kore user ar object amder user ar moddhe ashbe 
                const { id, name, email, age } = user /////akhane protita user ar object ar  moddhe theke id , name , email , age ai key guloke distructuring kore venge ber kore niye ashechi user ar moddhe theke
                return <div key={id}>  {/* protita div ke unique korar jonno amra key={id} likhechi */}
                    <h3>{id}</h3>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{age}</p>                     
                </div>
            })}
        </div>
    )
}

export default UserDemo

