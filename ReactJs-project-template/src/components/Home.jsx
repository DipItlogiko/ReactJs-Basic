import React, { useState } from 'react'

import Todos from './Todos'
import NewTodo from './NewTodo'

const dummydata = ['todo1', 'todo2', 'todo3', 'todo4', 'todo5']  /// akhane ami akta variable define korechi dummydata ai nam aaa and amader ai variable ar value hishebe akta array ache jar moddhe kichu dummydata ache

function Home() {
    const [data, setData] = useState(dummydata)   ///// jehetu aita amader functional component tai functional component ar moddhe state use korar jonno amader react ar useState hook ta use korte hoy ....and akhane amader data variable ar moddhe dummydata ar value gulo pass kore diyechi amader useState hook ar maddhome and setData aita hoccche amader akta function 

    const handelNewTodoData = (NewTodoData) => {
        setData([...data, NewTodoData]) ////akhane ami sprade operator ar maddhome amader data state ar sathe amader new todo ar data ta add kore diyechi
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Welcome</h2>
            <NewTodo onNewTodoData={handelNewTodoData} />
            <Todos datas={data} />
        </div>
    )
}

export default Home
