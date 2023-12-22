import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='nav'>
            {/* <ul>
                <a href="/home">Home</a>
                <a href="/blogs">Blogs</a>
                <a href="/contact">Contact</a>
            </ul>      */}
           
           {/* amra oporer ai vabe korbo na karon amra jodi ooporer ai vabe ul ar moddhe a tag ar moddhe oivabe kori tahole dekha jabe jokhon ee amader ooono akta page ar moddhe jabe click korar pore tokhon page ta reload hoye tar pore oi page ar moddhe jabe ai problem take solve korar jonno amra ReactRouter package ar moddhe theke Link take use kore oi oporer kaj ta korbo */}

           <Link to="/home" className='nav-link'>Home</Link>    {/* aivabe nav ar moddhe Link diye korle jokhon amader nav bar ar moddhe kono item take click kore oonno akta page ar moddhe jabe tokhon amader page ta rrr load hobe na oi page aaa jawar aage and "to" diye bole diyechi jodi amader ai Home nav item a click kora hoy tahole /home ai path aaa chole jabe and ai path gulo ami amader App.jsx ar moddhe create korechi Route ar moddhe and amra jodi browser ar moddhe dekhi tahole dekhte pabo je amader nab bar ar kono item a click korle oi page ar moddhe niye jacche and oi nav item ta active hoye jacche nil color aa bydefault and jodi ami ai active ar bydefault nil color take change korte chai tahole amader Link ar jaigai NavLink use korte hobe and amader External css ar moddhe giye nav .active{ color: ""} je kono color set kore dite parbo */}
           <Link to="/contact" className='nav-link'>Contact</Link>
           <Link to="/blogs" className='nav-link'>Blogs</Link>
        
        </nav>
        </div>
    )
}

export default Navbar
