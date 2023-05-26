var employees = [
    {name: 'Khanh', age: 22},
    {name: 'Hang', age: 24}
]

for(var i=0; i<employees.length; i++) {
    console.log(employees[i].name, employees[i].age); 
}

for (var employee of employees) {
    console.log(employee.name, employee.age)
}

myDog = {
    name : "Cat",
    weight: 5,
    age: 1,
    bark: function() {
        console.log('Meo meo, my name is', this.name);
    },
    eat: function(bone) {
        this.weight = this.weight + bone.weight;
        return this;
    } 
};
console.log('============')
for (var key in myDog) {
    console.log(key, myDog[key]);

}