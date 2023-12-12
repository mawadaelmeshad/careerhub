import home from "../imgs/job.jpeg";
import "./css-components/home.css";

function Home(){
    return(
        <div className="home">
            <div className="home-bg">
                <img src={home} alt="home" />
            </div>
            <div className="words">
                <p>4536+ Jobs listed</p>
                <h2>Find your Dream Job</h2>
                <p>We provide online instant cash loans with quick approval that suit your term length

</p>
            </div>

        </div>
    );
}
export default Home;