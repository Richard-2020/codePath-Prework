// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables
var guessCounter = 0;
//var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var pattern = [[],[],[],[],[],[],[],[],[],[]];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var clear;
clearInterval(clear);
var LengthArr = 8;
var numButtons = 4;
var flag = true;
var allocatedTime = 10;
var remainderOfTime = 0;
var timer;
var maxTime = 10;
var maxScore = 0;
var patternLength = 4;
var maxButtons = 4;




function startGame() {
  //initialize game variables

  flag = true;
  for(let i = 0; i < 10; i++) pattern[numButtons][i] = Math.round(Math.random()*4);
  progress = 0;
  gamePlaying = true;
  
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 490,
  6: 200,
  7: 300,
  8: 600,
  9: 340,
  10: 210,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
 //updates time before playing next sequence
  let delay = nextClueWaitTime;
  guessCounter = 0;
  clearTimeout(timer);
  document.getElementById("score").innerHTML = "Score Board "+ maxScore;
  document.getElementById("p1").innerHTML = "Time Remaining: " + allocatedTime;

   //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[numButtons][i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[numButtons][i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  
    //allocatedTime = maxTime; //set remainder of the time to allocatedTime
    timer = setTimeout(function tick(){
    if(gamePlaying){
      timer = setTimeout(tick, 1000);
      updateTimer();
    }
  }, delay)
}
}  

function clearTimer(){
  clearTimeout(timer);
  remainderOfTime = 0;
  document.getElementById("p2").innerHTML = "";
}
function updateTimer(){
  //updates the timer
  if(allocatedTime > 0){
    document.getElementById("p1").innerHTML = "Time Remaining: " + allocatedTime;
    allocatedTime--;
  }
  if(allocatedTime == 0){
    document.getElementById("tooSlow").innerHTML = "Too Slow, Think fast";

  }
  
  if(allocatedTime > 0){
    document.getElementById("tooSlow").innerHTML = " ";

  }
  
}
function loseGame() {
  looseAlert(); 
  stopGame();
  allocatedTime = maxTime; //reset timeCounter
  window.clearInterval(clear); //Pop up window
  alert("Game Over. You lost.");
}

function winGame() {
  winAlert(); 
  stopGame();
  allocatedTime = maxTime; //reset timeCounter
  window.clearInterval(clear);
  alert("Congratulations you have won");
  
  progress = 0;
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if(btn == pattern[numButtons][guessCounter]){
    allocatedTime = maxTime;
    if(guessCounter == progress){
      progress++;
      maxScore = progress;
      
      if(progress == patternLength){
        winGame();
        return;
      }
      playClueSequence();
    }else{
        guessCounter++;
      }
  }  else{
      loseGame();
      return;
    }
  
  }
// Audio for when game is won
var win = new Audio(
"https://cdn.glitch.global/acdf3ae7-bc64-43bd-9091-3328c2978f69/monkeys-spinning-monkeys-kevin-macleod-main-version-02-05-8413.mp3?v=1650482111204"
);

//Audio for when game is lost
var loose = new Audio(
"https://cdn.glitch.global/acdf3ae7-bc64-43bd-9091-3328c2978f69/funky-junk-all-good-folks-main-version-01-01-192.mp3?v=1650482247276"
);

function looseAlert(){
  loose.play();
  
}

function winAlert(){
  win.play();
  
}

function restoreTimer(){
  return maxTime;
}



function scoreBoard(){
  document.getElementById("score").innerHTML = "Score Board "+ maxScore;

}
function removeButtons(){
  if(numButtons > 4){
    if(numButtons == 9){
      document.getElementById("incBtn").classList.remove("maxed");
    }
    numButtons--;
    document.getElementById("incORdec").innerHTML = numButtons;
    changeButtons();
  }
  else{
    document.getElementById("decBtn").classList.add("maxed");
  }
}

function increaseButtons(){
  if(numButtons < 9){
    if(numButtons == 4){
      document.getElementById("decBtn").classList.remove("maxed");
    }
    numButtons++;
    document.getElementById("incORdec").innerHTML = numButtons;
    changeButtons();
  }
  else{
    document.getElementById("incBtn").classList.add("maxed");
  }
}

function changeButtons(){
  for(let i = 1; i <= numButtons; i++){
    document.getElementById("button" + i).classList.remove("hidden");
  }
  for(let i = numButtons + 1; i <= maxButtons; i++){
    document.getElementById("button" + i).classList.add("hidden");
  }
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
console.log("Hello CodePath");