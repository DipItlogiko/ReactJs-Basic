import React from "react"
 
import PostsView from "./freatures/post/PostsView" 

function App(){
    return(
        <div style={{ textAlign: 'center' }}>
            <h1>fatching data from API with reduxToolkit</h1>
            <h2>All Post</h2>

            <PostsView />
             
        </div>
    )
}

export default App