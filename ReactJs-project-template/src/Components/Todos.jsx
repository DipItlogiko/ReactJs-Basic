import React from 'react'

import Todo from './Todo'

function Todos(props){
    const { datas } = props 
     
    return(
        <div className='todos'>
           {datas.map((data) => <Todo key={data.id} {...data} />)}
        </div>
    )
}

export default Todos