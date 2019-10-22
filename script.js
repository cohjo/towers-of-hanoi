const firstBox = document.querySelector('.discs1');
const secondBox = document.querySelector('.discs2');
const thirdBox = document.querySelector('.discs3');

var discsA = firstBox.children;
var discsB = secondBox.children;
var discsC = thirdBox.children;

const firstD = document.querySelector('#disc1');
const secondD = document.querySelector('#disc2');
const thirdD = document.querySelector('#disc3');
const fourD = document.querySelector('#disc4');

var allDiscs = {
    one: {
        image: firstD,
        score: 0
    },

    two: {
        image: secondD,
        score: 1
    },

    three: {
        image: thirdD,
        score: 2
    },

    four: {
        image: fourD,
        score: 3
    }
}

var selected = [];
var moves = 0;

firstBox.addEventListener('click', function(e) {
    e.preventDefault();
    
    if(selected.length !== 0 || discsA.length !== 0) {
        if (selected.length == 0) {
            selected.push(discsA[0]);
            firstBox.removeChild(discsA[0]);
        } else {
            firstBox.insertBefore(selected[0], discsA[0]);
            selected.shift();

            moves += 1;
        }
    }

    check();
})

secondBox.addEventListener('click', function(e) {
    e.preventDefault();
    
    if(selected.length !== 0 || discsB.length !== 0) {
        if (selected.length == 0) {
            selected.push(discsB[0]);
            secondBox.removeChild(discsB[0]);
        } else {
            secondBox.insertBefore(selected[0], discsB[0]);
            selected.shift();

            moves += 1;
        }
    }

    check();
})

thirdBox.addEventListener('click', function(e) {
    e.preventDefault();
    
    if(selected.length !== 0 || discsC.length !== 0) {
        if (selected.length === 0) {
            selected.push(discsC[0]);
            thirdBox.removeChild(discsC[0]);
        } else {
            thirdBox.insertBefore(selected[0], discsC[0]);
            selected.shift();

            moves += 1;
        }
    }

    check();
})

function check() {

    if(discsC.length === 4) {
        alert("You Won in "+ moves +" moves!");
    }
}