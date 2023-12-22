import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' ////amader ReactJs project ar moddhe Routing ar facility take add korar jonno amra ReactRouter package take install kore niyechi amader ai ReactJs project ar moddhe and install hoye jawar pore ami aikhane react-router-dom theke BrowserRouter , Routes , Route  import korechi

//pages--------
import Index from './Pages/Index'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Blog from './Pages/Blogs'
import Error from './Pages/Error'

function App() {
    return (
        <div>           
            <BrowserRouter>  {/* akhane ami structure ta likhechi jemon amader BrowserRouter ar moddhe thakbe Routes and Routes  ar moddhe thakbe Route */}
                <Routes>
                    <Route path='/' element={ <Index /> } /> 
                    <Route path='/home' element={ <Home /> }/> {/* akhane ami path='/home' aita diye bole diyechi amader route ar path ta and element={ <Home /> } aikhane element ar moddhe ami amader Home Component take likhe diyechi johon kew amader ai ReactJs porject ta browser aaa run kore jokhon /home route take hit kora hobe browser aaa tokhon amader ai element ar moddhe jei Home component ta ache oi conponent ar moddhe jei content gulo ache oi content gulo dekhabe  amader browser ar moddhe*/}
                    <Route path='/contact' element={ <Contact /> } />
                    <Route path='/blogs' element={ <Blog /> } />

                    <Route path='*' element={ <Error /> } />  {/* akhane ami path='*' aita mane hocche jodi eemon kono route ba url diye amader browser ar moddhe hit kora hoy jei route ba url ta amra create kori nai tokhon oi route ba url ta amader ai astic "*" path ar moddhe chole ashbe and akhane amader element ar moddhe jei Component ta ache oi Component ar moddhe jei content gulo ache ta browser ar moddhe show korbe */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
