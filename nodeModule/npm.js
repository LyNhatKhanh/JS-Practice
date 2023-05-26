/* nmpjs.com 
> npm init
package name: mỗi project là 1 package (module)
version: default
entry point: file mặc định dùng
[Enter hết]

> npm install <module_install> --save -> lưu vào file package.json (dependences)
*/

let readlineSync = require('readline-sync');
// let username = readlineSync.question('What is your name? \n')
// console.log('i \'m ' + username + '!')

pet = { };

let name = readlineSync.question('Name: ');
let age = readlineSync.question('Age: ');
let weight = readlineSync.question('Weight: ');

pet.name = name;
pet.age = parseInt(age);
pet.weight = parseInt(weight);

console.log(pet)