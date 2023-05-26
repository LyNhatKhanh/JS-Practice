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

bone = {
    weight: 0.5
}

// console.log(myDog.bark());
console.log('Before eating: ' + myDog.weight);
myDog.eat(bone);
console.log('After eating: ' + myDog.weight);