const readlinesync = require('readline-sync');

const userName = readlinesync.question("what is your name?");

console.log(`Welcome, ${userName} !`);