import React from 'react'
import { useState } from 'react'

export default function Form({ setList }) {
    const [todo, setTodo] = useState("")
    const onTodoChange = (e) => {
        setTodo(e.target.value)
    }
    const onClickHandle = () => {
        setList(old => {
            const copy = [...old, todo]
            return copy
        })
        setTodo("")
    }

    return (
        <div className='flex gap-2 my-4'>
            <input type="text" className='border border-violet-500 flex-1 rounded px-2' value={todo} onChange={onTodoChange} />
            <button className='bg-violet-500 p-2 rounded text-white' onClick={onClickHandle}>Add New Todo</button>
        </div>
    )
}
