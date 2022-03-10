import React, { useState } from 'react'




export default function LoginWithName() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const myOnChange = (e) => {
        // console.log("value:", e.target.value)//name value, email value
        // console.log("name: ", e.target.name)//name,email

        setData((old) => {
            const obj = { ...old, [e.target.name]: e.target.value }
            return obj;
        })
    }

    return (
        <div>
            <h1>Login</h1>

            <input type="text" name='name' placeholder='Enter Your Name'
                value={data.name}
                onChange={myOnChange}
            />
            <input type="email" name='email' placeholder='Enter Email'
                value={data.email}
                onChange={myOnChange}
            // onChange={function (e) {
            //     setDate(old => {
            //         const copy = { ...old, email: e.target.value }
            //         return copy
            //     })
            // }}

            />

            <input type="text" name='password' placeholder='Enter Your Password'
                value={data.password}
                onChange={myOnChange}
            />

            <button onClick={() => {
                console.log("submited value: ", data);
            }}>submit</button>
        </div>
    )
}
