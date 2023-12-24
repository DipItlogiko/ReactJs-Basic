import React,{ useState } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom" 

////Pages------
import Home from "../pages/Home"
import AddBlog from "../pages/AddBlog"
import About from "../pages/About"
import Error from "../pages/Error"
import NavBar from "../navbar/NavBar"
import Protected from './Protected'

function RoutesFile(){
    const [isLoggedIn, setIsLoggedIn] = useState(false) //// akhane ami isLoggedIn nam aa akta state niyechi and setIsLoggedIn nam aa akta function niyechi amader ai isLoggedIn state ar value take update korar jonno...

    return(
        <div>
            <BrowserRouter>
                  <NavBar />
                  {isLoggedIn ? <button onClick={(e)=>{setIsLoggedIn(!isLoggedIn)}}>Logout</button> : <button onClick={(e)=>{setIsLoggedIn(!isLoggedIn)}}>Login</button> }     {/* akhane ami ternary operator ta use korechi jodi amader isLoggedIn state ar value ta true hoy tahole Logout button ta show korbe and jodi amader isLoggedIn state ar value ta jodi false hoy tahole Login button ta  show korbe and jokhon eee amader kono button aaa click kora hobe tokhon ee amader onClick event ta fire hobe and amader oi event take listen korbe amader inline functional approch and amader setIsLoggedIn function take call kore amader isLoggedIn state ar value take update kore debe false thakle true and true thakle false '!isLoggedIn' aitar maddhome */}
              <Routes>
                {/* Public Route */}  {/* ai route guloke je kew access korte parbe tai aagulo ke bola hoy public route */}  
                 <Route path='/' element={ <Home /> } />  
                 <Route path='/about' element={ <About /> } />
                 
                 <Route path='*' element={ <Error /> } /> {/* jodi eemon kono url ba route diye amader browser ar moddhe hit kora hoy jei url ba route ta amra create kori nai tokhon oi url ta amader ai * astric path ar moddhe chole ashbe and amader Error Component ar moddhe jei content gulo ache oi content guloke show korbe browser ar moddhe */}

                 {/* Protected Route */}
                 <Route path='/add-blog' element={ <Protected isLoggedIn={isLoggedIn}> <AddBlog /> </Protected>} />  {/* akhane amader ai route take protected kore diyechi mane Authenticated user mane signUp and signIn kore jei user amader application ar moddhe dhukbe kebol oi user guloi amader ai route ar moddhe jete parbe....jodi kew login kora chara amader ai /add-blog url aa hit kore tahole amader Protected component ar moddhe jabe aaage and oi Protected component ar moddhe amader ai <AddBlog /> component take niye jabe Protected Component ar children hishebe and amader Protected component ar moddhe amara amader state ar value take props aakare pass kore diyechi  */}


                
              </Routes>
            </BrowserRouter> 
        </div>
    )
}

export default RoutesFile