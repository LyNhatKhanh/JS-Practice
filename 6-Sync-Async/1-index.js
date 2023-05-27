let fs = require('fs');

/* 
Sync (Đồng bộ): Đợi hành động trước xong rồi mới tiếp tục hành động sau
|-----------------------|-------------------------|--------------|------------>
Make coffee (5m)    Make cf (done)          Wear Clothes (done)  Done
                     Wear Clothes              Make bed

=> Luôn chờ đợi hành động phía trước => load time cao
*/
console.log('Start')
let f1 = fs.readFileSync('./6-Sync-Async/file1.txt', { encoding: 'utf8' });
console.log(f1);
let f2 = fs.readFileSync('./6-Sync-Async/file2.txt', { encoding: 'utf8' });
console.log(f2);
console.log('End');

/* 
Async (Bất Đồng bộ): Hành động xảy đến liên tục, khi 1 hành động cần thời gian để hoàn thành, thì hành động sau sẽ thực hiện trước
|------------|-------------|---------|------------>
Make coffee  Wear clothes  Make bed  Done

=> Hành động nào cần thời gian thì thực hiện sau (khi hoành thành sẽ chen vào) => load time tốt
*/
console.log('----------------------------------------------------------------')

console.log('Start')
let f3 = fs.readFile('./6-Sync-Async/file1.txt', { encoding: 'utf8' }, function (err, data) {
    console.log('Loading file...');
    console.log(data); 
});
console.log(f3);
console.log('End');
