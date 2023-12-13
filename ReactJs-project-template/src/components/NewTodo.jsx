import React from "react"

function NewTodo(props){
    props.onHandelChildData({age:30}) /// amader ai onHandelChildData method ar moddhe amra akta object pass kore diyechi ai object ta amader parent component ta receive korbe
    return(
        <div>
            <h1>New Todo!!!</h1>
        </div>   
    )
}

export default NewTodo