import React from 'react'
import { useState } from 'react'

export default function ArrayState() {
    const [arr, setArr] = useState([1, 2, 3])

    // add an element (first position,middle position,end position)
    const firstEndPos = (item) => {
        setArr(prev => {
            const copy = [...prev, item]
            return copy;
        })
    }

    const addItemIn2Pos = () => {
        setArr(prev => {
            const copy = [...prev]
            copy[2] = 7// 1,2,7
            copy[2 + 1] = prev[2]//1,2,7,3
            console.log("---> ", copy);
            return copy
        })
    }

    // remove something (first position,middle position,end position)
    const removeItem = (item) => {//3
        setArr(prev => {
            const copy = prev.filter(_item => {
                if (_item === item) {//1,2,3
                    return false;
                } else {
                    return true;
                }
            })
            console.log("after remove", copy)
            return copy
        })
    }

    // update something (based on the index)



    return (
        <div>
            <button onClick={() => {
                firstEndPos(7)
            }}>first position</button>

            <button onClick={addItemIn2Pos}>
                add in position 2
            </button>
            {/* 1--2--7--3 */}
            <button onClick={() => {
                removeItem(3)
            }}>remove 3</button>


            <div>ArrayState {arr.join("--")}</div>
        </div>
    )
}
