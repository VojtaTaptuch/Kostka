
const dice = document.getElementById('dice');
const result = document.getElementById('result');
const play = document.getElementById('play');

let hod; 
let hody = [];
let timer = false;
function animace() {
    hod = Math.ceil(Math.random() * 6);
    dice.src = `img/kostka${hod}.png`;
}

play.addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(animace, 100);
        play.innerText = 'STOP'
    } else {
        clearInterval(timer);
        timer = false;
        hody.push(hod);
        result.innerHTML = statistika();
        play.innerText = 'HREJ';
    }
})

function sum() {
    let suma = 0;
    hody.forEach((value) => {
        suma += value;
    })
    return suma;
}

function max() {
    let maximum = 1;    
    hody.forEach((value) => {
        if (value > maximum) {
            maximum = value;
        }
    })
    return maximum;
}

function min() {
    let minimum = 6;
    hody.forEach((value) => {
        if (value < minimum) {
            minimum = value;
        }
    })
    return minimum;
}

function statistika() {
    let vypis = `<h3>Aktuální hod: ${hod}</h3>`;
    vypis += `<h5>Počet hodů: ${hody.length}</h5>`;
    vypis += `<h5>Součet hodů: ${sum()}<h5>`;
    vypis += `<h5>Průměr hodů: ${(sum() / hody.length).toFixed(2)}<h5>`;
    vypis += `<h5>MAXIMUM: ${max()}<h5>`;
    vypis += `<h5>MINIMUM: ${min()}<h5>`;
    return vypis;
}