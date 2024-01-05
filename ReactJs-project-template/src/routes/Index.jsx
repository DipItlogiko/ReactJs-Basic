import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages--------
import Home from "../pages/Home"
import Error from "../pages/Error"
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import ShowBooks from "../freatures/books/ShowBooks"
import AddBook from "../freatures/books/AddBook"
import EditBook from "../freatures/books/EditBook"

function Index(){
    return(
        <div>
            <BrowserRouter>
            <Navbar />   {/* akhane amader navigation bar ba Navbar ta akhane oopore rekhechi amader route ar opore jar fole amader portita route ba page ar opore amader ai navigation bar ba NavBar ta dekhabe */}
            <main>
            <Routes>
                <Route path="/" element={<Home />}/>  
                <Route path="/show-books" element={<ShowBooks />}/>  
                <Route path="/add-books" element={<AddBook />}/>  
                <Route path="/edit-book" element={<EditBook />}/>  

                <Route path="*" element={<Error />} />               
            </Routes>
            </main>
            <Footer />  {/* akhane amra amader Footer take route ar niche likhechi jar fole amader protita route ba page ar niche amader ai Footer ta dekhabe */}

            </BrowserRouter>
        </div>
    )
}

export default Index