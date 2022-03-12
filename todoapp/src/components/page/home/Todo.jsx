import React from 'react'
import { useState } from 'react'
import Form from '../../layout/Form'
import TodoList from '../../layout/TodoList'

export default function Todo() {
    const [list, setList] = useState([])//todo list item

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-center'>Our First Todo App</h1>
            <Form setList={setList} />
            <TodoList list={list} />
        </div>
    )
}


// 1. global state parent state = []
// 2. setList as props-> Form 