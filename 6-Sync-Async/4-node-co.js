// được phát trên bên bên thứ 3 => npm init => install
/*
- giả sử phải đọc 3 file lần lượt theo thứ tự 123, xong 1 xong mới đọc 2 xong mới đọc 3. Dùng Promise.all ko đảm bảo thứ tự.
- cả hai cái đều là bất đồng bộ hết, chỉ khác là Node co thì đảm bảo thứ tự làm việc như đồng bộ, còn promise all thì không đảm bảo.
- yield là một cái thuộc tính tạm dừng hàm generator, nhờ vậy nên có thể gán vào các biến song 1,2,3 , sau đó có thể return ra sau,
(với cơ chế đọc từng file và trả về giá trị promise ở trên) . Mà hàm không block chỗ đọc file ,vẫn có thể chạy không đồng bộ.

*/

var co = require('co');
var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
            if (err)
                return reject(err);
            else
                return resolve(data);
        });
    });
}

/*
- Khi chúng ta gọi Generator function : " nameYourFuntion() " , nó không trả về các kiểu dữ liệu cơ bản mà đẩy về một iterator object.
Hàm next() của iterator object được sử dụng để truy xuất các node dữ liệu sau mỗi bước resume lại generator function. 
Khi đó generator function sẽ thực thi hàm cho đến khi gặp từ khóa yield , hoặc return kế tiếp chưa được duyệt ở bước trước.
- yeild là từ khóa dùng để tạm dừng và cũng để tiếp tục việc thực thi bên trong generator function.
*/

// ========================== Gọi ra và dùng luôn ==========================
// Chương trình không phải dừng lại đợi, không bị block ở chỗ đọc file. Vẫn chạy ở chỗ khác, nhưng trong hàm vẫn chờ nhau đọc từng file 1-2-3
co(function* () { 
    // var file1 = yield readFilePromise('./6-Sync-Async/file1.txt');
    // var file2 = yield readFilePromise('./6-Sync-Async/file2.txt');
    // var file3 = yield readFilePromise('./6-Sync-Async/file3.txt');
    var values = yield [
        readFilePromise('./6-Sync-Async/file1.txt'),
        readFilePromise('./6-Sync-Async/file2.txt'),
        readFilePromise('./6-Sync-Async/file3.txt')
    ];
    return values;
}).then(function (values) {
    console.log(values);
}).catch(function (err) {
    console.log(err);
});
console.log('hello');

// ========================== Gọi ra nhưng khi nào cần thì mới dùng ==========================
var read = co.wrap(function* (files) {
    // [String] -> [Promise]
    var values = yield files.map(function (file) {
        return readFilePromise(file);
    });
    return values;
});

read(['./6-Sync-Async/file1.txt', './6-Sync-Async/file2.txt', './6-Sync-Async/file3.txt'])
    .then(function (values) {
        console.log(values);
    }).catch(function (err) {
        console.error(err);
    });