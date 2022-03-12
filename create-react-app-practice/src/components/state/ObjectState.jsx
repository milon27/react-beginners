import React, { useState } from 'react'

export default function ObjectState() {
    const [obj, setObj] = useState({
        one: 1,//5
        two: 2
    })

    const changeOne = () => {
        console.log("we are in the changeOne fun.")
        setObj((prevObj) => { // {"one":1,"two":2}//A1
            const temp = {//A2
                ...prevObj,
                one: 5
            }//{"one":1,"two":2}

            //prevObj.one = 7

            return temp
        })
    }

    function changeTwo() {
        console.log("clicked two")
    }


    return (
        <div>ObjectState :{JSON.stringify(obj)}

            <button onClick={changeOne}>change one</button>
            <button onClick={changeTwo}>change two</button>
        </div>
    )
}
