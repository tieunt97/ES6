let str = "AZ";
console.log(str.charCodeAt(0), str.charCodeAt(1));
// function spinalCase(str) {
//     // "It's such a fine line between stupid, and clever."
//     // --David St. Hubbins
//     let newStr = [...str].reduce((s, e) => {
//         if (e.match(/[A-Z]/)) {
//             return s + " " + e;
//         } else {
//             return s + e;
//         }
//     }, "");
//     return newStr.trim().toLowerCase().split(/[\s,\._]+/).join("-");
// }

// console.log(spinalCase('thisIsSpinalTap'));


// function translatePigLatin(str) {
//     let regex = /^[^euoai]+/;
//     let ft = str.match(regex);
//     if(ft != null){
//         return str = str.slice(ft[0].length) + ft[0] + "ay";
//     }else{
//         return str = str + "way";
//     }
// }

// console.log(translatePigLatin("california"));

// function myReplace(str, before, after) {
//     if (before.charCodeAt(0) > 64 && before.charCodeAt(0) < 91) {
//         after = after.toUpperCase()[0] + after.substring(1).toLowerCase();
//     }
//     return str.replace(before, after);
// }

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

// function fearNotLetter(str) {
//     let code = str.charCodeAt(0);
//     for (let i = 0; i < str.length; i++) {
//         if (code++ != str.charCodeAt(i)) return String.fromCharCode(code - 1);
//     }
// }

// console.log(fearNotLetter("abce"));

// function uniteUnique(...arr) {
//     let arr1 = arr.filter(e => {
//         for (let i = 0; i < e.length; i++) {
//             if (typeof e[i] === "object") return false;
//         }
//         return true;
//     });
//     let arr2 = arr.filter(e => {
//         for (let i = 0; i < e.length; i++) {
//             if (typeof e[i] === "object")
//                 return true;
//         }
//         return false;
//     });
//     if (arr1.length > 0) {
//         arr = arr1[0];
//         for (let i = 1; i < arr1.length; i++) {
//             arr = arr.concat(arr1[i].filter(e  => {
//                 for(let j = 0; j < arr.length; j++){
//                     if(e === arr[j]) return false;
//                 }
//                 return true;
//             }));
//         }
//     }
//     if(arr2.length == 0){
//         return arr;
//     }else{
//         arr2 = arr2.sort((a, b) => a[0] - b[0]);
//         for(let i = 0; i < arr2.length; i++){
//             arr.push(arr2[i][1]);
//         }
//         return arr;
//     }
// }
// console.log(uniteUnique([1, 3, 2], [2, [4]], [1, [5]]));

function sumFibs(num) {
    let fn1 = 1, fn2 = 1;
    let sum = 0;
    while (fn1 <= num) {
        if (fn1 % 2 == 1) {
            sum += fn1;
        }
        [fn1, fn2] = [fn2, fn1 + fn2];
    }
    return sum;
}

console.log(sumFibs(4));