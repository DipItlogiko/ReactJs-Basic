import React from 'react'

function Modal(props){
    const { modalText } = props
    return(
        <div>
            <p>{modalText}</p>
        </div>
    )
}

export default Modal