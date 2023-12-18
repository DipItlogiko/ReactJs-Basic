import React,{useState , useEffect} from 'react'

function Search(props){
    const [searchText, setSearchText] = useState('')

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    useEffect(()=> {
       props.onGetDataFromChildComponentSearch(searchText) ////akhane amader searchText state take amader App parent Component ar moddhe pass kore diyechi
    }, [searchText])  /// akhane useEffect Hook ar moddhe ami anonimous function ar pore akta dependency add kore diyechi [searchText] mane amader searchText state ba variable ar value ta joto bar update hobe totobar amader ai useEffect hook ta call/render hobe

    return(
        <div>
            <input type="text" placeholder='Search User' value={searchText} onChange={handleChange}/>
        </div>
    )
}

export default Search