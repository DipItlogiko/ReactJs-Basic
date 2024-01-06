import React from 'react' 

import User from './components/User'

function App() {
 

  return (    
      <div style={{ textAlign: "center" }}>
        <h1>React-TypeScript</h1>

        <User name="dip" age={20} isRegistered={false} />  {/* akhane amader User component take call kore props aakare kichu data pass korechi amder User component ar moddhe....and amader protita component file ar seshe .tsx diyechi karon ami ReactJs ar sathe TypeScript use korchi tai component ar sathe .tsx extention ta add kore diyechi tsx mane hocche type script xml */}
        <User name="dibbo" age={17} isRegistered={true} />
      </div>
  )
}

export default App
