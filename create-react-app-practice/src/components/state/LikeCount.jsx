import React, { useState } from 'react'

export default function LikeCount() {

    const [like, setLike] = useState(0)//2 element

    return (
        <div>
            Like:  {like}<br />
            <button onClick={() => {
                setLike(function (prevValue) {
                    console.log('prevValue: ', prevValue)
                    return prevValue + 1
                })
            }}>Like Now</button>
        </div>
    )
}
