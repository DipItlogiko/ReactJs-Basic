import React,{ useState } from "react";


import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { todoPropsType } from "./types";


const todosData = [ ////akhane amra todosData variable ar moddhe array of object aakare data rekhechi mane akta array ar moddhe kichu data rekhechi object aakare 
  {
    id: "1",
    title: "Todo title 1",
  },
  {
    id: "2",
    title: "Todo title 2",
  },
  {
    id: "3",
    title: "Todo title 3",
  },
  {
    id: "4",
    title: "Todo title 4",
  },
  {
    id: "5",
    title: "Todo title 5",
  },

]


function App() {
  const [todos , setTodos] = useState(todosData)   /////akhane useState hook ta use kore todos nam aa akta state create korechi and setTodos nam aaa akta function create korechi amader todos state take update korar jonno and useState() moddhe amader todosData ai variable ta pass kore diyechi mane amader ai todosData variable ar moddhe jei data ta ache oi data ta amader todos state ar moddhe initia vabe set hoye jabe

  const getDataFromChildComponentTodo = (id : string) => {   /////akhane amader Todo Child component ar moddhe theke ai App parent component ar moddhe data anar jonno amader ai App parent component ar moddhe akta method ba fuction declear korechi and ai method ba function ta ami props drilling ar maddhome amder ai App component ar moddhe theke amder Todo component ar moddhe pass korechi and amader Todo component ar moddhe theke akta id pass kore debo and aikhane oi id ta chole ashbe and amader id props ar type ta amra bole diyechi string
    const filteredTodos = todos.filter((todo) => todo.id !== id) ///// akhane amra filteredTodos nam aaa akta variable ar moddhe todos state ar moddhe array ar moddhe jei object  gulo ache ache oi object ar moddhe theke protita object amader todo ar moddhe ashbe and oi object ar id ta jodi amader Todo Component ar moddhe theke jei id ta ashche oi id ar sathe match na kore shudhu oi object guloke filter kore amader ai filteredTodos variable ar moddhe store kore debe 

    setTodos(filteredTodos)   ////and akhane amader setTodos function take call kore amder todos state ar value take update korediyechi filteredTodos variable ar value diye
  }

  const getDataFromChildComponentAddTodo = (newTodo : todoPropsType) => { /////akhane amader AddTodo Child Component ar moddhe theke ai App parent component ar moddhe data anar jonno ai App parent component ar moddhe akta method ba function declear korechi and ai method ba function ta ami props drilling ar moaddhe amader ai App component ar moddhe theke amader AddTodo component ar moddhe pass korechi and amader AddTodo component ar  moddhe theke akta object pass kore debo and oi object ta chole ashbe amader newTodo props ar moddhe and amader ai newTodo props ar type ta ki hobe ta amra chaile amader ai page ar moddhe type likhe akta nam diye soman soman diye {  } object ar moddhe key gulor nam likhe tar dataType ba propsType gulo define kore dite partam jemon string hole string and number hole number kintu good practice hocche amader sob type guloke akta file ar moddhe rakha jemon ami todoPropsType nam aaa  akta type define korechi amader src/types.ts file ar moddhe and amder sob type gulo oi file ar moddhe rakha uchit and oi type guloke import kore amder onno file ar moddhe use kora uchit jar fole amader code ta clean thake...jemon ami akhane  todoPropsType aita ke amader src/types.ts ar moddhe create korechi and oi file ar moddhe theke export kordiyechi and ai file ar moddhe theke import korechi and akhane use korechi
     setTodos([ ...todos, newTodo ])  ////// akhane amader newTodo ar moddhe jei object ta ashbe amader AddTodo Component ar moddhe theke oi object take ami amder todos state ar moddhe jei datagulo ache oi data ar sahte amader newTodo ar moddhe jei object ta ashbe oi object take ami add kore diyechi and setTodos() funtion take call kore amader todos state ar value take update kore diyechi akhane ...todos state ar sathe sprade oparator use korechi ... jar fole amader todos state ar moddhe jei data gulo ache sob data chole ashbe and oi data ar sathe ami newTodo ar moddhe jei object ta ashbe oi object take add kore diyechi and jehetu amra jani amader todos state ar moddhe array ar moddhe object aakare data ache tai ami [ ]array ar moddhe amader newTodo ar moddhe theke jei object ta ashbe oi object take add kore diyechi amder todos state ar value ar sathe
  }

  return(
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Todo App using Reactjs with TypeScript</h1>
        <AddTodo  onGetDataFromChildComponentAddTodo={getDataFromChildComponentAddTodo}/>  {/* akhane amader AddTodo component take call kora hoyeche and ai AddTodo Child component ar moddhe theke amader ai App parent component ar moddhe data aanar jonno amra akta method ta function create korechi and oi function take amra props aakare pass kore diyechi amder AddTodo component ar moddhe....AddTodo component ar moddhe theke amader App component ar moddhe data aanar jonno and amder AddTodo component ar moddhe ai onGetDataFromChildComponentAddTodo key ar moddhe jei data ta pass korechi props aakare ai key props ar type ta amder AddTodo component ar moddhe define kore diyte hobe amra chaile amader onGetDataFromChildComponentAddTodo key ar opore hover kore amder props tar type ta copy kore niye amder AddTodo component ar moddhe past kore dite pari jodi amader props type ta amder AddTodo component ar moddhe set na kore dei tahole amader  onGetDataFromChildComponentAddTodo key ar niche error dekhabe je amra  AddTodo component ar moddhe amra props ar type set kori ni kintu akhan theke props akare data pass korechi  */}
      </div>

      <Todos Todos={todos} onGetDataFromChildComponentTodo={getDataFromChildComponentTodo} /> {/* akhane amader Todos component take call kore todos state ar value take Todos key ar moddhe props aakare pass kora hoyeche  and amder Todos Child Component ar moddhe theke amader App parent component ar moddhe data anar jonno amra amder App component ar moddhe akta method ta function create kore oi method ba function take ami onGetDataFromChildComponentTodo key ar moddhe props aakare pass kore diyechi amaer Todos Component ar moddhe....and jehetu amra TypeScript use korchi amader ReactJs project ar moddhe tai amra jokhon amder Todos component ar moddhe Todos key ar props akare data pathacchi tai amader Todos component ar moddhe giye amader ai Todos props ar type ta define kore dite hobe amra jodi amader Todos key ar opore hober kori tahole amader Todos props ar type ta amader dekhabe and amra chaile akhan theke copy kore niye amader Todos component ar moddhe pest kore dite pari.....jodi amra kono component ke call kore props aakare data pass kori tahole amra jei component ar moddhe props aakare data pass korlam oi component ar moddhe giye amdaer props ar type ta set kore dite hobe ta na hole amder props key ar niche error dekhabe  */}
    </div>
  )
}

export default App