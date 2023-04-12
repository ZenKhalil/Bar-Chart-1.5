"use strict";

window.addEventListener("load", start);

const data = [35, 89, 11, 56, 73, 2, 8, 97, 29, 78, 23, 1, 80, 7, 64, 52, 47, 57, 50, 60, 25, 88, 86, 83, 58, 69, 4, 15, 51, 70, 91, 54, 61, 28, 90, 92, 14, 37, 24, 43, 72]


function start() {
    console.log("JavaScript kører");

    const bars = document.querySelectorAll(".bar")
    const firstBar = bars[0];

    let height = data[0]/32*100;

    firstBar.style.height = `${height}px`;

}
