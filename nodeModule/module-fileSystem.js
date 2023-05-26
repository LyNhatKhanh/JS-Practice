// https://nodejs.org/docs/latest-v18.x/api/

let fs = require('fs');

let text = fs.readFileSync('D:/Study/HTML5/Coursera_Lession/jsPractice/node-module/test.txt', { encoding: 'utf8' });
// let text = fs.readFileSync('./test.txt', { encoding: 'utf8' });
console.log(text);

fs.writeFileSync('D:/Study/HTML5/Coursera_Lession/jsPractice/node-module/test-2.txt', 'Hello, world!')