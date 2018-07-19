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

function fearNotLetter(str) {
    let code = str.charCodeAt(0);
    for (let i = 0; i < str.length; i++) {
        if (code++ != str.charCodeAt(i)) return String.fromCharCode(code - 1);
    }
}

console.log(fearNotLetter("abce"));