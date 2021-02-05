import chalk from 'chalk';

/* eslint-disable no-console */

console.log(chalk.magenta('Starting dev server...'));
setTimeout(function() { console.log(chalk.green('Running app on localhost:3000')); }, 3000);
