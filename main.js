let count = 0;
// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const hat = new Audio('sounds/hi-hat.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const tock = new Audio ('sounds/tock.mp3');
const kick = new Audio('sounds/kick-drum.mp3');

let metronome = document.querySelector("#metronome");
let kickDrum = document.querySelector("#kick-drum");
let snareDrum = document.querySelector("#snare-drum");
let hiHat = document.querySelector("#hi-hat");

let soundBeat = 0;
let setBeat = document.querySelector(".setBeat");


// This function is called every 600ms
function update() {

    // Play the 'tick' sound
    tick.play();
soundBeat++;
if (soundBeat % 4 === 0) {
    tock.play();
}

setBeat.innerText = (soundBeat % 4 === 0)+1;








}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
