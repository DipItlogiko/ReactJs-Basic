////////========ai file ta hocche amder akta custom Hook ar file and ai file ta ami custom hook file create ar naming convention mene mane file ar aaage use aita bebohar kore amader ai file ta create korechi=====////
import React,{ useContext } from "react"  ////akhane ami useContext Hook take import korechi amader react module theke 


import { UsersContext } from "../Components/UsersContext" ////amra jei context take create korechi amder WithCustomHook/ContextAPI/UsersContext.jsx ar moddhe oi file ar moddhe ami akta variable ar moddhe  amader createContext() take define kore rekhechi and amader oi file ar moddhe theke amader oi variable take import korechi

export const useUsersContext = () => {
    return useContext(UsersContext)   /////amra jemon useContext hook take call kore amader global state ar value gulo consume kortam ba access kortam amader protita child component ar moddhe oi jinish take ami ai useUsersContext function ar moddhe rekhe diyechi to jokhon ee amader ai function ta call hobe amader aita return korbe useContext(UsersContext) and aitar maddhome amra amder global state ar value gulo access ba consume korte parbo amader Child component ar moddhe
}