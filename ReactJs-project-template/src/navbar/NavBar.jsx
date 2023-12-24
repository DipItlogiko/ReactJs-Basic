import React from "react"
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div>
            <nav className="nav">
                <Link to="/" className="nav-link">Home</Link> {/* aivabe nav ar moddhe Link diye korle jokhon amader nav bar ar moddhe kono item take click kore oonno akta page ar moddhe jabe tokhon amader page ta rrr load hobe na oi page aaa jawar aage and "to" diye bole diyechi jodi amader ai Home nav item a click kora hoy tahole / ai path aaa chole jabe and ai path gulo ami amader src/routes/RoutesFile.jsx ar moddhe create korechi Route ar moddhe and amra jodi browser ar moddhe dekhi tahole dekhte pabo je amader nab bar ar kono item a click korle oi page ar moddhe niye jacche and oi nav item ta active hoye jacche nil color aa bydefault and jodi ami ai active ar bydefault nil color take change korte chai tahole amader Link ar jaigai NavLink use korte hobe and amader External css ar moddhe giye nav .active{ color: ""} je kono color set kore dite parbo */}
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/add-blog" className="nav-link">Add-Blog</Link>
            </nav>
        </div>
    )
} 
export default NavBar