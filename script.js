
const startPage = document.querySelector('.start-page');
const startBtn = document.querySelector('.start-page__btn');
const wrapperContent = document.querySelector('.wrapper-content');
const body = document.querySelector('body');
let textLettersArr;
const userLettersArr = [];
const result = [];
let indexOfElement = 0;
let spans;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//server
function getData(url) {
    fetch(url)
        .then(data => data.json())
        .then(result => {
            console.log(result)
            textLettersArr = result[getRandomInt(result.length)].text.split('');
            createSpan(textLettersArr);
            spans = document.querySelectorAll('span');
        });
}
getData('http://localhost:3000/content');
//
function createSpan(textLettersArr) {
    textLettersArr.forEach(item => {
        const span = document.createElement("span");
        span.innerHTML = `${item}`;
        wrapperContent.appendChild(span);
    });
}
function highlightLetter(indexOfElement, styleOfLetter) {
    spans[indexOfElement].classList.add(styleOfLetter);
}
function removeHighlightLetter(styleOfLetter) {
    spans.forEach((span) => {
        span.classList.remove(styleOfLetter);
    });
}
function greenLetter(){
    spans[indexOfElement-1].classList.add('greenLetter');
    console.log('xyi')
}
function compareLetters(e) {
    console.log(textLettersArr)
    if (textLettersArr[indexOfElement] == e.key) {
        console.log(textLettersArr[indexOfElement]);
        userLettersArr.push(e.key);
        result.push(textLettersArr[indexOfElement]);
        console.log('good');
        indexOfElement++;
        highlightLetter(indexOfElement, 'green');
    } else {
        highlightLetter(indexOfElement, 'red');
        console.log('bad');
    }
}
function addClassHide(block) {
    block.classList.add('hide');
}
function removeClassHide(block) {
    block.classList.remove('hide');
}
startBtn.addEventListener('click', () => {
    addClassHide(startPage);
    removeClassHide(wrapperContent);
    highlightLetter(indexOfElement, 'green');
});

body.addEventListener('keydown', (e) => {
    removeHighlightLetter('green');
    removeHighlightLetter('red');
    compareLetters(e);
    greenLetter();
});

console.log(userLettersArr);
// console.log(textLettersArr)
console.log(indexOfElement);
console.log(result);






