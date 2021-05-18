import { getData } from './content/makeTextContent.js';
import { indexOfElement, highlightLetter, removeHighlightLetter, greenLetter, compareLetters } from './content/changeAndCompareLetters.js';
import { addClassHide, removeClassHide } from './content/changeClassHide.js';
import { countSpeed, minute, containerOfContent } from './content/countSpeed.js';

const startPage = document.querySelector('.start-page');
const startBtn = document.querySelector('.start-page__btn');
const body = document.querySelector('body');
const returnToStart = document.querySelector('.back');
let interval;

getData('http://localhost:3000/content');

startBtn.addEventListener('click', () => {
    addClassHide(startPage);
    removeClassHide(containerOfContent);
    highlightLetter(indexOfElement, 'green');
    interval = setInterval(countSpeed, 100);
});

body.addEventListener('keydown', (e) => {
    if (e.key !== 'CapsLock') {
        removeHighlightLetter('green');
        removeHighlightLetter('red');
        compareLetters(e);
        greenLetter();
    }
});

returnToStart.addEventListener('click', (e) => {
    clearInterval(interval);
    minute.quantity = 60;
    addClassHide(containerOfContent);
    removeClassHide(startPage);
});
