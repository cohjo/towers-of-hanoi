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
const fiveD = document.querySelector('#disc5');
const sixD = document.querySelector('#disc6');

const score1 = document.getElementById('disc1').getAttribute('score');
const score2 = document.getElementById('disc2').getAttribute('score');
const score3 = document.getElementById('disc3').getAttribute('score');
const score4 = document.getElementById('disc4').getAttribute('score');
const score5 = document.getElementById('disc5').getAttribute('score');
const score6 = document.getElementById('disc6').getAttribute('score');


const title = document.getElementById('titleImg');
const hold = document.getElementById('holder');
const inst = document.getElementById('instr');
const incr = document.getElementById('inc');

var selected = [];
var moves = 0;
var winning = 4;

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

incr.addEventListener('click', function(e) {

    if(winning === 4) {
        firstBox.insertBefore(fiveD, discsA[0]);
        fiveD.style.display = 'block';
        winning++;
    } else if (winning === 5) {
        firstBox.insertBefore(sixD, discsA[0]);
        sixD.style.display = 'block';
        winning++;
    }
})

title.addEventListener('click', function() {
    location.reload();

})

inst.addEventListener('click', function(e) {
    e.preventDefault();

    swal({title: 'Instructions: ',
        text: 'Move all discs to the third tower exactly how they are displayed. You can only move discs one by one, and you cannot stack larger discs on smaller ones. Good Luck! (Click title to restart)'})
})

function check(winning) {
    if(discsC.length === winning) {
        swal({title: "Good job!",
            text: "You won in "+ moves +" moves!",
            icon: "success"}).then(function() {
                location.reload();
            });
    }
}