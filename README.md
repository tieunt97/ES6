Learn ES6
1. Setup
Tạo file "package.json":

 $ npm init -y
Setup babel:

 $ npm install --save babel-cli
 $ npm install --save babel-preset-env
Chỉnh sửa file package.json:

 "scripts": {
 	"babel-node": "babel-node",
 	"test": "echo \"Error: no test specified\" && exit 1"
 },
Trong thư mục gốc, tạo file ".babelrc", copy đoạn sau:

 {
 	"presets": [
 		"env"
 	]
 }
Để chạy một file bất kì. Trong thư mục gốc, chạy lệnh:

 $ npm run babel-node "đường dẫn file cần chạy"
