import React from 'react'

export default function TodoItem({ item }) {
    return (
        <div key={item} className="border border-dashed p-5 bg-violet-200 my-2">
            <h1>{item}</h1>
        </div>
    )
}
