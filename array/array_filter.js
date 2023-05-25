// =========== filter: Loc dieu kien cho array => tra ve mang moi ===========

let nums = [1,2,3,4];
let evenNums = nums.filter(function(x) {
    return x%2 === 0 ;
})

console.log(evenNums)