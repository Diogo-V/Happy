import React from 'react';
import logoImg from "../images/logo.svg";  // We kind of give a name to our imported image
import {FiArrowRight} from "react-icons/fi";

import { Link } from "react-router-dom";

// When using react, we need to import our CSS trough the JS instead of just putting inside our HTML file
import '../styles/pages/landing.css'

// This function is called a component because it returns html to be sent to our pages. Creates an html tag: <Landing />
// All components need to start with a capital letter
function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">

                <img src={logoImg} alt="Happy"/>

                <main>
                    <h1>Bring happiness into the world</h1>
                    <p>Visit orphanages and change many kids lives</p>
                </main>

                <div className="location">
                    <strong>Lisbon</strong>
                    <span>Alameda</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>

            </div>
        </div>
    );
}

export default Landing;
