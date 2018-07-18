// import fs from "fs";
// console.log("Hello World!");

// // function sum(a, b){
// //     return a + b;
// // }

// const sum = (a, b) => {
//     return a + b;
// }

// // console.clear();

// console.log(sum(1, 2));

// let receivables = 10;
// let payables = 8;
// let netWorkingCapital = receivables - payables;
// console.log(`Net working capital is: ${netWorkingCapital}`);

class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(this.name + " makes a noisy");
    }
}

var an = new Animal("animal");
an.speak();

class Dog extends Animal {
    speak(){
        console.log(this.name + "!!!");
    }
}

var dog = new Dog("dog");
dog.speak();