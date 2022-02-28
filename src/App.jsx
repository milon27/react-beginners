import './global.css'

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/pages/about/About";
import Home from "./components/pages/home/Home";

// Home("dfdfdfd")

const App = () => {
    return <div>
        <Header />
        <div className='content'>
            <Home url={'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'} title1='title 1' title2='tuitle 2' />
        </div>
        <Footer />
    </div>
}

export default App;

