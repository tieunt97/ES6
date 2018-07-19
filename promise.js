// import fs from 'fs';

// const readFilePromise = (fileName) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, 'utf8', (err, data) => {
//             if (err) reject(err);
//             resolve(data);
//         })
//     })
// }

// readFilePromise('tieu.txt').then(
//     data1 => {
//         console.log(data1);
//         return readFilePromise('tieu1.txt') //tiep tuc doc file 2;
//     }
// ).then(
//     data2 => {
//         console.log(data2);
//     }
// ).catch(
//     err => console.log(err)
// );


// function a(x) {
//     return new Promise((resolve, reject) => {
//         if (x > 0) {
//             resolve('Greater than 0');
//         }
//         reject('Less than 0');
//     });
// }

// a(-1).then((value) => {
//     console.log(`1st then: ${value}`);
//     return value;
// }).catch((err) => {
//     console.log(`1st catch: ${err}`);
//     throw new Error(err);
// }).then((value) => {
//     console.log(`2nd then: ${value}`);
// }).catch((err) => {
//     console.log(`2nd catch: ${err.message}`);
// });


var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three');
});

var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
    reject('reject');
});
Promise.all([p1, p2, p3, p4, p5]).then(values => {
    console.log(values);
}).catch(reason => {
    console.log(reason)
});