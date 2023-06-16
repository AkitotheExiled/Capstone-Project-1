var delta = null;
var start = null;
var end = null;


var stickynav = document.querySelector("#stickynav")





window.addEventListener("scroll", (event) => {
    if (start === null) {
        start = window.pageYOffset;
    }



});

window.addEventListener("scrollend", (event) => {
    end = window.pageYOffset;
    delta += Math.abs(end - start);
    console.log(`${start}, ${end}, delta: ${delta}`);
    if (delta >= 300) {
        stickynav.classList.add('fadeOut');
        delta = 0;
        setTimeout(() => {
            stickynav.classList.add('fadeIn');
            stickynav.classList.remove('fadeOut');
            setTimeout(() => {
                stickynav.classList.remove('fadeIn');
            }, "500");
        }, "1000")
    }
    start = null;
    end = null;
    delta = null;


})
