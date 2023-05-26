/*
prototype: cũng là object, được chia sẻ giữa tất cả các object được tạo từ 'new'
=> chỉ khởi tạo 1 lần duy nhất, các object khác đều có thuộc tính (phương thức) này,
khi gọi prototype của các object đều chỉ trỏ về prototype.
Nếu khai báo this.___ thì mỗi lần tạo ra 1 object thì lại khởi tạo 1 thuộc tính (phương thức)
==> đỡ tốn bộ nhớ

### khi tạo function mới, method mới trong constructor function thì mỗi object được khởi tạo,
lại tạo ra 1 function đó khác nhau => khi so sánh sẽ ra kết quả là 'false'


*/

function Mouse(name, color, weight) {
  this.type = "mouse";
  this.name = name;
  this.color = color;
  this.weight = weight;
  // this.sleep = function () {
  //   console.log("Sleeping...");
  // };
}

Mouse.prototype.sleep = function () {
  console.log(this.color +  " Sleeping...");
};

let jerry = new Mouse("jerry", "white", 0.5);
let mickey = new Mouse("mickey", "red", 0.5);
// console.log(jerry.type === mickey.type);
// console.log(jerry.sleep === mickey.sleep);

jerry.sleep();
mickey.sleep();
