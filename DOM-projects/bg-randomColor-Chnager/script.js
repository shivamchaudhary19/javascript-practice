let interval = null;
let back = document.querySelector("body");

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};

document.querySelector("#start").addEventListener("click", function () {

    if (!interval) {
        interval = setInterval(function () {
            back.style.backgroundColor = randomColor();
            h1.style.display
        }, 100);
    }

});

document.querySelector("#stop").addEventListener("click", function () {

    if (interval) {
        clearInterval(interval);
        interval = null;
    }

});