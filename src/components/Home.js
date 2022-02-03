import React from "react"
import { Link } from "react-router-dom";
function Home() {
    return(
        <div className='home'>
            <h1>
                Home Page
            </h1>
            <br/>
            <br/>
            <h3>
                Welcome to home page
            </h3>
            <br/>
            <br/>
            <h3>
                Here you can find everything to dress like no one.
            </h3>
            <br/>
            <br/>
            <h3>
                You can get shirts, pants and many more items.
            </h3>
            <br/>
            <br/>
            <h3>
                Serving you with all our hearts
            </h3>
            <br/>
            <br/>
            <h3>
                Happy Shopping:)
            </h3>

            <br/>
            <h3>
                You can reach out to us at +(91) 1234567890
            </h3>
            <Link to="/shop">
                <h2> Shop now!</h2>
            </Link>
        </div>
    )
    
}

export default React.memo(Home);