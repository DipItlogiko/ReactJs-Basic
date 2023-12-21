import React,{ useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useUsersContext } from '../../useUsersContext'
 

function NewUser() {
    const [inputText ,setInputText] = useState('')

    //const { users , setUser} = useContext(UsersContext)
    const { users , setUser} = useUsersContext() ////ai useUsersContext custom hook ta ami create korechi and ai hook ta amder parent ar moddhe theke ami jei state ar value take Global eeee set korechi oi state ar value take access korte sahajjo korbe

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newUser = {id: uuidv4(), name: inputText} 
        
        setUser([...users, newUser]) ////akhane amder users state ar sathe sprade operator ta use kore amader users state ar moddhe jei array ta ache oi arrar ar moddhe theke data guloke distructruing kore oi state ar privious value ar sathe newUser ai variable ar moddhe jei object ta ache oi object take add kore diyechi and jehetu amader users state ar moddhe array ar moddhe data ache tai amra  ...users state ar sathe sprade oparator ta use kore data disturcturing korar jonno [ ] ar moddhe rekhechi jodi amder users state ba variable ar moddhe jodi object akare data thakto tahole { } curly braces ar moddhe rakhtam and setUser() function take call kore amder state ar value take ami akhane update kore diyechi
        setInputText('')  ///form ta submit howar pore amader inputText state ar value ta empty hoye jabe
    }

    return (
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <h3>User Registration</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="New member name" name="userName" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} required />  {/* jokhon ee amader ai input field ar moddh kichu lekha hobe tokhon eee amader onChange event ta fire hobe and ai onChange event take listen korbe amader ai onChange={(e)=>{setInputText(e.target.value)}} inline functional approch ta "e" ar moddhe amader event take receive korbe and amder setInputText function take call kore amader inputText ar state take update kore diyechi amader e.target.value ar value diye */}
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default NewUser
