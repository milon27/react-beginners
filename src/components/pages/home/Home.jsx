import Search from "../../layout/search/Search"
import HomeButton from "./HomeButton"


function Home({ url, title1, title2 }) {
    // console.log(props);
    return (
        <div className="home">
            <img src={url} alt="" />
            <Search />
            <HomeButton />
            <p>{title1}</p>

            <p>{title2}</p>
        </div>
    )
}

export default Home