import React from 'react'
///==== Akhane amader react-toastify ke amader application ar moddhe install korar por ai 2 ta import korte hobe ====////
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
 

function App() {
    const handelAddNewTodo = () => {
        toast.success('added') ///akhane toast ar pore ami success diyechi and akta message diye diyechi..success ta amder notification take green kore dekhabe..(go to README.md and then go to react-toastify documentation)
    }
    return (
        <div>
            <h1>Todo App</h1>
            <button onClick={handelAddNewTodo}>Add New Todo</button>
            <ToastContainer />  {/* ai ToastContainer ta amader toast message take shundor kore dekhabee  */}
        </div>
    )
}

export default App
