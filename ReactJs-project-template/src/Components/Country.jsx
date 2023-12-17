import React from "react"

function Country(props){  ///amader props ar moddhe 2 ta jinish ashbe country nam aaa akta object ashbe and id ashbe and ai country object ta and id ta akta object akare amader props ar moddhe ashbe tai amader ai props ar moddhe theke dataguloke distructruing kore ber kore ante hobe 
    const { country } = props
    const{ name , flags ,capital , population , area } = country
    
    const handleRemoveCountry = (name) => {
        props.sendDataToParentComponent(name)
    }
    
    return(
        <div>
            <article className="country">
               <div>
                 <img className="flag" src={flags.png} alt="" />
                 <h3>Name: {name.common}</h3>
                 <h3>Population: {population}</h3>
                 <h3>Capital: {capital}</h3>
                 <h3>Area: {area}</h3>
                 <button className="btn" onClick={()=>{handleRemoveCountry(name.common)}}>Remove</button>
               </div>
            </article>
            
        </div>  
    )
}

export default Country