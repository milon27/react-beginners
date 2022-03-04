// import './global.css'

import Home from "./components/pages/home/Home";
import { useState } from 'react'

// what we are rendeing/(showing in the browser) form this component?
//

// 1. it should funcion 2. return jsx

// reload
// isLogged =false
// log
// logn page.

// click on the button
// isLoggedIn=true
// log
// home page


const App = () => {

    const state = useState(false) //return an array [2 element]
    // 1st element=holding the value of the state
    // 2nd element = a function which we will use to change the value of the state.


    console.log("rendering App Component....");

    return (state[0] === false) ? <div>
        <h1>login page</h1>
        <button onClick={() => {

            console.log("clicked....", state[0])
            state[1](true) 

        }}>login now</button>

    </div> : <Home />

    // return <Layout title="a title">
    //     {/* parent */}

    //     {/* child */}
    //     <Home url={'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'} title1='title 1' title2='tuitle 2' />
    //     <h1>a chilod</h1>
    //     <h1>a chilod</h1>
    //     <h1>a chilod</h1>
    //     <h1>a chilod</h1>
    // </Layout>
}

export default App;

