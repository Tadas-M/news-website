import React from 'react'
import {Link} from "react-router-dom";

function Footer() {

    return (
        <div className="footer dark-background volkorn footer-text">
            <div>
                <div className="footer-title">Created with<br/></div>
                <a target="_blank" rel="noopener noreferrer" href="https://rss2json.com">rss2json</a><br/>
                <a target="_blank" rel="noopener noreferrer" href="https://newsapi.org">News API</a>
            </div>
            <div>
                <div className="footer-title">Explore<br/></div>
                <Link to={"/events/2018"}>2018</Link><br/>
                <Link to={"/events/2017"}>2017</Link><br/>

            </div>
            <div className="center-items">
                <div className="footer-icon" id="github-logo">
                    <a target="_blank" rel="noopener noreferrer" href={"https://github.com/Tadas-M"}>
                        Github logo that redirects to authors Github profile
                    </a>
                </div>
                <div className="footer-icon" id="linkedin-logo">
                    <a target="_blank" rel="noopener noreferrer"
                       href={"https://www.linkedin.com/in/tadas-marcinkevi%C4%8Dius-089233191/"}>
                        Linkedin logo that redirects to authors Linkedin profile
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer