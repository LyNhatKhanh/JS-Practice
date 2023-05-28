// arrow function khong dung thay the duoc cho constructor function
const logger = function(log) {
    console.log(log);
};
logger('Hello');

const logger1 = log => {
    console.log(log);
};
logger1('Hello');

const object = function(a,b) {
    return {
        a: a,
        b: b
    }
}
console.log(object(3,4));

const object1 = (a,b) =>  ({a: a, b: b})
console.log(object(3,4));
