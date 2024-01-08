import React from 'react';

import Counter from './components/Counter';

function App() {
  return(
    <div style={{ textAlign : "center" }}>
      <h1>Typing useReducer Hook</h1>

      <Counter />  {/* akhane amader Counter.tsx component ke call kora hoyeche */}
    </div>
  )
}

export default App