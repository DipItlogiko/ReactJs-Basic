import React from 'react'
import { useSelector, useDispatch } from 'react-redux' ////akhane ami jei react-redux packace ta install korechi amader ReactJs project ar moddhe amader ReactJs ar sathe redux Javascript library take connect korar jonno oi react-redux package ar moddhe theke useSelector hook take use korechi amader Golobal eee set kora state ba variable ar value guloke access korar jonno and useDispatch hook take import korechi action dispatch korar jonno....
import { Link } from 'react-router-dom' ////ai Link ta use korechi ak route ar moddhe theke r ak route ar moddhe jawar jonno

import { deleteBooks } from './BooksSlice' ////akhane amader create kora deleteBooks action take import korechi

function ShowBooks(){
    const  books   = useSelector((state) => state.Allbooks.books)  /////amra amader jei state ba variable ta ke global eee set kore diyechi amader main.jsx ar moddhe oi state ba variable ar value take access korar jonno amra useSelector() hook ta use korechi and state ar moddhe amader Sob golobal state ba variable ar value gulo amra pabo jei state ba variable ar value gulo ami global eee set kore diyechi main.jsx ar moddhe oi state ar moddhe theke Allbooks ar moddhe theke books state ar value guloke ami akhane access korchi
    const dispatch = useDispatch()

    const handelDeleteBook = (id) => {
        dispatch(deleteBooks(id)) ////akhane amader deleteBooks action ta dispatch hobe and action ta dispatch howar somoy id na niye jabe amader Reducers ar moddhe and amader Reducer ar moddhe theke action ar type oonujayi logic gulo handel kore state take update kore amader Store ar moddhe pass kore debe and Store amader View take Update kore debe and amra dekhte pabo
    } 

    return(
        <div>
            <h2>List of Book</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>

                    {books && books.map((book) => {     /////jodi amader books variable ar moddhe kono data thake tahole '&&' and operator ar oprer pashe jabe and books ar moddhe theke mapping korbe mane akta akta kore book amader book ar moddhe ashbe                   
                        const { id, title, author } = book /////akhane amader book ar moddhe protibar jei book ar object gulo ashbe oi book object ar moddhe theke ami distructuring korechi jehetu book ar moddhe protibar object ashbe tai book ar moddhe theke data distructuring korar somoy oi guloke { } curly braces ar moddhe rekhechi jodi array akara data ashto amader book ar moddhe tahole distructuring korar somoy [ ] array ar moddhe rakhtam
                        
                        return(
                            <tr key={id}> {/* protita table ar row ke unique korar jonno akhane key={id} likhechi */}
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>
                                    <Link to="/edit-book" state={{id, title, author}}> {/* jokhon ee amader Edit button ar moddhe click kora hobe ai /edit-book route ar moddhe chole jabe and ai state ar moddhe jei data gulo ache ai data gulke niye jabe state={{id, title, author}} and ai datake amar useLocation Hook use kore access korte parbo */}
                                       <button>Edit</button>
                                    </Link>
                                    <button onClick={()=> {handelDeleteBook(id)}}>Delete</button> {/* jokhon amader Delete Button a click kora hobe tokhon onClick event ta fire hobe and amader ai onClick event take handel korbe amader inline Functional approch and amader handelDeleteBook ai function ta call hobe and id ta pass hoye jabe amader ai handelDeleteBook function ar sathe */}
                                </td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ShowBooks