// 1.	Default + rest + spread
// 1.1. Write a function which returns an array of characters of a string.
function getArrCharacterStr(str) {
    return [...str];
}
console.log(getArrCharacterStr("Hello world!"));

// 1.2. Given 2 arrays:
var array1 = [1, 2, 3];
var randomValue = 'something';
var array2 = [4, 5, 6];

// Write a function which returns [1, 2, 3, 'something', 4, 5, 6].
function getArr(array1, array2, randomValue) {
    return [...array1, randomValue, ...array2];
}
console.log(getArr(array1, array2, randomValue));

// 1.3. Write a function which returns sum of its arguments (number only).
function getSum(...arr) {
    return arr.reduce((s, e) => (s + e), 0);
}
console.log(getSum(1, 2, 3, 4, 5));

// 1.4. Write a function which returns sum of its arguments except for the first one (number only).
function getSumExceptFirstOne(a, ...arr) {
    return arr.reduce((s, e) => (s + e), 0);
}
console.log(getSumExceptFirstOne(1, 2, 3, 4, 5));

// 1.5. Write a function which returns sum of its arguments except for the last one (number only).
function getSumExceptLastOne(...arr) {
    arr.pop();
    return arr.reduce((s, e) => (s + e), 0);
}
console.log(getSumExceptLastOne(1, 2, 3, 4, 5));

// 1.6. Write a function which returns sum of its first 3 arguments (number only).
function getSumFirst3Arg(...arr) {
    return arr[0] + arr[1] + arr[2];
}
console.log(getSumFirst3Arg(1, 2, 3, 4, 5));


// 3.	Iterators + for .. of
// 3.1. Create a countdown iterator that counts from 9 to 1. Use iterator, do not use generator.

let getCountdownIterator = {
    [Symbol.iterator]() {
        let cur = 9;
        return {
            next() {
                return cur > 0 ? { value: cur--, done: false } : { done: true };
            },
        };
    },
};

console.log([...getCountdownIterator]);
// > [9, 8, 7, 6, 5, 4, 3, 2, 1]

// 3.2. Create an infinite sequence that generates the next value of the Fibonacci sequence.
// The Fibonacci sequence is defined as follows:
// fib( 0 ) = 0
// fib( 1 ) = 1
// for n > 1, fib( n ) = fib( n - 1 ) + fib( n - 2 )
let fib = {
    [Symbol.iterator]() {
        let fn1 = 0;
        let fn2 = 1;
        return {
            next() {
                var current = fn1;
                fn1 = fn2;
                fn2 = current + fn1;
                return { value: current, done: false }
            }
        }
    }
}

let demo = fib[Symbol.iterator]();
console.log(demo.next());
console.log(demo.next());

// 4.	Generators
// 4.1. Create a countdown iterator that counts from 9 to 1. Use generator functions!
let getCountdownIterator1 = function* () {
    let i = 9;
    while (i > 0) {
        yield i--;
    }
}

console.log([...getCountdownIterator1()]);
// > [9, 8, 7, 6, 5, 4, 3, 2, 1]

// 4.2. Use generator, create an infinite sequence that generates the next value of the Fibonacci sequence.
// The Fibonacci sequence is defined as follows:
let fib1 = function* () {
    let fn1 = 0;
    let fn2 = 1;
    while (true) {
        let current = fn1;
        fn1 = fn2;
        fn2 = fn1 + current;
        yield current;
    }
}
var getFibonacci = fib1();
console.log(getFibonacci.next());
console.log(getFibonacci.next());
console.log(getFibonacci.next());
console.log(getFibonacci.next());

// 4.3. Create a lazy filter generator function. Filter the elements of the Fibonacci sequence 
// by keeping the even values only.
function* filter(iterable, filterFunction) {
    for (let element of iterable) {
        if (filterFunction(element)) yield element;
    }
}

let evenFib = filter(getFibonacci, (e) => e % 2 == 0);
console.log(evenFib.next());
