import React,{ useState } from "react"///// akhane ami useState Hook take import korechi 
import { useSelector , useDispatch } from "react-redux"   ////akhane ami jei react-redux packace ta install korechi amader ReactJs project ar moddhe amader ReactJs ar sathe redux Javascript library take connect korar jonno oi react-redux package ar moddhe theke useSelector hook take use korechi amader Golobal eee set kora state ba variable ar value guloke access korar jonno and useDispatch hook take import korechi action dispatch korar jonno....
import { useNavigate } from "react-router-dom" ////// akhane useNavigate Hook take use korechi Navigation  korar jonno mane redirect korar jonno

import { addBooks } from "./BooksSlice"


function AddBook(){
    const [ title , setTitle ] = useState("")  ////akhane title nam aa akta state diclear korechi and useState() hook ar maddhome ai title state ar initial value empty string set kore diyechi "" and setTitle nam aaa akta function diclear korechi amader title state ar value take update korar jonno
    const [ author , setAuthor ] = useState("")

    const dispatch = useDispatch()   ////akhane dispatch  variable ar moddhe amader useDispatch hook take rekhechi
    const navigate = useNavigate() ////// akhane navigate variable ar moddhe amader useNavigate hook  take rekhechi

    const numberofBooks = useSelector((state) => state.Allbooks.books.length)  /////akhane amra useSelector() hook ta use kore amader global eee set kora state ba variable ar value take ami akhane access korchi and amader oi state ba variable ar length amra find kore numberofBooks variable  ar moddhe rekhe diyechi
    
    const handelSubmit = (e) => {
        e.preventDefault()
        const book = {   ////akhane amra akta object create korechi book nam aa and ai book object ar moddhe id, title, author ai guloke rekhechi
           id: numberofBooks +1,  /////amra chaile amader id take ai vabe generate na kore uuid amader ReactJs project ar moddhe install kore unique id ar jonno ai uuid take use korte partam tahole amader kono porblem hobe na kintu akhane ami jei vabe korechi ai vabe akta problem hote pare jemon jokhon amader id 1 and id 2 ai 2ta data thakbe tokhon jodi ami id 1 ta delete kore aabar kono new book add kori tahole dekha jabe amader id ta 2 dekhacche kintu amader 2 id ta to aage theke ache ta ooo 2 dekhanor karon hocche akhane amader books ar array ar moddhe theke length take find kore oi length ar sathe amra 1 jog kore dicchi to jokhon amra 2 ta data ar moddhe theke id 1 take delete korchi tokhon shudhu amader id 2 ar data ta thakche and jokhon amra new book add korchi tokhon amader book ar array ar length ta check korche tokhon amader id 2 takei pabe shudu amader oi array ar moddhe tai length ta dekhabe 1 and jokhon amra new book add korbo tokhon amader id ta 1 ar sathe 1 jog korbe and 2 dekhabe id ta tokhon dekha jabe amader id 2 dekhacche 2 ta book ar eee tai ai problem take solve korar jonno amra uuid ta use korte pari unique id generate korar jonno
           title,
            author,
        }

        dispatch(addBooks(book))  /////akhane amader addBooks action take dispatch korechi and ai addBooks action take dispatch korar somoy book object take pass kore diyechi and jokhon eee amader ai action ta dispatch hobe amader ai action ar type oonujayi amader Reducer ar moddhe jabe and Reducer ar moddhe theke amader action ar type oonujayi logic gulo handel kore state ta update hoye Store ar moddhe chole jabe and Store ar moddhe theke amader View ta update hoye jabe and amara dekhte pabo jehetu amra akhane redux toolkit use korchi tai amader Reducer gulo amara Slice extension jukto file ar moddhe create korechi
        navigate("/show-books")   ///// akhane ami navigate korechi mane redirect korechi amader ai form ta submit hoye jawar pore amader ai /show-books route ar moddhe redirect korbe mane amader ai /show-books route ar moddhe niye jabe 
    }

    return(
        <div>
            <h2>Add Book</h2>

            <form onSubmit={ handelSubmit }>  {/* jokhon amader ai form ta submit hobe tokhon amader onSubmit event ta fire hobe and ai onSubmit event take handel korbe amader handelSubmit function ta */}
                <div className="form-field">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="titel" name="title" value={title} onChange={(e)=> { setTitle(e.target.value) }} required/>  {/* akhane amra value={title} aita diye amader title state ar sathe amader ai input field take connected kore diyechi  and jokhon eee kono kichu lekha hobe amader ai input field ar moddhe tokhon amader onChange event ta fire hobe and inline functional approch ta amader ai onChange event take handel korbe and setTitle function take call kore amader title state ar value take update kore debe e.target.value ar value diye */}
                </div>

                <div className="form-field">
                    <label htmlFor="author">Author: </label>
                    <input type="text" id="author" name="author" value={author} onChange={(e)=> { setAuthor(e.target.value) }} required/>
                </div>

                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default AddBook