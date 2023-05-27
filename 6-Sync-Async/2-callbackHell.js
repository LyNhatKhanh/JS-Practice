let fs = require('fs');

// ============================= Sync =============================

let f1 = fs.readFileSync('./6-Sync-Async/file1.txt', { encoding: 'utf8' });
let f2 = fs.readFileSync('./6-Sync-Async/file2.txt', { encoding: 'utf8' });
let f3 = fs.readFileSync('./6-Sync-Async/file3.txt', { encoding: 'utf8' });
console.log(f1, f2, f3);

console.log('==========================================================');

// ============================= Async =============================

let f4 = fs.readFile('./6-Sync-Async/file1.txt', { encoding: 'utf8' }, function(err, data) {
    console.log(data);
});
let f5 = fs.readFile('./6-Sync-Async/file2.txt', { encoding: 'utf8' }, function(err, data) {
    console.log(data);
});
let f6 = fs.readFile('./6-Sync-Async/file3.txt', { encoding: 'utf8' }, function(err, data) {
    console.log(data);
});

console.log('==========================================================');

// ============================= Async (Callback Hell) '==' Nested if, for  =============================
// => Ngày xưa Callback Hell xảy ra rất nhiều => rối mắt ==> Sau này, có cách khắc phục bằng Promise

let f7 = fs.readFile('./6-Sync-Async/file1.txt', { encoding: 'utf8' }, function(err, data) {
    console.log(data + ' (2)');
    let f8 = fs.readFile('./6-Sync-Async/file2.txt', { encoding: 'utf8' }, function(err, data) {
        console.log(data + ' (2)');
        let f9 = fs.readFile('./6-Sync-Async/file3.txt', { encoding: 'utf8' }, function(err, data) {
            console.log(data + ' (2)');
        });
    });
});
