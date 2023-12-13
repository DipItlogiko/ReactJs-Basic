import React from 'react'

import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo'

const dummyData = [
    {
        id: 1,
        title: 'hello world',
        desc: 'this is title one',
    },

    {
        id: 2,
        title: 'hello world2',
        desc: 'this is title two',
    },

    {
        id: 3,
        title: 'hello world3',
        desc: 'this is title three',
    },
]

function Home() {
    return (
        <div className={style.container}>
            <h1 style={{ textAlign: 'center', color: 'white' }}>Todo App</h1>
            <NewTodo />
            <Todos data={dummyData} />
        </div>
    )
}

export default Home
