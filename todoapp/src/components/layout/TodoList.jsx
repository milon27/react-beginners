import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ list }) {
    return (
        <div>
            {
                list.map(item => {
                    return <TodoItem key={item} item={item} />
                })
            }
            {/* <TodoItem /> */}
        </div>
    )
}
