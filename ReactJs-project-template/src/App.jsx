import React , {useState , useEffect} from "react" 

import Users from "./Components/Users"


function App(){
    const [users , setUser] = useState(null)
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState(null)

    const LoadingMessage = "Users Loading..."

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if(!res.ok){
                throw Error('fatching is not successful')
            }
            return res.json()
        })
        .then((data) => {
            setUser(data)
            setIsLoading(false)
             
        })
        .catch((error) => {
            setError(error.message)
            setIsLoading(false)
            
        })
        
    }, [])
    
    return(
        <div>
            <div className="container">
                <h1 className="title">Users Management App</h1>

                {isLoading &&  LoadingMessage }
                
                {error && error }

                <Users users={users} />
            </div>
        </div> 
    )
}

export default App