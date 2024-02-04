import home from "../imgs/job.jpeg";
import "./css-components/home.css";
import WOW from 'wowjs';
import React, { useEffect } from 'react';

function Home(){
    useEffect(() => {
        const wow = new WOW.WOW({
          live: false
        });
        wow.init();
      }, []);
    return(
        <div className="home" id="#home">
            <div className="home-bg">
                <img src={home} alt="home" />
            </div>
            <div className="words">
                <p>4536+ Jobs listed</p>
                <h2 className='wow fadeIn' data-wow-duration="1s" data-wow-delay=".4s">Find your Dream Job</h2>
                <p>Empowering Dreams, Connecting Futures: Explore Opportunities with Us!

</p>
            </div>

        </div>
    );
}
export default Home;