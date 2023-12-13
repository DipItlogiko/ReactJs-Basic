import React from 'react'

import Todo from './Todo'

function Todos(props) {
    //console.log(props)
    return (
        <div>
            <h1>here you are!!</h1>
            {props.datas.map((data, index) => (
                <Todo key={index} data={data} />
            ))}
        </div>
    )
}

export default Todos
