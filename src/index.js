import numeral from 'numeral';
import './index.css';

const naira = '\u20A6';
const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);

document.getElementById('text').textContent = `Hello King, today's revenue is ${courseValue}`;
