import React from "react";

import NewUser from "./components/NewUser";

function App() {
  return(
    <div style={{ textAlign: "center" }}>
      <h1>Typing Events</h1>

      <NewUser />   {/* akhane amader NewUser Component take call korechi */}
    </div>
  )
}

export default App