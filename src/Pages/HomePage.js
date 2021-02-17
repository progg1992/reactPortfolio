import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Pierce Rogg.</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate facere, numquam vitae placeat consequatur corrupti officia 
                    quibusdam. Blanditiis doloremque nemo ex facilis neque. 
                    A sint ipsam earum nemo omnis et.
                </p>
                <div className="icons">
                    
                    <a href="https://github.com/progg1992" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;