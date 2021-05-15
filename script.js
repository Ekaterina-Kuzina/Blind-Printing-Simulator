const btn = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');
const content = 'В жизни все имеет свое начало, так и любая наука и искусство берут свое начало где-то в глубине веков, а далее развиваются, совершенствуются, образуются новые направления, новые течения. Это относится и к фотографии, которую я воспринимаю как искусство, развитие которого напрямую связано с наукой, имею ввиду развитие фототехники.  В этой статье под названием «История фотографии кратко» собраны самые главные факты о зарождении и развитии великого искусства фотографии.';
const textLettersArr = content.split('');
const userLettersArr = [];
const result = [];
let indexOfElement = 0;

function createSpan() {
    textLettersArr.forEach(item => {
        const span = document.createElement("span");
        span.innerHTML = `${item}`;
        wrapper.appendChild(span);
    });
}
createSpan();

const spans = document.querySelectorAll('span');
function highlightLetter(indexOfElement, styleOfLetter) {
    spans.forEach(() => {
        spans[indexOfElement].classList.add(styleOfLetter);
    });
}

function removeHighlightLetter(styleOfLetter) {
    spans.forEach((span) => {
        span.classList.remove(styleOfLetter);
    });
}
function compareLetters(e) {
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
btn.addEventListener('click', () => {
    highlightLetter(indexOfElement, 'green');
});

body.addEventListener('keydown', (e) => {
    removeHighlightLetter('green');
    removeHighlightLetter('red');
    compareLetters(e);
});



console.log(userLettersArr);
console.log(textLettersArr)
console.log(indexOfElement);
console.log(result);






