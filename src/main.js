import { toggler } from './js/helpers.js';

const myButton = document.getElementById('playbutton');

myButton.addEventListener('click', () => {
  toggler.toggleOpacity(myButton);
});