import { createStore , applyMiddleware } from 'redux' ////akhane redux javascript library ar moddhe theke createStore method take import korechi store create korar jonno and applyMiddleware take import korchi amader store ar moddhe Middleware use korar jonno
import {thunk} from 'redux-thunk' /////aakhane amader ReactJs project ar moddhe amra ai redux-thunk middleware ta install korechi and ai redux-thunk Middleware ar maddhome amra asyncronous action create korte pari and oi action ar moddhe API theke data fetching ar kaj korte pari asyncronous vabe

import todosReduser from './services/reducers/TodosReducer'


const Store = createStore(todosReduser , applyMiddleware(thunk)) /////amra jani amader kono action dispatch howar pore oi action ar type oonujayi amader Reduser ar moddhe jabe and Reducer ar modddhe theke amader action ar type oonujayi logic handel kore state ar value ta update hoye amader store ar moddhe chole ashbe tai amader todosReduser ar moddhe theke jei updated state ar value ta ashbe oi value ar jonno amra akta store create korechi redux ar createStore method take call kore and oitake Store variable ar moddhe sote kore diyechi....amader ai createStore() method ta 2ta jinish  accept kore Reducer and middleware .....and kono middleware use korte hole oi middleware take amader applyMiddleware ar moddhe rakhte hobe 

export default Store