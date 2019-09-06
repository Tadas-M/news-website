import React from 'react'
import wrap from "./IsInViewport";

function SignificantEvents () {
    let elementsToShow;

    document.addEventListener('DOMContentLoaded', function() {
        window.scrollTo(0, 0);
        elementsToShow = document.querySelectorAll('.show-on-scroll');
        wrap(elementsToShow);
    }, false);

    return (
        <div>
            {/*<div className="outer-div"> </div>*/}
            <a name="top"></a>
            <div className="outer-div" id="background-1">
                <div className="picture-container image-left-margins show-on-scroll" id="overlay-1"></div>
                <div className="text-container text-right-margins">
                    <p className="font">Historical meeting of Korean leaders</p>
                </div>
            </div>
            <div className="outer-div" id="background-2">
                <div className="text-container text-left-margins">
                    <p className="font">Is there a version of this that will enlarge images to fit their<br/>
                        container also? I've tried the max-width/max-height as numbers with width/height as auto, <br/>
                        but as said above,</p>
                </div>
                <div className="picture-container image-right-margins show-on-scroll" id="overlay-2"></div>
            </div>
            <div className="outer-div" id="background-3">
                <div className="picture-container image-left-margins show-on-scroll" id="overlay-3"></div>
                <div className="text-container text-right-margins">
                    <p className="font">G-7 summit</p>
                </div>
            </div>
        </div>
    )
}

export default SignificantEvents;