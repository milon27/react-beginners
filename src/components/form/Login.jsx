import React, { useState } from 'react'

export default function Login() {
    const [data, setDate] = useState({
        name: "",
        email: ""
    })

    return (
        <div>
            <h1>Login</h1>

            <input type="text" name='name' placeholder='Enter Your Name'
                value={data.name}
                onChange={function (e) {
                    setDate(old => {
                        const copy = { ...old, name: e.target.value }
                        return copy
                    })
                }}
            />
            <input type="email" name='email' placeholder='Enter Email'
                value={data.email}
                onChange={function (e) {
                    setDate(old => {
                        const copy = { ...old, email: e.target.value }
                        return copy
                    })
                }}
            />

            <button onClick={() => {
                console.log("submited value: ", data);
            }}>submit</button>
        </div>
    )
}
