const firstBox = document.querySelector('.discs1');
const secondBox = document.querySelector('.discs2');
const thirdBox = document.querySelector('.discs3');

var discsA = firstBox.children;
var discsB = secondBox.children;
var discsC = thirdBox.children;

var selected = [];

    // if (selected.length === 0) {
    //     firstBox.addEventListener('click', function(e) {
    //         e.preventDefault();
            
    //         selected.push(discsA[0]);
    //     })
    //     secondBox.addEventListener('click', function(e) {
    //         e.preventDefault();
            
    //         selected.push(discsB[0]);
    //     })
    //     thirdBox.addEventListener('click', function(e) {
    //         e.preventDefault();
            
    //         selected.push(discsC[0]);
    //     })
    // } else {
    //     firstBox.addEventListener('click', function(e) {
    //         e.preventDefault();

    //         firstBox.unshift(selected[0]);
    //     })
    //     secondBox.addEventListener('click', function(e) {
    //         e.preventDefault();

    //         secondBox.unshift(selected[0]);
    //     })
    //     thirdBox.addEventListener('click', function(e) {
    //         e.preventDefault();

    //         thirdBox.unshift(selected[0]);
    //     })
    // }

firstBox.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (selected.length == 0) {
        selected.push(discsA[0]);
        firstBox.removeChild(discsA[0]);
    } else {
        firstBox.insertBefore(selected[0], discsA[0]);
        selected.shift();
    }
})

secondBox.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (selected.length == 0) {
        selected.push(discsB[0]);
        secondBox.removeChild(discsB[0]);
    } else {
        secondBox.insertBefore(selected[0], discsB[0]);
        selected.shift();
    }
})

thirdBox.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (selected.length === 0) {
        selected.push(discsC[0]);
        thirdBox.removeChild(discsC[0]);
    } else {
        thirdBox.insertBefore(selected[0], discsC[0]);
        selected.shift();
    }
})