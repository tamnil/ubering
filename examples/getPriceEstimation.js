const readline = require('readline');
const uber = require('../src/index')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questionOrigin = rl.question('Origin:', (answer) => {
  console.log(`quering uber`);
  rl.close();
});

let questionDestination = rl.question('Destination:', (answer) => {
  console.log(`quering uber`);
  rl.close();
});

