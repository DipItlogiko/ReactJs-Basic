import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'  /////akhane amader Store ar data take amader ReactJs project ar moddhe Provide korar jonno react-redux package ar moddhe theke Provider take import korechi jar kaj hocche provider kora ba prodan kora 
import Store from './store.jsx'  ////amra jei store ta create korechi oi Store take akhane import korechi and amder ReactJs project ar moddhe aita hocche amader root file mane sobar parent ai file ta ai amra jai store ta create korechi mane amader Store ar moddhe jei updated state ar value ta ache ami akhan theke publically set kore dite pari tahole amader ai parent ar sob child amader ai Store ar data ke access korte parbe

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
<Provider store={Store}>  {/* akhane Provider dara rap kore amader store variable ar moddhe Store take set kore diyechi golobally tai amader main.jsx ar sob child gulo amader ai Store ar value gulo access korte parbe */}
   <App />
</Provider>
)
