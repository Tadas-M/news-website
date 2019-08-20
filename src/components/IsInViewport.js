
let scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout( callback,1000/60)};

function wrap(elements) {
    const elementsToShow = elements;
    loop()
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

export default wrap