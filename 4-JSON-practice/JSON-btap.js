// ====================== BAI TAP ======================
let readlineSync = require("readline-sync");
let fs = require("fs");

function Student(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

listStudent = [];

// let s1 = new Student("Khanh", 22, "Male");
// let s2 = new Student("Hang", 24, "Female");
// let s3 = new Student("Hang khung", 24, "Female");
// let s4 = new Student("Khanh dep trai", 22, "Male");
// let s5 = new Student("Ly Nhat Khanh", 22, "Male");

// listStudent.push(s1);
// listStudent.push(s2);
// listStudent.push(s3);
// listStudent.push(s4);
// listStudent.push(s5);

// Khi đã có file thì đọc file ra

readFile = fs.readFileSync(
  "JS-Practice/4-JSON-practice/file-save.txt",
  { encoding: "utf8" }
);
listStudent = JSON.parse(readFile);

console.log("Ban co muon them hoc sinh moi khong?");
console.log("1. Co");
console.log("2. Khong. Hay hien danh sach hoc sinh");
console.log("3. Thoat");
let choice;
do {
  choice = readlineSync.question("Lua chon cua ban la: ");
  switch (choice) {
    case "1":
      nameStudent = readlineSync.question("Name: ");
      ageStudent = readlineSync.questionInt("Age: ");
      genderStudent = readlineSync.question("Gender: ");
      let newStudent = new Student(nameStudent, ageStudent, genderStudent);
      listStudent.push(newStudent);
      break;
    case "2":
      console.log("Ok");
      console.log("Danh sach hoc sinh");
      for (let key in listStudent) {
        console.log('Hoc sinh thu '+ key);
        console.log('Ten: ' + listStudent[key].name);
        console.log('Tuoi: ' + listStudent[key].age);
        console.log('Gioi tinh: ' + listStudent[key].gender);
        console.log('=================')
      }
      //   for (let student of listStudent) {
      //     // console.log(student);
      //     console.log('Ten: '+ student.name);
      //     console.log('Tuoi: '+ student.age);
      //     console.log('Gioi tinh: '+ student.gender);
      //   }
      break;
    case "3":
      console.log("Bye bye");
      break;
    default:
      if (choice == 1 || choice == 2 || choice == 3) continue;
      else {
        console.log("Ban da nhap sai");
      }
  }
} while (choice != 3);

let text = JSON.stringify(listStudent);
// console.log(text);
let save = fs.writeFileSync(
  "JS-Practice/4-JSON-practice/file-save.txt",
  text
);
