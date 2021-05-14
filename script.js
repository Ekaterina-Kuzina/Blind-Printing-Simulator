const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');
const content = 'В жизни все имеет свое начало, так и любая наука и искусство берут свое начало где-то в глубине веков, а далее развиваются, совершенствуются, образуются новые направления, новые течения. Это относится и к фотографии, которую я воспринимаю как искусство, развитие которого напрямую связано с наукой, имею ввиду развитие фототехники.  В этой статье под названием «История фотографии кратко» собраны самые главные факты о зарождении и развитии великого искусства фотографии.';
const textLettersArr = content.split('');

function createSpan() {
    textLettersArr.forEach(item => {
        const span = document.createElement("span");
        span.innerHTML = `${item}`;
        wrapper.appendChild(span);
    });
}
createSpan();

function highlightLetter(i) {
    const spans = document.querySelectorAll('span');
    spans.forEach(() => {
        spans[i].classList.add('green');
    });
}
function removeHighlightLetter() {
    const spans = document.querySelectorAll('span');
    spans.forEach((span) => {
        span.classList.remove('green');
    });
}

const userLettersArr = [];
const result = [];
let i = 0;
body.addEventListener('keydown', (e) => {
    removeHighlightLetter();
    function compareLetters() {
        if (textLettersArr[i] == e.key) {
            console.log(textLettersArr[i]);
            userLettersArr.push(e.key);
            result.push(textLettersArr[i]);
            console.log('good');
            highlightLetter(i);
            i++;
        } else {
            console.log('bad');
        }
    }
    compareLetters();
});
console.log(userLettersArr);
console.log(textLettersArr)
console.log(i);
console.log(result)






