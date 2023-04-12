"use strict";

window.addEventListener("load", start);

const data = [19, 89, 11, 56, 73, 2, 8, 97, 29, 78, 23, 1, 80, 7, 64, 52, 47, 57, 50, 60, 25, 88, 86, 83, 58, 69, 4, 15, 51, 70, 91, 54, 61, 28, 90, 92, 14, 37, 24, 43, 72]


function start() {
    console.log("JavaScript kører");
    displayAllBars();
    setInterval(update,1000);

}

function update() {
    updateData();
    displayAllBars();
}

function displayAllBars() {
     const bars = document.querySelectorAll(".bar")

     for(let i = 0; i < 40; i++) {
        const bar = bars[i];
        let height = data[i] / 32 * 100;
        bar.style.height = `${height}px`;
     }

}

function updateData() {
    data.push(Math.floor(Math.random));
    data.shift();
}