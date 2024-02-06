// Assignment 1 | COMP1073 Client-Side JavaScript
document.addEventListener("DOMContentLoaded", (event) => {
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");
const addStudentIdButton = document.getElementById("addStudentId");


// Constants for p tag to display query selectors
const noun1Display = document.getElementById("choosenNoun1");
const verbDisplay = document.getElementById("choosenVerb");
const adjectiveDisplay = document.getElementById("choosenAdjective");
const noun2Display = document.getElementById("choosenNoun2");
const settingDisplay = document.getElementById("choosenSetting");
// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays
const nouns = ["Turkey", "Mom", "Dad", "Dog", "Teacher", "Elelphant", "Cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "Kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const noun2 = ["goat","monkey","fish","cow","frog","bug","worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass","in my shoes"];

// Variables for count to grab array elements
let nounCount = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    noun1Display.textContent = nouns[Math.floor(Math.random() * nouns.length)];
    // if-else to change count setting
    nounCount = (nounCount + 1) % nouns.length;
}

function verb_on_click() {
    verbDisplay.textContent = verbs[Math.floor(Math.random() *verbs.length)];
}

function adjective_on_click() {
    adjectiveDisplay.textContent = adjectives[Math.floor(Math.random() * adjectives.length)]; 
}

function noun2_on_click() {
    noun2Display.textContent = noun2[Math.floor(Math.random() * noun2.length)];
}

function setting_on_click() {
    settingDisplay.textContent = settings[Math.floor(Math.random() * settings.length)];
}

// concatenate the user story and display
function playback_on_click() {
    storyDisplay.textContent = `${noun1Display.textContent} ${verbDisplay.textContent} ${adjectiveDisplay.textContent} ${noun2Display.textContent} ${settingDisplay.textContent}`;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = noun2[Math.floor(Math.random() * noun2.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];
    storyDisplay.textContent = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
}

function addStudentId() {
    const studentId = "Vraj Alpeshkumar Patel / 200554104"; 
    const studentIdElement = document.getElementById("studentId");
    studentIdElement.textContent = "Name / Student ID: " + studentId;
}


/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
addStudentIdButton.addEventListener("click", addStudentId);
});