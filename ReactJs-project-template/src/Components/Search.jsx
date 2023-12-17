import React ,{useState , useEffect} from 'react'

function Search(props){
    const [searchText , setSearchText] = useState('')

    const handleChange = (e) => {
        setSearchText(e.target.value)
         
    }

    useEffect(() => {
        props.onDataFromChildComponent(searchText)
    }, [searchText])

    return(
        <div style={{ textAlign: 'center' }}>
            <input type="text" placeholder="Search Country" value={searchText} onChange={handleChange} />
        </div>
    )
}

export default Search