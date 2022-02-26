import Search from "../../layout/search/Search"
import HomeButton from "./HomeButton"


function Home({ title, desc }) {
    // console.log(props);
    return (
        <div className="home">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
            <Search />
            <HomeButton />
            <p>{
                desc
            }</p>

            <p>{
                title}</p>
        </div>
    )
}

export default Home