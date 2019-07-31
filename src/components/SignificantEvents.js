import React from 'react'
import "../scroll.css"

function SignificantEvents () {
    let elementsToShow;
    let scroll = window.requestAnimationFrame ||
        function (callback) { window.setTimeout( callback,1000/60)};

    document.addEventListener('DOMContentLoaded', function() {
        elementsToShow = document.querySelectorAll('.show-on-scroll');
        // console.log(elementsToShow);
        loop();
    }, false);

    function loop() {
        elementsToShow.forEach( function (element) {
            if (isInViewport(element)) {
                element.classList.add('is-visible');
                element.classList.remove('is-invisible')
            } else {
                element.classList.remove('is-visible');
                element.classList.add('is-invisible')
            }
        });
        scroll(loop);
    }

    function  isInViewport (elem) {
        let bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    return (
        <div>
            <div className="outer-div"> </div>
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