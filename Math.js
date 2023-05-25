/*
Math object in JS 
Math.PI
Math.ceil(num)
Math.floor(num)
Math.round(num)
Math.max(x1,x2,...)
Math.min(x1,x2,...)
Math.random()

Google keyword: Mozilla Math object
*/

function discArea(r) {
    return Math.PI * r * r;
}
let s = discArea(5)
console.log(Math.round(s)) // ceil,floor

console.log('Random:',Math.random())