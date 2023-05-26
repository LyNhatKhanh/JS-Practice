let me = { name: 'Khanh', age: 22, gender: 'male' };
let meString = JSON.stringify(me);                    // biến object thành String 
let meStringToObject = JSON.parse(meString);          // biến String thành object 

console.log(me);
console.log(meString);
console.log(meStringToObject);
console.log(typeof me);
console.log(typeof meString);
console.log(typeof meStringToObject);

console.log('============================================');

let string = '{"name":"Khanh","age":22,"gender":"male"}  '
let stringToObject = JSON.parse(string)
console.log(string);
console.log(stringToObject);
console.log(typeof string);
console.log(typeof stringToObject);

console.log(stringToObject.age);

