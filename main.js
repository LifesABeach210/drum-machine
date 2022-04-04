

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
let kickDrumTiming = document.querySelector('#kick-drum-timing');
let snareDrumTiming = document.querySelector("#snare-drum-timing");
let metronomeTiming = document.querySelector("#metronome-timing");
let hiHatTiming = document.querySelector("#hi-hat-timing");

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

setBeat.innerText = (soundBeat % 4)+1;

if (metronome.checked===true) {
   if (Number(setBeat.innerText)===Number(metronomeTiming.value)) {
    tick.play();
   }
   
   
}

if (hiHat.checked===true) {
    if (Number(setBeat.innerText)===Number(hiHatTiming.value)) {
        hat.play();
    }
    
}

if (snareDrum.checked===true) {
   if (Number(setBeat.innerText)===Number(snareDrumTiming.value)) {
    snare.play();
   }
    
}

if (kickDrum.checked===true) {
   if (Number(setBeat.innerText)===Number(kickDrumTiming.value)) {
    kick.play();
   }
   
}


}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
