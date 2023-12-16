import React, { useState } from 'react'

function NewTodo(props) {
    const [todo, setTodo] = useState({ title: '', description: '' }) /// akhane state

    const { title, description } = todo

    const handleChange = (e) => {
        setTodo({ ...todo,[e.target.name]: e.target.value})
       
    }

    const handleSubmit = (e) => {
        e.preventDefault() ///jokhon amader form ta submit kora hobe jokhon browser ar jei default behavior ache je form submit howar sathe sathe amader page ta reload hoye aabar sob data reseat hoye jabe ai behavior ta off korar jonno amra e.preventDefault() ai function ta use korechi..
        props.onHandleChildData(todo)  /// akhan theke amader todo state ar value ta amader parent component ar moddhe pass hoye jacche App component ar moddhe...
        setTodo({ title: '', description: '' }) ////and ai khane amader state ar value take ami abar empty set kore diyechi....mane form submit howar pore amader input field ar value gulo aabar empty hoye jabe
    }
     

    return (
        <div>
            <h1 className="title">Collect Data from a Form</h1>
            <div className="card" style={{ marginLeft: 'auto' , marginRight: 'auto', marginTop: '50px' , marginBottom: '50px'}}>
                <form onSubmit={handleSubmit}>
                    <div className="field-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" value={title} onChange={handleChange}  required/>  {/* akhane value={title} aita diye amader state ar sathe amader ai niput field take connected kore diyeci */}
                    </div>

                    <div className="field-group">
                        <label htmlFor="title">Description</label>
                        <textarea type="text" name="description" value={description} onChange={handleChange} required>  {/* akhane value={description} aita diye amader state ar sathe amader ai niput field take connected kore diyeci */}
                            
                        </textarea>
                    </div>

                    <div className="field-group">
                        <button className="btn" type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewTodo
