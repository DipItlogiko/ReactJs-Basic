import React,{ useState } from "react"
import { useLocation } from "react-router-dom"   ////akhne amra useLocation() Hook ta use korechi amader src/freatures/books/showBooks.jsx ar moddhe theke edit button ar moddhe theke  state ar moddhe theke jei data  ta ashche oi data take access korar jonno amara useLocation Hook ta use korechi
import { useNavigate } from "react-router-dom" ///// redirect korar jonno amra useNavigate() Hook ta use korechi
import { useDispatch } from "react-redux"  ///action dispatch korar jonno amra useDispatch hook ta use korechi

import { updateBooks } from "./BooksSlice" ////akhane amader updateBooks action take import korechi

function EditBook(){
    const location = useLocation() ////akhane amra useLocation() Hook use kore amader state ar moddh jei data gulo asheche oi data guloke receive korechi ba access korechi
     
    const [id , setId] = useState(location.state.id) /////akhane id nam aa akta state create korechi and ai id state ar initial value hishebe location.state.id ar moddhe jei value ta ache oi value ta diye amader id state take initialize kore diyechi and setId function ta create korechi amader id state ar value take update korar jonno
    const [title , setTitle] = useState(location.state.title)
    const [author , setAuthor] = useState(location.state.author)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateBooks({ id, title, author})) ////jokhon amader form ta submit hobe  tokhon amder updateBooks action ta dispatch hobe and ai updateBooks action ta dispatch howar somoy akhan theke ami ai { id, title, author} object take pass kore diyechi amader Reducers ar moddhe ai action ar type oonujayi logic gulo handel korbe and amader state take update kore debe and amader pass kora ai data ta amdaer Reducer ar moddhe action.payload ar moddhe chole jabe

        navigate("/show-books") ///// akhane ami navigate korechi mane redirect korechi amader ai form ta submit hoye jawar pore amader ai /show-books route ar moddhe redirect korbe mane amader ai /show-books route ar moddhe niye jabe 
    }

    return(
        <div>
            <h1>Edit Book</h1>

            <form onSubmit={handleSubmit}> {/* jokhon amader ai form ta submit hobe tokhon amader onSubmit event ta fire hobe and ai onSubmit event take handel korbe amader handelSubmit function ta */}
                <div className="form-field">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="titel" name="title" value={title} onChange={(e)=> { setTitle(e.target.value) }} required/> {/* akhane amra value={title} aita diye amader title state ar sathe amader ai input field take connected kore diyechi  and jokhon eee kono kichu lekha hobe amader ai input field ar moddhe tokhon amader onChange event ta fire hobe and inline functional approch ta amader ai onChange event take handel korbe and setTitle function take call kore amader title state ar value take update kore debe e.target.value ar value diye */}
                </div>

                <div className="form-field">
                    <label htmlFor="author">Author: </label>
                    <input type="text" id="author" name="author" value={author} onChange={(e)=> { setAuthor(e.target.value) }} required/>
                </div>

                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditBook