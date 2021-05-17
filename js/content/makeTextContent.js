export let textLettersArr;
export let spans;

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getData(url) {
    fetch(url)
        .then(data => data.json())
        .then(result => {
            textLettersArr = result[getRandomInt(result.length)].text.split('');
            createSpan(textLettersArr);
            spans = document.querySelectorAll('span');
        });
}

export function createSpan(textLettersArr) {
    textLettersArr.forEach(item => {
        const span = document.createElement("span");
        const wrapperContent = document.querySelector('.wrapper-content');
        span.innerHTML = `${item}`;
        wrapperContent.appendChild(span);
    });
}
