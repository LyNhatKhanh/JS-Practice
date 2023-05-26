let Mouse = require('./mouse');
let Cat = require('./cat');

let mickey = new Mouse('mickey', 'black');
let jerry = new Mouse('jerry', 'black');
let tom = new Cat();

console.log(mickey);
console.log(jerry);
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);