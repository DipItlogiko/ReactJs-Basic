import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Country from './Country'

function Countries(props){
    const { countries } = props
    return(
        <div>
            <section className='countries'> 
               {countries.map((country) => {  ///akhane countries ar moddhe akta akta kore country ar object ashbe amader country variable ar moddhe
                  const countryNew = {country, id: uuidv4()}  ////jehetu amader country variable ar moddhe jei country variable ar object gulo ashche protibar oi object gulo ar moddhe kono id nei tai jokhon eee amader country variable ar moddhe akta akta kore object ashbe oi object ar moddhe ami akhan theke akta unique id create kore dicchi uuid ar maddhobe..prothom aaa uuid ta amader ReactJs project ar moddhe install korte hobe then opore import korte hobe             
                 
                  return <Country key={countryNew.id}  {...countryNew}  sendDataToParentComponent={props.onDataFromChildComponent} /> ///akhane amader oi object take pass kore diyechi sprade operator ar maddhome oi object take distructruing kore akbare pass kore diye amader Country component ar moddhe and amader ai countryNew variable  ar moddhe country nam aa akta object ache and id ache
               
               })}
            </section>
        </div>
    )
}

export default Countries