
let startTime;

//if you are reading this code then you should add some more 
const sentences = [
    "hi how are you i hope you are fine",
    "you must work hard",
    "wow i am in a hackathon",
    "i like programming ",
    "this is just a random sentence",
    'This is Typing test '
];


function setNewSentence() 
{
    let randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById("sentence").innerText = sentences[randomIndex]; }



document.getElementById("typingInput").addEventListener('input', function() 

{
    if (!startTime) startTime = Date.now();
    let currentSentence = document.getElementById('sentence').innerText.trim();

    if (this.value.trim().toLowerCase() === currentSentence.toLowerCase()) {
        let timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
        document.getElementById('time').textContent = `Time: ${timeTaken}s`;

        
        startTime = null;
        this.value = "";
        setNewSentence();
    }
});


setNewSentence();
