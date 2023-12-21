import React,{ useState }  from 'react'

export const UsersContext = React.createContext() ////ai React.createContext() amader 2 ta jinish provide korbe  Provider and Consumer amra aikhane provider ta use korbo and Consumer ar poriborte useContext Hook ta use korbo amader context ar data take access korar jonno 



const UsersProvider = ({children}) => {  //// ai UsersProvider function take call kore ba ai rapper ta ke call kore ai rapper ar moddhe jei child component gulo pass kore dewa hobe oi child component  gulo amader ai children parameter ar moddhe chole ashbe
    const UsersData = [
        {
            id: 1,
            name: 'John',
        },
        {
            id: 2,
            name: 'Dip',
        }
    ]

    const [users , setUser] = useState(UsersData)   ////akhane amader users state ba variable  ar value take UsersData variable ar value diye inisilize kore diyechi
    
    return  <UsersContext.Provider value={{ users , setUser }}>  {/* akhane amra src/ContextAPI/UsersContext.jsx ar moddhe jei context ta create kore akta variable ar moddhe store kore diyechi oi variable ar moddhe theke amra 2 ta jinish pabo ja amara jani provider and Consumer amra Consumer ar poriborte useContext hook take use korbo amader ai globla state ar value take access korar jonno and UsersContext ai variable ar moddhe theke provider ar maddhome value diye 2 ta state ar value ke golobal eee set kore diyechi and amader ai parent component ar moddhe theke amader child component guloke prodiver dara rap kore diyechi jar fole amader ai App component mane parent component ar moddhe ba under aa joto gulo child component ache oi sob child componet ai global eee set kora state ar value  take consume ba access korte parbee useContext Hook ta use kore jemon ami akhane value ar moddhe 2 ta jinish ke Global eee set kore diyechi tai oi 2ta ke { } curly braces ar moddhe rekhechi jodi 1 ta hota tahole amara single { } curly braces ar moddhe rakhtam .....and jehetu ami state ar value guloke golble eee set kore diyechi tai amader child component gulo useContext hook use kore ai global state ar value gulolke access korte parbe kono prop drilling charai */}
           {children}   {/* akhane amader oi child componet gulo chole ashbe and oi child component gulo amader ai Global state gulo value consume ba access  korte parbe kono dhoroner prop drilling charai   */}
        </UsersContext.Provider> 
}

export default UsersProvider