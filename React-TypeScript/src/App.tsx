import React from "react";

import Button from "./components/Button";
import Post from "./components/Post";

function App() {
  return(
    <div style={{ textAlign: "center" }}>
     <h1>children props</h1>

     <Button>Click me</Button>  {/* akhane amader Button Component take call kore tar moddhe Click me string take pass kore diyechi and ai Click me string take amder Button component ta Children Props aakare receive korbe*/}
     <Post /> {/* akhane Post Component take Call kora hoyeche */}

    </div>
  )
}

export default App