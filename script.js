// script.js
let paragraph = document.getElementById('paragraph');
let voices = [];
let voiceIndex = 0;

// Get the list of available voices
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
};

// Set up the speech recognition system
const recognition = new webkitSpeechRecognition();
recognition.lang = 'pt-BR';
recognition.maxResults = 10;

recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    if (transcript.toLowerCase() === 'ler') {
        readParagraph();
    }
};

recognition.start();

// Function to read the paragraph aloud
function readParagraph() {
    const utterance = new SpeechSynthesisUtterance(paragraph.textContent);
    utterance.voice = voices[voiceIndex];
    window.speechSynthesis.speak(utterance);
}