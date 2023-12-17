import React ,{useState , useEffect} from 'react'

import Countries from './Components/Countries'
import Search from './Components/Search'

function App(){
    const [countries, setCountry] = useState([])
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const LodingMessage = "Loading ..."

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => {
            if(!res.ok){
                throw Error('Faild to Fetch data from API!!')
            }
            return res.json()
        })
        .then((data) => {
            setCountry(data)
            setFilteredCountries(data)
            setIsLoading(false)
        })
        .catch((error) => {
            setError(error.message)
            setIsLoading(false)
        })
    }, []);

    const dataFromChildComponent = (name) => {
        const filter = filteredCountries.filter((country) => country.name.common !== name)  ////akhne ami filter korechi amader child component ar moddhe theke je name ta ashche amader ai parent component ar moddhe oi name ar sathe amader record ar jei country name gulo match korbe na shudhu oi country name gulo amader filter variable ar moddhe giye store hobe and jodi amader child component ar moddhe theke aasha name ta amader record ar sathe match kore jai tahole oi take bad diye debe amader record theke 
         
        setFilteredCountries(filter)
    }

    const DataFromChildComponent = (searchValue) => {
        let value = searchValue.toLowerCase()  ///amader search ar moddhe jei valu ta dewa hobe oi value ta akhane  Lowercase aa convart kore niyechi mane ke boro hater letter dile oitake choto hater letter aaa convart kore nebe
        const newCountries = countries.filter((country) => {  /// ai countries ar moddhe theke akta akta kore object amader country ar moddhe ashbe 
            const countryName = country.name.common.toLowerCase()  /// akhane country ar moddhe jokhon akta akta kore object ar moddhe ashbe tokhon oi portita object ar moddhe theke jei name ta ache and name ar moddhe jei common ta ache oi common ar value take ami lowercase aaa convart kore diyechi
             
            return countryName.startsWith(value) /////akhane amder data ar moddhe theke shudhu oi sokol country ke filter korar pore return korbe jei country ar nam ta start hobe amader search ar value ar sathe oi country ar nam gulo amader data ar moddhe theke return korbe
        })
        console.log(value)

        setFilteredCountries(newCountries) ////  amader newCountries ai variable ar moddhe search ar value ar sathe match kore jei country ar nam gulo pabe amader data ar moddhe theke oi country ar nam gulo amader ai newCountries variable ar moddhe store hoye jabe  and amader setFilteredCountries ai function take call kore amader filteredCountries state ba variable take update kore diyechi amader ai newCountries variable ar value diye ..
    }

    return(
        <div>
           <h1>Country App</h1>
           <Search onDataFromChildComponent={DataFromChildComponent} />
           {isLoading && LodingMessage}
           {error && error}

           {countries && <Countries  countries={filteredCountries}  onDataFromChildComponent={dataFromChildComponent} /> } {/* akhane ami prothome amader state mane countries state ar moddhe jodi data thake ba countries state ar value ta jodi true hoy tahole amader && and operator ta porer pash aaa jabe mane  amader Countries component ar moddhe countries state ar value take pass kore debe amader prothom a aita 'countries &&' chack korar karon hocche jodi amra aita na likhi tahole amra akta error face korbo error ta hocche empty mapping kora jabe na and ai error take resolve korar jonno amra prothom aa aita check korechi 'countries &&'  abong akhane ami onDataFromChildComponent ai key ar moddhe amader  ai dataFromChildComponent method take pass kore diyechi amader child component ar moddhe theke ai parents component ar moddhe data aanar jonno */}
        </div>
    )
}

export default App