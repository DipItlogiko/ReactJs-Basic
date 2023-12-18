import React,{ useState , useEffect } from 'react'


import useFetch from './CustomHooks/useFetch'
import Users from './Components/Users'
import Search from './Components/Search'

function App(){
   
    const { users , isLoading , error } = useFetch('https://jsonplaceholder.typicode.com/users') ////akhane amader custom hook useFetch ke call kore akta api pass kore diyechi and oi useFetch ar moddhe theke amader data ta fatch hoye amader 3 ta state return korche jei state 3 ta ami aikhane { } ar moddhe rekhechi

    const [filteredUsers , setFilteredUsers ] = useState(users)  ///akhane ami amader filteredUsers state ta ba variable take  inisilized kore diyechi amader users state ar value diye
    
     
    useEffect(() => {
        setFilteredUsers(users)   ////akhane amader  filteredUsers state ar value take update kora hoyeche users state ar value diye    
    }, [users]) /////akhane amader useEffect ar moddhe dependency  ar moddhe users state ar nam ta diye diyechi je state ta amader useFetch.jsx ar moddhe theke ashche...jokhon ee amader ai users variable ba state ar moddhe data ashbe tokhon eee amader ai useEffect hook ta call hobe ba render hobe


    const LoadingMessage = 'Loading...'


    const getDataFromChildComponentUser = (id) => {
        const filter = filteredUsers.filter((user) => user.id !== id)  /////akhane id ta ashche amader child component User theke jokhon kew delete button ar moddhe click korbe tokhon oi id ta amader User Component ar moddhe theke amader ai Parent Component ar moddhe chole ashbe mane App Component ar moddhe chole ashbe and amader filteredUsers ar moddhee jei data gulo ahche oi data ar moddhe theke akta akta kore user ar object user variable ar moddhe ashbe and ai variable ar moddhe theke ami filter korechi amader portita object ar moddhe jei id ta ache oi id tar sathe jei amader Child component theke asha id ar sathe jei gulo match korbe na oi data gulo filter hoye amader filter variable ar moddhe store hoye jabe....
         
        setFilteredUsers(filter)
    }

    const getDataFromChildComponentSearch = (searchValue) => {
        let value = searchValue.toLowerCase()
        const newUsers = users.filter((user) => {  ////akhane amader search ar value diye amader users state ar moddhe theke filter kora hocche karon amader users state ar moddhe all data ache tai oi users state ar modddhe theke search ar value take filter kora hoyeche and amader ai users state ta ashche useFetch.jsx ar moddhe theke...users state ar moddhe theke akta akta kore object amader user ar moddhe ashbe
            const userName = user.name.toLowerCase()  ////user variable ar moddhe jei object ta ashbe oi object ar moddhe jei name ache oi name ar value take akhane lowercase aa convart kora hoyeche mane choto hater ookkhore convart kora hoyeche

            return userName.startsWith(value)  ////and filtering ar pore amder ai khan theke return kora hoyeche userName mane amader object ar moddhe jei name ache oi name ar moddhe jei name gulo amader ai value variable ar value diye shuru hobe oi object guloke return korbe
        })

        setFilteredUsers(newUsers) 
    }
 
     
    return(
        <div>  
           <div className='container'>
            <h1 className='title'>Users Management App</h1>
            <Search onGetDataFromChildComponentSearch= {getDataFromChildComponentSearch} />

            {isLoading && LoadingMessage}  {/* akhane amai short carkit ar maddome korechi jodi isLoading variable ar value ta jodi true hoy ba jodi kono value thake tahole '&&' and operator ta amader porer pash aa jabe aita ke ami chaile ternay operator diye ooo korte partam ai vabe {isLoading ? LoadingMessage : null} akhane check korbe jodi isLoading variabl ar value  ta jodi true hoy ba or moddhe jodi kono value thake tahole LoadingMessage variable ar value take print korbe and jodi isLoading variable ar value ta jodi false hoy ba ar moddhe jodi kono value na thake tahole null print korbe mane kichui print korbe na */}
            {error && error}  {/*  akhane amai short carkit ar maddome korechi jodi error variable ar value ta jodi true hoy ba jodi kono value thake tahole '&&' and operator ta amader porer pash aa jabe aita ke ami chaile ternay-operator(jar 3ta part thake take tarnary operator bole) diye ooo korte partam ai vabe {error ? <p style={{color: 'red'}}>{error}</p> : null} akhane check korbe jodi error variabl ar value  ta jodi true hoy ba or moddhe jodi kono value thake tahole p tag ar moddhe amder error message ta pring korbe and jodi error variable ar value ta jodi false hoy ba ar moddhe jodi kono value na thake tahole null print korbe mane kichui print korbe na */}

           {users &&  <Users users={filteredUsers}  onGetDataFromChildComponentUser={getDataFromChildComponentUser}/>}  {/* akhane amader Users component ar moddhe users variable ar value take pass korar aage ami aita users && likhechi karon jodi ami aita na likhi tahole amader akta error dekhabe je empty variable ar value map kora jabe na tai ami users && aita likhechi mane akhane check korbe jodi amader users variable ar value ta jodi true hoy ba ai users variable ar moddhe jodi kono data thake tahole amader '&&' and operator ta porer pash aa jabe  */}
           </div>
        </div>
    )
}

export default App