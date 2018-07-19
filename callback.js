import fs from 'fs';

// fs.readFile('config1.json', (err, data) => {
//     if(err) console.log(err);
//     data = JSON.parse(data);
//     fs.readFile('config2.json', (err1, data1) => {
//         if(err1) console.log(err1);
//         data1 = JSON.parse(data1);
//         for(let value of data1){
//             if(value.env === data.env){
//                 data.port = value.port;
//             }
//         }
//         console.log(data);
//         fs.writeFile('config3.json', JSON.stringify(data1), function(err){
//             if(err) throw err;
//             console.log('Saved!');
//         });
//     });
// });

let readFilePromise = fileName => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

let writeFilePromise = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, JSON.stringify(data), function (err) {
            if (err) reject(err);
            resolve("Saved!");
        });
    })
}

let createNewFile = (fileName1, fileName2, newFile) => {
    let data;
    readFilePromise(fileName1).then(
        data1 => {
            data = JSON.parse(data1);
            return readFilePromise(fileName2);
        }
    ).then(
        data2 => {
            data2 = JSON.parse(data2);
            for (let value of data2) {
                if (value.env === data.env) {
                    data.port = value.port;
                    return writeFilePromise(newFile, data);
                }
            }
        }
    ).then(
        data => {
            console.log(data);
        }
    ).catch(
        err => {
            console.log(err);
        }
    );
}

createNewFile('config1.json', 'config2.json', 'config3.json');