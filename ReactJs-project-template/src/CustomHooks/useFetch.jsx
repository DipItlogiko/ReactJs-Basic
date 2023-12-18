import React,{useState , useEffect} from 'react'

function useFetch(API){  ////amader create kora ai Custom hook mane useFetch() hook take kono file ar moddhe import kore jokhon useFetch(ar moddhe kono API pass kora hobe) tokhon amader ai API paramiter ta oi pass kora api guloke receive korbe
    const [users , setUser] = useState([])    
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState(null)

    
    useEffect(() => {
        fetch(API)
        .then((res) =>{
            if (!res.ok){
                throw Error('Faild to fetch data from API')
            }

            return res.json()
        })
        .then((data) => {
            setUser(data)            
            setIsLoading(false)
            setError(null)
        })
        .catch((error) => {
            setError(error.message)
            setIsLoading(false)
        })
    }, [API])  ////joto bar amader useFetch() function ta api receive korbe toto bar amader ai useEffect hook ta call hobe ba render hobe jeita amai amader useEffect hook ar moddhe anonimous function ar pore bole diyechi dependency ar moddhe [API] and jokhon jei api ta ashbe oi api theke data fatch kore protita state ar moddhe data load kore niche amader ai state gulo return kore debe
  
    return{ users , isLoading , error } 
}

export default useFetch