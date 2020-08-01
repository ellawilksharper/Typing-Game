window.addEventListener('load', init);

// Globals

// Extra levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};

// To change level
currentLevel = levels.medium;

let time = currentLevel;
let score= 0;
let isPlaying;


// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'agile',
    'developer',
    'flexbox',
    'bootstrap',
    'array',
    'object',
    'string',
    'boolean',
    'legacy',
    'front',
    'back',
    'api',
    'javascript',
    'python',
    'index',
    'dataset',
    'justify',
    'bugs',
    'kata',
    'methodology',
    'logic',
    'problemset',
    'loop',
    'functions',
    'css',
    'html',
    'collaborate',
    'engineering',
    'technology',
    'indent',
    'clean',
    'accessibility',
    'source',
    'implement'
]; 

// Init game
function init() {
    // Show level in seconds 
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start matching on text input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check the game status
    setInterval(checkStatus, 50)
}

// Start match
function startMatch(){
  if(matchWords()) {
    isPlay = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
}

  // If score is -1 display 0
  if(score === -1){
    scoreDisplay.innerHTML = 0;
  } else{
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
    return true;
 } else {
    message.innerHTML = '';
    return false;
 }
}

// Pick and show random word from array
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length); 
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown(){
    // Check time is not run out
    if(time > 0)   {
    // Decrease time
    time--;
    } else if(time === 0) {
    // Game is over
    isPlaying = false
    countdown = 4;
    }
    // Show time
    timeDisplay.innerHTML = time;   
}

// Check game status
function checkStatus(){
    if(!isPlaying && time === 0) {
        message.innerHTML = "Game Over!";
        score = -1;
    }
}

