import './global.css'

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/pages/about/About";
import Home from "./components/pages/home/Home";

const App = () => {
    return <div>
        <Header />
        <div className='content'>
            <Home />
        </div>
        <Footer />
    </div>
}

export default App;

