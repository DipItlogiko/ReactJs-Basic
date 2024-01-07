import React from "react";

import NewUser from "./components/NewUser";

function App() {
  return(
    <div style={{ textAlign: 'center' }}>
      <h1>Form Event Type</h1>

      <NewUser /> {/* akhane amader NewUser.tsx component take call kora hoyeche*/}
    </div>
  )
}

export default App