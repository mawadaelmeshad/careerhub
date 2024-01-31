import home from "../imgs/job.jpeg";
import "./css-components/home.css";

function Home(){
    return(
        <div className="home" id="#home">
            <div className="home-bg">
                <img src={home} alt="home" />
            </div>
            <div className="words">
                <p>4536+ Jobs listed</p>
                <h2>Find your Dream Job</h2>
                <p>Empowering Dreams, Connecting Futures: Explore Opportunities with Us!

</p>
            </div>

        </div>
    );
}
export default Home;