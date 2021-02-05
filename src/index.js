import numeral from 'numeral';
import './index.css';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome template!`); // eslint-disable-line no-console
document.getElementById('text').textContent = `Hello World!`;
