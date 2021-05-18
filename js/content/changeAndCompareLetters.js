import { spans, textLettersArr } from './makeTextContent.js';
import { countAccuracy } from './countAccuracy.js';

export let indexOfElement = 0;
export const userLettersArr = [];
export const result = [];
export let speed = 0;

export function highlightLetter(indexOfElement, styleOfLetter) {
    spans[indexOfElement].classList.add(styleOfLetter);
}

export function removeHighlightLetter(styleOfLetter) {
    spans.forEach((span) => {
        span.classList.remove(styleOfLetter);
    });
}

export function greenLetter() {
    if (indexOfElement >= 1) {
        spans[indexOfElement - 1].classList.add('greenLetter');
    }
}

export function compareLetters(e) {
    if (textLettersArr[indexOfElement] == e.key) {
        userLettersArr.push(e.key);
        result.push(textLettersArr[indexOfElement]);
        indexOfElement++;
        highlightLetter(indexOfElement, 'green');
        speed++;
    } else {
        countAccuracy();
        highlightLetter(indexOfElement, 'red');
    }
}
