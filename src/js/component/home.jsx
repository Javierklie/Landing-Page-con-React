import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import {Footer} from "./footer.jsx";
import { Card } from "./card.jsx";







const Home = () => {
	return ( 
        <div>
            <Navbar />
            
        <div className="container my-5">
            <Jumbotron />
            <div className="row row-cols-1 row-cols-md-4 g-4">
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
        <Footer />
        </div>
        
    ) 
};

export default Home;