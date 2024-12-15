var occupations = [
    'Software Architect', 'Solutions Engineer', 
    'Guitarist', 'Traveler', 'IoT Builder',
    'System Designer',
    'Software Engineer', 'Problem Solver'
];

var gameInstance;
var direction = 1;
var letterPos = 0;
var textPos = 0;
var letter = '';
var text = '';
var _pos = 0;
var messagePos = 0;


$(document).ready(function () {

    const faders = document.querySelectorAll('.fade-in');
    const options = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, options);
    
    faders.forEach(fader => {
      observer.observe(fader);
    });
    

    _text = document.getElementById('greeting-text').innerText;
    // message = document.getElementById('message-text').innerText;
    var cursor = document.getElementById('txt-cursor');
    document.getElementById('current-year').textContent = new Date().getFullYear();

    setTimeout(writeGreeting, 30);
    setInterval(function () {
        if (cursor.innerText == " |") {
            cursor.innerText = "";
        }
        else {
            cursor.innerText = " |";
        }
    }, 250);
});

function writeGreeting() {
    var greeting = document.getElementById('txt-greeting');
    var _letter = _text[_pos];

    if (_pos < _text.length) {
        greeting.textContent += _letter;
        _pos++;
        setTimeout(writeGreeting, 30);
    }
    else {
        setTimeout(writer, 50);
    }
}

function writeMessage() {
    // var messageElement = document.getElementById('txt-message');
    // var _letter = message[messagePos];

    // if (messagePos < message.length) {
    //     messageElement.textContent += _letter;
    //     messagePos++;
    //     setTimeout(writeMessage, 10);
    // }
}

async function writer() {
    var occupation = document.getElementById('txt-occupation');

    text = occupations[textPos];
    letter = text[letterPos];
    if (letterPos < text.length && direction == 1) {
        occupation.textContent += letter;
        letterPos++;
        setTimeout(writer, 50);
    }
    else {
        setTimeout(writeMessage, 10);
        await new Promise(r => setTimeout(r, 5000)).then(function () {
            direction = -1;
            setTimeout(eraser, 50);
        });
    }
}

function eraser() {
    var occupation = document.getElementById('txt-occupation');

    if (direction == -1) {
        occupation.textContent = occupation.innerText.slice(0, -1);
        setTimeout(eraser, 50);
        if (occupation.innerText == '') {

            letterPos = 0;
            var prevTextPos = textPos;
            while (textPos == prevTextPos) {
                textPos = Math.floor(Math.random() * occupations.length);
            }
            direction = 1;
            setTimeout(writer, 75);
        }
    }
}

function updateExperience() {
    // when I started in the industry!
    const startDate = new Date('2016-11-01T00:00:00Z');
    const now = new Date();

    const diffInMilliseconds = now - startDate;

    const years = (diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)).toFixed(6);

    document.getElementById('dynamic-experience').textContent = years + ' years';
}

setInterval(updateExperience, 1000);

updateExperience();