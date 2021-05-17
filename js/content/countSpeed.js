import { speed } from './changeAndCompareLetters.js';
import { addClassHide } from './changeClassHide.js';
import { removeClassHide } from './changeClassHide.js';

export let minute = { quantity: 60 };
export const containerOfContent = document.querySelector('.container');
export const finalMessage = document.querySelector('.final-message');

export function countSpeed() {
    if (minute.quantity > 0) {
        minute.quantity--;
        console.log(minute.quantity);
        document.querySelector('#certificateSpeed').innerHTML = speed;
        document.querySelector('.final-message #certificateSpeed').innerHTML = speed;
    } else {
        addClassHide(containerOfContent);
        removeClassHide(finalMessage);
    }
}
