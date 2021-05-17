import { getData } from './content/makeTextContent.js';
import { indexOfElement } from './content/changeAndCompareLetters.js';
import { highlightLetter } from './content/changeAndCompareLetters.js';
import { removeHighlightLetter } from './content/changeAndCompareLetters.js';
import { greenLetter } from './content/changeAndCompareLetters.js';
import { compareLetters } from './content/changeAndCompareLetters.js';
import { addClassHide } from './content/changeClassHide.js';
import { removeClassHide } from './content/changeClassHide.js';
import { countSpeed } from './content/countSpeed.js';
import { minute } from './content/countSpeed.js';
import { containerOfContent } from './content/countSpeed.js';

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
    interval = setInterval(countSpeed, 1000);
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
