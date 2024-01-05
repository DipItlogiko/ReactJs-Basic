import { createSlice } from "@reduxjs/toolkit"  /////amra amader ai ReactJs project ar moddhe redux toolkit package take install korechi ReactJs porject ar moddhe redux ar kaj ta rrr ooo sohoje korar jonno...amra jani redux hoccche javascript ar akta library....and redux ta kaj kore muloto jokhon amader amra kono action perform kori ba jokhon kono action dispatch hoy tokhon amader oi action ar type oonujayi amader oi action ta reducer ar moddhe jai and amader reducer ta amader action ar type oonujayi amaer logic gulo handel kore state take update kore debe and oi updated state ta Store ar moddhe chole jabe and amader Store ar moddhe theke amader View ta update hoye jabe ai vabeee muloto amader redux javascript library ta kaj kore.....and akhane amader redux toolkit theke createSlice take import korechi Slice create korar jonno

const BooksSlice = createSlice({  ////// akhane akta Slice create korechi Slice bolte redux(javascript library) ar vasai kono freature ar collection of logic ke bojhai jekhane kono freature ar sob logic gulo thakbe  ...and createSlice() method ar moddhe 3 ta jinish thakbe name, initialState , reducers
    name: 'Books',  ////akhane amader Slice ar nam diyechi Books...jehetu amader Books Related sob logic gulo amader ai Slice ar moddhe thakbe tai amra aikhane nam diyechi Books

    initialState: {  ////akhane amra books nam aa akta state niyechi and ai books state ar moddhe kichu initial value set kore diyechi amra chaile akhane r oo state create korte pari and oi state gulor moddhe amra initial value set kore dite pari
        books: [
            {id: 1, title: "Love Bangladesh", author: "Dip"},
            {id: 2, title: "Love England", author: "kabil"},
            {id: 3, title: "Love Aus", author: "Jon"},

        ],
    },

    reducers: {   //// jokhon amader kono action dispatch hobe tokhon oi action ar type oonujayi amader ai reducers ar moddhe ashbe and reducers ar moddhe theke amader action ar type oonujayi logic gulo handel kore state take update kore Store ar moddhe Store kore debe and Store ar moddhe theke amader View Ta update hoye jabe and amra dekhte pabo
        showBooks: (state) => {
            state.books   /////jokhon amader showBooks action ta dispatch hobe tokhon amader state ar moddhe books nam aa jei state ta ache oi state ar value ta amader Store ar moddhe Store kore dibe and Store amder View take update kore debe and amra dekhte pabo
        },

        addBooks: (state, action) => {
            state.books.push(action.payload)   ///// jokhon amader addBooks action ta dispatch hobe tokhon amader action ar moddhe theke kicu data ashbe new book ar oi data guloke akhane ami action ar moddhe theke payload ar moddhe theke pabo tai ami akhane action.payload aita diye oi data guloke receive korechi and amader books state ar moddhe push kore diyechi mane add kore diyechi amader books state ar moddhe jei array ta ache oi array ar moddhe
        },

        updateBooks: (state, action) => {   ///// jokhon amader updateBooks action ta dispatch hobe tokhon amader action ar moddhe theke kicu data ashbe oi data guloke akhane ami action ar moddhe theke payload ar moddhe theke pabo tai ami action.payload likhechi
            const {id , title, author} = action.payload  /////akhane action.payload ar moddhe theke jei object take pacchi oi object take ami akhane distructuring korechi amader action.payload ar moddhe theke....jehetu amader action.payload ar moddhe theke object pacchi tai distructuring korar somoy amader oi object ar key guloke { } carly braces ar moddhe rekhechi jodi amader action.payload ar moddhe array aakare data ashto tahole distructuring korar somoy amra [ ] ar moddhe rakhta amader key guloke
            const isBookExist = state.books.filter((book) => book.id === id)  //////akhane ami amader books state ar moddhe theke filter korechi akta akta kore amader book ar object book ar moddhe ashbe and protita book ar id diye check korbe amader action.payload ar moddhe theke jei id ta ashche oi id tar sathe amader books ar jei id ta match korbe oi object take isBookExist variable ar moddhe store kore debe 

            if(isBookExist){  /////jodi amader isBookExist ar moddhe kono data ashe ba thake tahole amader if ar moddher kaj gulo korbe
                isBookExist[0].title = title     ////jehetu amader isBookExist ai variable ar moddhe array ar moddhe akta object eee filter hoye ashbe tar beshi object ashbe na karon amader action.payload ar moddhe theke jei id ta ashbe oi id onujayi jodi amader books state ar moddhe  kono object thake taholei shudhu oi object ta amader isBookExist ai variable ar moddhe  store hobe and jehetu arrary ar moddhe akta eee object thakbe tai ami isBookExist[0] diyechi mane amder isBookExist ar moddhe jei array ta ache and ai array ar moddhe jei object  ta ache oi object ta amader arrar ar moddhe 0 index aa ache tai akhane amra isBookExist[0] avabe likhechi and amader ai arrar ar moddhe jei object ta ache ai object ar moddhe jei title key ta ache oi key ar value take amra akhane update kore diyechi amader action.payload ar moddhe theke title jei data ta ashche oi data diye 
                isBookExist[0].author = author
            }
        },

        deleteBooks: (state, action) => {  ////jokhon amader deleteBooks action ta dispatch hobe tokhon amader action ar moddhe theke kichu data ashbe  oi data guloke amra action.payload  ar moddhe pabo
            const id = action.payload  /////akhane amra action.payload ar moddhe theke jei id take pabo ba jei id ta ashbe oi id take ami id variable ar moddhe store kore diyechi
            state.books = state.books.filter((book) => book.id !== id)  ///// akhane state.books.filter((book) => book.id !== id) books state ar moddhe theke akta akta kore book ar object amder book ar moddhe ashbe and protita book ar object ar id ar sathe amder action.payload ar moddhe theke jei id ta ashbe oi id ta diye match korbe and jei book ar object ar id ar sathe action.payload ar moddhe theke jei id ta ashche oi id ta jodi match kore tahole oi book ar object ta bade sob book ar object ta amader books state ar moddhe set hoye jabe ba filter kora data gulo diye amader books state ta update hoye jabe state.books
        }
    }
         
})


export const { showBooks, addBooks, updateBooks, deleteBooks } = BooksSlice.actions  /////akhane amra reducer ar moddhe jei method gulo create korechi oi method guloke ami akhane BooksSlice.actions diye action ooo create kore niyechi khub sohoje tai amader alada kore rrrr action create korte hobe na amra ai action guloke import kore dispatch korte parbo je kono page ar moddhe theke.....and jehetu ami akhan theke amader action guloke shudhu export korechi tai amader ai action guloke oonno page ar moddhe theke import korar somoy amader ai action ar nam guloke { } curly braces ar moddhe rakhte hobe jodi amra export default kortam tahole amader { } curly braces ar moddhe rakhte hoto na amra jekono nam aaa import korte partam jekono page theke

export default BooksSlice.reducer /////akhane amader BooksSlice.reducer diye amader BooksSlice ke reducer aa convart kore niyechi and ai BooksSlice take ami export default kore diyechi jar fole amra je kono page ar moddhe theke amder ai BooksSlice ke jekono nam aaaa import korte parbo....check(src/app/store.jsx) karon amader Reducers ar moddhe theke action ar type oonujayi logic gulo handel hoye state ta update hoye Store ar moddhe chole jai and Store ar moddhe theke amder View ta update hoye jai and amra dekhte  pari