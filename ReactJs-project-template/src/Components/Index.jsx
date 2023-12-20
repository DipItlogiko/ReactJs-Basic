/////////=============== Books list App without useReducer Hook ===============///// 

// import React,{ useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';

// import Modal from './Modal'

// /////======= Akhane ami booksData variable ar moddhe akta array ar moddhe object aaakare kichu data rekhechi ===========/////
// const booksData = [
//     {
//         id: 1,
//         name: 'Pthr Panchal',
//     },
//     {
//         id: 2,
//         name: 'Padma Nadir Majhi ',
//     },
//     {
//         id: 3,
//         name: 'Srikanta'
//     },
// ] 
 

// /////======= Functional Component ========/////
// function Index(){
//     const [books , setBook] = useState(booksData)  ////akhane ami books state ba akta variable create korechi and  setBook nam aaa akta function create korechi amader books state ba variable ar value take update korar jonno...and useState hook ta use kore amader books state ba variable ar value take inicilize kore diyechi booksData variable ar moddhe jei data gulo ache oi data gulo diye
//     const [newBook , setNewBook] = useState('')
//     const [modalText , setModalText] = useState('')
//     const [isModalOpen , setIsModalOpen] = useState(false)
     
//     const handleChange = (e) => {
//         setNewBook(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         setBook((previousStateValue) => {   ///// akhane amader setBook function take call kore amder books state ar value take update kore diyechi ....amra jani kono state ar value update korar somoy amader oi state ar privious value ar oopore vitti kore amder state update korte hoy aita good practice...
//             const addBook = { id: uuidv4(), name: newBook} ////akhane ami addBook nam aa akta variable niyechi and ai variable ar moddhe akta object ache and ai object  ar id ar value ta generate korbe amader uuidv4() function ta and name ar value ta hobe amader newBook state ar value ta
//             return [...previousStateValue, addBook]  ////akhane ami amader books state ar  previous State ar value ar sathe addBook variable  ar moddhe jei object ta ache oi object ta diye update kore dicchi
//         })

//         setNewBook('')
//         setIsModalOpen(true)
//         setModalText('Book added successfully!!!')



//     }
   
//     console.log(newBook)

//     return(
//         <div style={{textAlign: 'center'}}>
//             <h3>Book List</h3>

//              <form onSubmit={handleSubmit}>
//                 <input type="text" name="" id="" value={newBook} onChange={handleChange} /> {/* akhane value={newBook} aita diye amader newBook state ba variable ar sathe amader input filed take connect kore diyechi */}
//                 <button type="submit">submit</button>
//              </form>

//             {isModalOpen && <Modal modalText={modalText} /> }

//             {books.map((book)=> <li key={book.id}>{book.name}</li>)}
             
//         </div>
//     )
// }

// export default Index


/////////=============== Books list App with useReducer Hook ===============///// 

import React,{ useState , useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Modal from './Modal'

//---- Akhane ami booksData variable ar moddhe akta array ar moddhe object aaakare kichu data rekhechi ===========/////
const booksData = [
    {
        id: 1,
        name: 'Pthr Panchal',
    },
    {
        id: 2,
        name: 'Padma Nadir Majhi ',
    },
    {
        id: 3,
        name: 'Srikanta'
    },
] 
 
///----amra chaile amder ai reducer function take oono r akta jsx file ar moddhe rakhte partam and oi jsx file take ami ai file ar moddhe import kore nite partam tahole amder code ta symple thakto
const reducer = (state,action) => {   ////ai function ta sob somoy 2 ta paramiter receive korbe state and action ......and ai action ar moddhe 2 ta jinish thakbe akta hocceh akta hocche jokhon amra dispatch method take call kore oi method ar moddhe jei type and payload ta pass korbo oi type and payload ta aikhane action ar moddhe ashbe
    //action.type , action.payload
    if (action.type === 'ADD'){     /////akhane ami bolechi amader action.type ar value ta jodi ADD hoy tahole amader if ar moddhe jabe ...and ai action.type ar value ta ashche amader dispatch method ar moddhe theke karon amra amder dispatch method ar moddhe theke type and payload ta pass korchi
        const newBook = [ ...state.books , action.payload ]  /////akhne amader "...state.books" mane hocche amader state ar moddhe theke books state take distructruing kore ber kore niye ashbe and action theke payload ar value take anbe "action.payload" jei value ta ami dispatch method take call kore oi method ar moddhe payload ar moddhe jei data ta pass kore diyechi oi data ta...akhane amader [ ...state.books , action.payload ] books state ar moddhe aage jei value ta chilo oi value ar sathe amder action ar moddhe jei payload ta ashche oi payload ar value ta amder books state ba variable ar value ar sathe add hoye jabe...and amader payload ar moddhe akta object ashche and ai object ta add hoye jabe amader books state ba variable ar moddhe jei array ta ache oi array ar moddhe 
        return {
            ...state,  ////akhane privious state ar sob value return korbe 
            books: newBook,  ////akhane books state ba variable ar value take update kore debe
            isModalOpen: true,  ///akhane amader isModalOpen state ba variable ar value ta true update hoye jabe
            modalText:"successfully added New Book",  ///akhane amader modalText state ba variable ar value  ar moddhe ai string ta update hoye jabe

        }
    }
    if(action.type === 'REMOVE'){  /////akhane ami bolechi amader action.type ar value ta jodi REMOVE hoy tahole amader if ar moddhe jabe ...and ai action.type ar value ta ashche amader dispatch method ar moddhe theke karon amra amder dispatch method ar moddhe theke type and payload ta pass korchi
        const filteredBook = [ ...state.books ].filter(book => book.id !== action.payload )  ////// akhane [ ...state.books ] mane amader books state ar value theke filter kora hocche and books state ba variable ar moddhe theke akta akta kore object book ar moddhe ashbe  and oi object ar id gulor moddhe theke jei jei id gulo match korbe na amader  action.payload ar moddhe jei id ta ache oi id ar sathe oi object gulo filter hoye amader  filteredBook ar moddhe store hoye jabe
        return {
            ...state,
            books : filteredBook,
            isModalOpen:true,
            modalText:"Book Removed Successfully"
        }
    }

    return state;   ////akhane amder state take return korte hobe must
}


/////======= Functional Component ========/////
function Index(){
    // const [books , setBook] = useState(booksData)  ////akhane ami books state ba akta variable create korechi and  setBook nam aaa akta function create korechi amader books state ba variable ar value take update korar jonno...and useState hook ta use kore amader books state ba variable ar value take inicilize kore diyechi booksData variable ar moddhe jei data gulo ache oi data gulo diye
    // const [modalText , setModalText] = useState('')
    // const [isModalOpen , setIsModalOpen] = useState(false)
    
    const [bookState, dispatch] = useReducer(reducer, {    ///// amader oporer ai 3 ta state ke useReducer hook use kore akta state ar moddhe niye niyechi and ami useReducer hook ta use korar jonno ai useReducer hook take amra opore import kore niyechi react module theke and akhane bookState ta hocche amader state ba variable and dispatch ta hocche amader function jei function take call kore amra amder bookState state ba variable ar value take update korbo...tar pore amder useReduser hook take call korechi and amader useReduser hook ta jehetu akta function accept kore tai useReduser hook ar moddhe ami reducer function ar nam ta likhe diyechi prothom paramiter aaa and second paramiter ar moddhe ami akta object ar moddhe 3 ta state niye oi 3ta state ar moddhe inisial value set kore diyechi..amra chaile ai state ar object take akta variable ar moddhe rekhe oi variable ar nam ta ai second paramiter ar moddhe pass kore dite partam tahole amder code ta simple thakto
        books : booksData,
        isModalOpen: false,
        modalText: '',
    })

    const [newBook , setNewBook] = useState('')
    
     
    const handleChange = (e) => {
        setNewBook(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const addBook = { id: uuidv4(), name: newBook} ////akhane ami addBook nam aa akta variable niyechi and ai variable ar moddhe akta object ache and ai object  ar id ar value ta generate korbe amader uuidv4() function ta and name ar value ta hobe amader newBook state ar value ta

        dispatch({type: 'ADD', payload: addBook})   /////akhane ami dispatch function ta call korechi amder bookState state ba variable ar value take update koarar jonno..and ai dispatch method ar moddhe ami akta object ar moddhe type diye oi type ar value  diye diyechi 'ADD' and ai type ar value ta Capital letter ai lekha uchit and payload ar maddhome ai data pass kore diyechi ...jokhon amra kono data pass korbo dispatch ar moddhe tokhon amader oi datatake payload ar moddhe pass kore dite hobe....and ai dispatch ke call kore jokhon eee amra kono data pass korbo tokhon eee ai dispatch ar value gulo amader useReducer hook ar moddhe jei function ar nam ta likhechi oi function ar moddhe chole jabe 

        setNewBook('')
    }

    const removeBook = (id) => {
        dispatch({type: 'REMOVE', payload: id})
    }
   
     
    return(
        <div style={{textAlign: 'center'}}>
            <h3>Book List</h3>

             <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" value={newBook} onChange={handleChange} /> {/* akhane value={newBook} aita diye amader newBook state ba variable ar sathe amader input filed take connect kore diyechi */}
                <button type="submit">submit</button>
             </form>

            {bookState.isModalOpen && <Modal modalText={bookState.modalText} /> }

            {bookState.books.map((book)=> <li key={book.id}>{book.name} <button onClick={() => {removeBook(book.id)}}>Remove</button></li>)}
             
        </div>
    )
}

export default Index