////=======amra amader freature ar sob logic gulo ai slice file ar moddhe likhbo ========//// 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"  /////amra jei redux toolkit package take install korechi amader ai ReactJs project ar moddhe oi package ar moddhe theke amara createSlice method take import korechi slice create korar jonno and createAsyncThunk take import korechi amader asyncronoys action create korar jonno amra jemon ta jani redux-thunk hocche amader akta middleware jar maddhome amra asyncronous action create korte pari and oi asyncronous action ar moddhe amra API theke data fetch korte parchi
import axios from "axios"  ////akhane axios package take install kore amader axios take import kora hoyeche....and axios diye amader API ar moddhe theke data fetch kora hoy  amra chaile amader ReactJs ar builtin useEffect() Hook use kore ooo API ar moddhe theke data fetch korte pari

///jokhon ee amader fetchPosts ai action ta dispatch hobe amader API theke data fetch hobe 
export const fetchPosts = createAsyncThunk("posts/fetchPosts" , async()=>{  ////akhane fetchPosts nam aa akta variable niyechi and ai fetchPosts variable ar moddhe amra createAsyncThunk method take call korechi and tar moddhe posts likhechi ai posts ta hocche amader Reducer ar nam jei ta amra createSlice ar moddhe likhechi and /fetchPosts aita hocche mader action ar nam akhane amra je kono nam dite pari and tar pore amra async()=>{ } action create korechi and ai asyncronous action ar moddhe amader API theke data fetch korechi.....amra jani Thunk  hocche akta middleware jar maddhome amra asyncronous action create korte pari and oi asyncronous action ar moddhe amra API theke data fetch korte pari
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")   ////akhane ami axios.get ar maddhome amader API theke data fetch korchi and akhane await use korar karon hocche ami asyne use korechi ooopore tai and ai await lekhar r akta karon hocche jotokhon porjonto na amader ai line ar kaj ta sesh hobe mane amader API theke data fetch kora sesh na hobe totokhon porjonto amader nicher line aaa jabe na
    
    return res.data /////akhane ami res variable ar moddhe  theke jei data ta pacchi oi data take return kore diyechi 

})


const postSlice = createSlice({ ////// createSlice() hocche akta method jar sahajje amara amader logic guloke aakotre likhe thaki and ar createSlice method ar moddhe amra 3ta important proparty use korte pari jemon `name` , `state ` , `reducer`
    name: "posts", //akhane ami akta name diyechi jehetu ami akhane posts freture niye kaj korte chacchi tai ai name ar moddhe posts likhechi...amra chaile je kono num akhane dite pari

    initialState: { ///akhane amra initialPostState nam aa akta variable  niyechi and tar moddhe posts, isLoading ,error 3ta state  niyechi and tader kichu initial value set kore diyechi amra chaile amader proyojon oonujayi aakhane r oo state create korte pari 
        posts: [],
        isLoading: false,
        error: null,
    },

    extraReducers: (builder) => { ////akhane builder dara amder fetchPosts variable ar moddhe theke jei status gulo ashbe oi status guloke handel korte parbo....jemon amader fetchPosts variable ar moddhe panding status ashte pare ba fulfield status ashte pare mane amader API theke Data ta successfully fetch hoyeche ba rejected Status ashte pare and ai status guloke handel korbe builder  
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchPosts.fulfilled, (state , action)=> {  ///akhane amder fetchPosts variable ar moddhe theke jodi fulfilled status ta ashe tahole amader state gulo ami aikhane je vabe set korechi oi vabe set kore debe
            state.isLoading = false;
            state.posts = action.payload ; ////akhane amader state ar moddhe jei posts ta ache oi post state ar value take action theke  payload ar moddhe jei data ta ashche oi data ta amader  posts state ar moddhe set hoye jabe 
            state.error = null; 
        });

        builder.addCase(fetchPosts.rejected, (state , action) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;  ////akhane action  ar moddhe jei error ta ashbe oi error ar moddhe theke message ta ke amader error state ar moddhe update kore debe
        });
    },

    
});

export default postSlice.reducer   ////akhane amra postSlice name aaa jei slice ta create korechi oi postSlice take akhan theke export kore diyechi and export korar somoy amder .reducer aita likhe dite hobe