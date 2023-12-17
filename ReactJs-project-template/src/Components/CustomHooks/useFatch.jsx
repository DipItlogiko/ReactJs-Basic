import React,{useState , useEffect} from "react"

function useFatch(url){   ///amader ai custom hook ta mane useFatch() take jei file ar moddhe use korbo and oi file theke amder ai useFatch hook ar moddhe jei Api ta pass kore debo oi api ba url ta akhane url variable ta receive korbe
     
   const [data, setData] = useState(null)     ///akhane useState hook use kore amra data nam aa akta variable ba state diclear korechi and akta function diclear korechi amader state ar value take update korar jonno ai nam aa setData and useState ar moddhe null diye amader data variable ba state ar value ke null diye inisiallize kore diyechi
   const [isLoading, setIsLoading] = useState(true)    ///akhane useState hook use kore amra isLoading nam aa akta variable ba state diclear korechi and akta function diclear korechi amader state ar value take update korar jonno ai nam aa setIsLoading and useState ar moddhe true diye amader isLoading variable ba state ar value ke true diye  inisiallize kore diyechi...karon amader oonek ReastFullAPI/RestAPI ar moddhe theke data load hote time lage tai amader API ar moddhe theke data load hote jodi beshi somoy ney tahole oitake handel korar jonno ami akhane ai state take create korechi
   const [error , setError] = useState(null)   ////akhane useState hook use kore amra error nam aa akta variable ba state diclear korechi and akta function diclear korechi amader state ar value take update korar jonno ai nam aa setError and useState ar moddhe null diye amader isError variable ba state ar value ke null diye inisiallize kore diyechi

    useEffect(()=> {          //// useEffect hook ar maddhome amra RestfullAPI/RestAPI ke hit kore data fatch kori ba jokhon amra timer use kori tokhon amra ai useEffect hook take use kori aabar jodi amra Dom(Document object Model) ke directly update korte chai shei khettre ooo amra useEffect hook take use kori....
        fetch(url)   ///amader opor theke jei url ta ashbe oi url ar ba API theke data facth korbe
        .then((res) => {         ////akhane .then() diye bolechi amader oporer RestfullAPI/RestAPI ke call korar pore jei respose ta  pabo oi response ta amader ai res variable ar moddhe store hoye jabe
            if(!res.ok){  ////jodi amader RestfullAPI/RestAPI ar moddhe theke thik thak vabe response na ashe mane mader amader response status ta jodi ok na hoy tahole nicher error message ta throw korbe
                throw Error("Data isn't fatched!");
            }
            return res.json()      ///akhane oi res variable mane amder response take json() aaa convart kore data take aikhan theke return kore diyechi
        }) 
        .then((data) =>{  ////API theke asha response ta json aa convart hoye jawar pore oi response ta amader data variable ar moddhe store hoye jabe
            setData(data)   ////and ami aikhane setTodo() function take call kore amader todos state take update kore diyechi data variable ar moddhe je data gulo ache oi data gulo diye
            setIsLoading(false)  ////jokhon amader oporer line aaa amader api theke asha data ta amader todos state ar moddhe store hoye jabe tar pore amader isLoading state ar value take ami akhan theke update kore diyechi false
            setError(null) ///jodi amader api ar moddhe theke data fatch hoye amader state ar moddhe store hoye jai successful tahole amader error state ar value ta aakhane ami aabar null kore diyechi...name kono error nei amader error state ar moddhe
        })
        .catch((error) => {  ///opor theke jodi amader error ta throw hoy tahole amader akhane oi throw kora error take akhane catch korbe and oi error take error variable ar moddhe store korbe
            setError(error.message) ///akhan theke amader error state ar moddhe value ta update hoye jacche error.message ar moddhe jei message ta ashche oi message diye
            setIsLoading(false) ////jodi amader API theke data fatch korar somoy kono error hoy tahole amader isLoading state ar value take ami akhane false kore diyechi mane amader loding message ta how korbe na jodi API theke Data fatch korar somoy kono error ashe tahole
        })
    }, [url])  ////akhane ami useEffect hook ar moddhe jei anonimous function ta ache oi function ar pore ami [] aita add kore diyechi mane dependency add kore diyechi [] mane amader jokhon ai component ar return ta render hobe kebol tokhon eee amader ai useEffect hook ta akbar eee call hobe....jodi amra ai dependency ta na dei [] tahole amader ai useEffect hook ta bar bar call hote thakbe...and akhane ami dependency ar moddhe url variable take pass kore diyechi mane jokhon eee kono notun API ba url ashbe amader url variable ar moddhe amader useEffect hook ta tokhon eee reload hobe
    

    return {  ///akhan theke ami  data , isLoading, error ai 3 ta state ke return kore diyechi akta object ar moddhe....
        data , isLoading , error
    }
}

export default useFatch