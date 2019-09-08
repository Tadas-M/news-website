import React from 'react'

function Footer({ type }) {
    // console.log(type,"type");
    if (type === "hidden") {
    return (
        <div className="footer-absolute dark-background volkorn footer-text" id="footer">
            <div>
                <div className="footer-title">Created with<br/></div>
                <a target="_blank" rel="noopener noreferrer" href="https://rss2json.com">rss2json</a><br/>
                <a target="_blank" rel="noopener noreferrer" href="https://newsapi.org">News API</a>
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
    )}

    if (type ==="unhidden") {
        return (
            <div className="footer dark-background volkorn footer-text" id="footer">
                <div>
                    <div className="footer-title">Created with<br/></div>
                    <a target="_blank" rel="noopener noreferrer" href="https://rss2json.com">rss2json</a><br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://newsapi.org">News API</a>
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
        )}

}

export default Footer