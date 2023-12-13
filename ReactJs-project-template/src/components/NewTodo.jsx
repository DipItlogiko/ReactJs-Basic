import React, { useState } from 'react'

function NewTodo(props) {
    const [todo, setTodo] = useState('')

    const handelChange = (event) => {
        setTodo((todo) => (todo = event.target.value)) ////jokhon eee amra amder state ar value take change korbo tokhon eee amder privious value ar opore base kore amader state ar value take update kora uchit and (todo) ai mane bojhai amder privious state ar value
    }

    const buttonSubmit = (event) => {
        event.preventDefault() /// event.preventDefault() ai ta dewar karon hocche jokhon amader from ta submit hobe tokhon jeno amader data ta na chole jai reload howar pore  tai
        props.onNewTodoData(todo) 
    }

    

    return (
        <div>
            <form onSubmit={buttonSubmit}>
                <label htmlFor="todo">New Todo: </label>
                <input type="text" id="todo" name="todo" value={todo} onChange={handelChange} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodo
