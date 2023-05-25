let mouse = {
  weight: 0.2,
  getweight: function () {
    return this.weight;
  },
};

// constructor function

function Mouse(color, weight) {
  this.type = "mouse";
  this.color = color;
  this.weight = weight;
}

let mouse1 = new Mouse("black", 0.2);
let mouse2 = new Mouse("white", 0.5);
// console.log(mouse1);
// console.log(mouse2);

let tom = {
  name: "Tom",
  stomach: [],
  stomachWeight: 0,
  eat: function (mouse) {
    this.stomach.push(mouse);
    this.stomachWeight += mouse.weight;
    return this;                                  // vi dong` nay nen goi nhieu lan duoc (chi 'this')
  },
};

let m1 = new Mouse_BT("m1", 0.5);
let m2 = new Mouse_BT("m2", 0.7);
let m3 = new Mouse_BT("m3", 0.2);

// tom.eat(m1.name).eat(m2.name).eat(m3.name)     // method chaining (goi nhieu lan tren 1 object)
tom.eat(m1).eat(m2).eat(m3); // method chaining (goi nhieu lan tren 1 object)
console.log(tom);
