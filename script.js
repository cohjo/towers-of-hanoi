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

const score1 = document.getElementById('disc1').getAttribute('score');
const score2 = document.getElementById('disc2').getAttribute('score');
const score3 = document.getElementById('disc3').getAttribute('score');
const score4 = document.getElementById('disc4').getAttribute('score');

const hold = document.getElementById('holder');

var selected = [];
var moves = 0;

var tracker = document.getElementById('cScore');

firstBox.addEventListener('click', function(e) {
    e.preventDefault();
    
    if(selected.length !== 0 || discsA.length !== 0) {
        if (selected.length == 0) {
            selected.push(discsA[0]);
            hold.appendChild(discsA[0]);
            var curr = hold.children[0];
            curr.style.height = '90%';
        } else {
            if (discsA.length === 0) {
                firstBox.insertBefore(selected[0], discsA[0]);
                discsA[0].style.height = '15%'
                selected.shift();

                moves += 1;
                tracker.textContent = moves;
            } else if (discsA[0].getAttribute('score') < selected[0].getAttribute('score')) {
                firstBox.insertBefore(selected[0], discsA[0]);
                discsA[0].style.height = '15%'

                selected.shift();

                moves += 1;
                tracker.textContent = moves;
            }
        }
    }

    check();
});

secondBox.addEventListener('click', function(e) {
    e.preventDefault();
    
    if(selected.length !== 0 || discsB.length !== 0) {
        if (selected.length == 0) {
            selected.push(discsB[0]);
            hold.appendChild(discsB[0]);
            // secondBox.removeChild(discsB[0]);
            var curr = hold.children[0];
            curr.style.height = '90%';
        } else {
            if (discsB.length === 0) {
                secondBox.insertBefore(selected[0], discsB[0]);
                discsB[0].style.height = '15%'
                selected.shift();

                moves += 1;
                tracker.textContent = moves;
            } else if (discsB[0].getAttribute('score') < selected[0].getAttribute('score')) {
                secondBox.insertBefore(selected[0], discsB[0]);
                discsB[0].style.height = '15%'
                selected.shift();

                moves += 1;
                tracker.textContent = moves;
            }
        }
    }

    check();
});

thirdBox.addEventListener('click', function(e) {
    e.preventDefault();
    
    if(selected.length !== 0 || discsC.length !== 0) {
        if (selected.length === 0) {
            selected.push(discsC[0]);
            hold.appendChild(discsC[0]);
            // thirdBox.removeChild(discsC[0]);
            var curr = hold.children[0];
            curr.style.height = '90%';
        } else {
            if (discsC.length === 0) {
                thirdBox.insertBefore(selected[0], discsC[0]);
                discsC[0].style.height = '15%'
                selected.shift();

                moves += 1;
                tracker.textContent = moves;
            } else if (discsC[0].getAttribute('score') < selected[0].getAttribute('score')) {
                thirdBox.insertBefore(selected[0], discsC[0]);
                discsC[0].style.height = '15%'
                selected.shift();

                moves += 1;
                tracker.textContent = moves;
            }
        }
    }

    check();
});

function check() {
    if(discsC.length === 4) {
        swal({title: "Good job!",
            text: "You won in "+ moves +" moves!",
            icon: "success"});
    }
}