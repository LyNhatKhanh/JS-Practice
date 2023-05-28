// setTimeout
// clearTimeout
// setTimeout(fn, ms); // fn chờ ms kết thúc thì mới chạy

var finish = function() {
    console.log('Finish')
};
console.log('Start');
var timeID = setTimeout(finish,1000);
console.log('Done');
clearTimeout(timeID);