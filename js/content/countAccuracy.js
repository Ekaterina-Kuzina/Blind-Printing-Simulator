export let accuracy = 100;

export function countAccuracy() {
    accuracy = (accuracy - 0.1).toFixed(1);
    document.querySelector('#certificateAccuracy').innerHTML = accuracy;
    document.querySelector('.final-message #certificateAccuracy').innerHTML = accuracy;
}
