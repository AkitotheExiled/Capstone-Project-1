
function toggleDiv(classDiv1, classDiv2) {
    let divToClose = document.querySelector(classDiv1);
    divToClose.classList.toggle("hide");

    let divToClose2 = document.querySelector(classDiv2);
    divToClose.classList.toggle("hide");

}


/*
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



function toggleMenu() {
    let bottomnav = document.querySelector(".bottom_nav");
    if (this.classList.contains("menu-active")) {
        this.classList.remove("menu-active");
        bottomnav.style.display = "block";
    } else {
        this.classList.add("menu-active");
        bottomnav.style.display = "none";
    }
}



*/
