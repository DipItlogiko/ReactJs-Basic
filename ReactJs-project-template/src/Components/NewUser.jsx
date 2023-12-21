import React,{ useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function NewUser(props) {
    const [inputText ,setInputText] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newUser = {id: uuidv4(), name: inputText} 
        props.onGetDataFromChildComponentNewUser(newUser) /// pass newUser data to the parent component App.jsx
        setInputText('')
    }

    return (
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <h3>User Registration</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="New member name" name="userName" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} required />
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default NewUser
