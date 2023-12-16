import React,{useState} from "react"
import { v4 as uuidv4 } from 'uuid';

import NewTodo from "./Components/NewTodo" 
import Todos from "./Components/Todos"


function App(){

   const Datas = [
    {
        id : uuidv4(),
        title: 'lear react',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur in non pariatur ex atque impedit.",
    },
    {
        id : uuidv4(),
        title: 'lear react with dip',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur in non pariatur ex atque impedit.",
    },
    {
        id : uuidv4(),
        title: 'lear basic things',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur in non pariatur ex atque impedit.",
    },

   ]

   ///======== define state ==========///
   const [data , setData] = useState(Datas)   ///akhane ami amade data variable ba state ar value ta inisalize kore diyechi amader Datas variable ar moddhe jei data gulo ache oi data gulo diye and setData hocche amader function jei function ar maddhome amara amader state ar value take update korte parbo


   ///====== define a method for collecting data from child component =======///
   const handleChildData = (dataFromChild) =>{
      const { title, description } = dataFromChild  ///akhane amader child component ar moddhe theke je data ta ashche amader dataFromChild variable ar moddhe and jehetu amader dataFromChild variable ar moddhe object aakare data ashche tai amra akhane distructruing korar somoy variable guloke { } carly braces ar moddhe rekhe diyechi jodi array aakra data ashto amader dataFromChild variable ar moddhe tahole amra distructruing korar somoy amader variable take [ ] ar moddhe rakhtam mane squear bracket ar moddhe rakhtam
      setData([...data,{id:uuidv4(), title, description}])  ////akhane amader state ar data guloke ami update kore diyechi setData() function ar maddhome and sprade operator aar maddhome  ami amader data, state ba variable ar moddhe amader child component theke asha data guloke update kore diyechi ba store kore dicchi
   }

 

    return(
        <div>              
            <NewTodo onHandleChildData={handleChildData}  />  {/* amader ai NewTodo child component theke amader ai App parent componet ar moddhe data aanar jonno amra amader ai parent ar moddhe akta method create korechi and ai method take ami amar child ar moddhe pass kore diyechi ai nam aaa onHandleChildData...and ai onHandleChildData take amader NewTodo component ta props aakare receive korbe  */}
            <Todos datas={data} /> 
        </div>
    )
}

export default App