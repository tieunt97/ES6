Learn ES6
1. Setup
Tạo file "package.json":

 $ npm init -y
2. Setup babel:

 $ npm install --save babel-cli
 $ npm install --save babel-preset-env
3. Chỉnh sửa file package.json:

 "scripts": {
 	"babel-node": "babel-node",
 	"test": "echo \"Error: no test specified\" && exit 1"
 },
4. Trong thư mục gốc, tạo file ".babelrc", copy đoạn sau:

 {
 	"presets": [
 		"env"
 	]
 }
5. Để chạy một file bất kì. Trong thư mục gốc, chạy lệnh:

 $ npm run babel-node "đường dẫn file cần chạy"
