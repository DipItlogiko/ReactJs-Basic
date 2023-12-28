import { GET_TODOS_FAILD } from "../constants/TodosConstant"  /////////akhane amader constants guloke import kore niye ashechi mane amader action ar type ar nam gulo jei file ar moddhe store kore rekhechi oi file ar moddhe theke oi variable guloke niye ashechi and jehetu amaer oi file ar moddhe theke amader ai variable guloke shudhu export korechi tai akhane import korar somoy amader variable ar nam gulo { } ar moddhe likhte hoyeche jodi amra amader oi page ar moddhe theke ai variable guloke export default kortam tahole amder akhne import korar somoy ai variable guloke { } object ar moddhe rakhte hoto na sora sori amra likhe dite partam variable ar nam gulo
import { GET_TODOS_SUCCESS } from "../constants/TodosConstant"
import { GET_TODOS_REQUEST } from "../constants/TodosConstant"

const initialTodosState = { //////akhane amra state create korchi 3ta tai oi state guloke akta object { } ar moddhe rekhechi and ai object { } take ami initialTodosState ai variable ar moddhe store kore diyechi..ami chile joto khusi toto state ai object { } ar moddhe define kore dite pari
    todos: [],
    isLoding: false,
    error: null,
}

const todosReduser = (state=initialTodosState , action) => {  //////Reduser hocche amader akta pure function...pure function mane hocche jokhon akta function kichu ta kichu return korbei tokhon oi function ke bole pure function....and jokhon amader kono action dispatch hobe tokhon oi action ta action ar moddhe theke action ar type oonujayi amader Reduser ar moddhe chole ashbe and Reducer ar moddhe theke amader action ar type oonujayi logic guloke handel kore state ta update hoye jabe and ai updated state ar value ta chole jabe amader store ar moddhe and store amader ai updated state ar value take View ar moddhe update kore debe.....amader Reducer ta state and action ai 2 ta jinish receive kore and state take ami amader ai initialCounterState variable ar value diye initialize kore diyechi and action ar moddhe amra 2 ta jinish pabo action.type jar moddhe amader action ar type ta pabe and action.payload jar moddhe amra amader action ar moddhe theke asha data ta pabo...
    ////===amra cahile ai switch na bebohar kore if else diye oo korte partam check GitHub ReactJs Basic repository useReducer() hook branch===///
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return{
                ...state,  /////akhane amader state ar moddhe ja ja ache sob akhane niye ashbe karon ami sprade oparator use korechi state ar sathe ...state
                isLoding: true, ////akhane amader state ar moddhe theke shudhu isLoding state ar value take update kore diyechi
            }
        case GET_TODOS_SUCCESS:
            return{
                error: null,   ////akhane amader state ar moddhe jei jei state ache sob state ke ami akhane likhechi tai ami ...state ta akhene likhi nai amader amader state ar moddhe theke sob state ke niye ashi nai sprade oparator ar maddhome ...state
                isLoding: false,
                todos: action.payload  ////akhane amader todos state ar value ta update hoye jabe .......amader todos state ar moddhe aage jei data gulo chilo oi data gulor sathe action.payload ar moddhe jei data gulo ashbe oi data gulo add hoye jabe amader todos state ar aager value ar sathe aita ...state.todos mane hocche amader todos state ar aager value gulo niye ashbe and action.payload ar moddhe jei data gulo ashbe oi data gulo amader todos state ar aager value ar sathe add hoye jabe.......
            }

        case GET_TODOS_FAILD:
            return{
                todos: [],
                isLoding: false,
                error: action.payload, /////action ar moddhe theke jei data ta ashebe payload ar moddhe oi datata amader error state ar moddhe update hoye jabe
            }            
    
        default:
            return state /////Reducer hocche akta pure function ...pure function mane hocche jei function input niye output kichu na kichu return kore tai jodi amder akhane kono action eee na hoy ba kono action na ashe tahole oooo amader state ar value ta return korbe karon amader Reducer function ta hocche pure function and ai pure function ar kaj hocche kichu na kichu return kora
    }
}

export default todosReduser
