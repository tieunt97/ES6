// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     let newArr = [];
//     for (let i = 0; i < arr.length; i += size) {
//         newArr.push(arr.slice(i, size + i));
//     }
//     return newArr;
// }

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));


// const arr = [1, 2, 3, 4, 5];
// const iterator = arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// let arr = [1, 2, 0, false, "ate", "", undefined, NaN];
// function bouncer(arr){
//     return arr.filter((e) => !(e == 0 || e == "" || e == false || e == undefined || (isNaN(e) && typeof e == "number")));
// }

// console.log(bouncer(arr));

// function titleCase(str) {
//     str = str.toLowerCase();
//     let newStr = str[0].toUpperCase();
//     for (let i = 1; i < str.length; i++) {
//         if (str[i - 1] == " ") {
//             newStr += str[i].toUpperCase();
//         } else {
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }

// console.log(titleCase("I'm a little tea pot"));

// function Bird(name) {
//     this.name = name; //own property
// }

// Bird.prototype.numLegs = 2; // prototype property

// let duck = new Bird("Donald");
// console.log(duck.name, duck.numLegs);

// function* idMaker() {
//     var index = 0;
//     while (true)
//         yield index++;
// }

// var gen = idMaker();

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3

// let idMaker = function(arr){
//     let index = 0;
//     return {
//         next: function(){
//             if(index < arr.length){
//                 return arr[index++];
//             }
//         }
//     }
// }

// let iterator = idMaker([1, 2, 3, 4, 5]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function makeIterator(array) {
//     var nextIndex = 0;
    
//     return {
//        next: function() {
//            return nextIndex < array.length ?
//                {value: array[nextIndex++], done: false} :
//                {done: true};
//        }
//     };
// }

// var it = makeIterator(['yo', 'ya']);
// console.log(it.next().value); // 'yo'
// console.log(it.next().value); // 'ya'
// console.log(it.next().done);  // true

// let str1 = "Hello";
// let str2 = "World!";
// console.log(str1.concat(str2));


// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));

var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
    newArray.push(callback);
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s);