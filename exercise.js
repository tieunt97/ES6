
// 1.	Arrow functions
// 1.1. Write an arrow function which returns the string ‘Hello world!’
let str = () => 'Hello world!';
console.log(str());

// 1.2. Write an arrow function which returns the square of a given number
var x = 5;
var square = (x) => x * x;
console.log(square(x));

// 1.3. Given this array: `[3,62,234,7,23,74,23,76,92]`, use the array filter method and 
// an arrow function to create an array of the numbers greater than `70`
var numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
var above70 = numbers.filter((x) => x > 70);
console.log(above70);

// 1.4. Write an expression using filter and reduce to compute the total value of the machines in the inventory array.
var inventory = [
  { type: "machine", value: 5000 },
  { type: "machine", value: 650 },
  { type: "duck", value: 10 },
  { type: "furniture", value: 1200 },
  { type: "machine", value: 77 }
];
var totalMachineValue = inventory.filter((obj) => obj.type == "machine").reduce((sum, obj) => sum + obj.value, 0);
console.log(totalMachineValue);


// 1.5. Rewrite arrow function below with ES5 function
function Car() {
  this.speed = 0;

  setTimeout(function () {
    this.speed += 10;
  }.bind(this), 100);
}

var c = new Car();
setTimeout(function () {
  console.log(c.speed)
}, 200);


// 2.	Class
class Animal {
  // 2.1. 
  constructor(name) {
    this.name = name;
    this.thirst = 100;
    this.belly = [];
  }
  // 2.2. 
  drink() {
    this.thirst -= 10;
  }
  // 2.3.
  eat(food) {
    this.belly.push(food);
  }
}
// 2.4. 
class Dog extends Animal {
  constructor(breed) {
    super('Dog');
    this.breed = breed;
  }

  bark() {

  }
}

let ani = new Animal("ani");
ani.drink();
console.log('thirst', ani.thirst);
ani.eat("fish");
console.log('belly:', ani.belly);
let dog = new Dog("Cai");
console.log('breed:', dog.breed);
dog.eat("fish");
console.log(dog.belly);
// 3.	Enhanced Object Literals
// 3.1. Rewrite the function below using ES6 enhanced object literals. Write a getter (accessor) function for price
function getPrice(service) {
  var price = 50.0;

  return {
    service,

    _price: price,

    discount(rate) {
      if (rate <= 0 || rate > 1) {
        throw new Error('Invalid discount rate');
      }

      this._price *= 1 - rate;
    },

    // YOUR_GETTER_FUNCTION_HERE
    get price() {
      return this._price;
    }
  };
}

var priceDetail = getPrice('EXPRESS');
priceDetail.discount(0.2);
console.log('price:', priceDetail.price);


// 5.	Destructuring
// Given an object named person.
var person = {
  name: 'Joe',
  age: 21,
  married: true,
  hobbies: ['football', 'tennis', 'cooking'],
  contact: {
    phone: '0123456789',
    email: 'name@example.com',
  },
};
// Using ES6 destructuring, do the following:
// 5.1. Get name and age of person object.
const { name, age } = person;
console.log(name, age);

// 5.2. Create 2 variables myName and myAge which have value of name and age, respectively.
const { name: myName, age: myAge } = person;
console.log(myName, myAge);

// 5.3. Get 2 first hobbies assigned to 2 variables (e.g. hobby1 & hobby2).
const { hobbies: [hobby1, hobby2] } = person;
console.log(hobby1, hobby2);

// 5.4. Write a function to get person’s married.
var getPersonMarried = ({ married }) => married;
console.log('getPersonMarried:', getPersonMarried(person));

// 5.5. Write a function to get person’s phone and email. Default value of email is you@mail.com
var getPhoneAndEmail = ({ contact: { phone, email = "you@gmail.com" } }) => ({ phone, email });
console.log('getPhoneAndEmail:', getPhoneAndEmail(person));