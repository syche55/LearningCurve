touch index.js (创建新index.js文件）
node index.js (在console里打开index.js)
node （直接输一些可执行语句）
ctrl + c / clear

const a = 2;  之后不能再给a赋其他值

//jshint esversion:6
FILE SYSTEM:
#require file systems module, encope it in our project
const fs = require("fs"); 
fs.copyFileSync(src, dest[,flags])
fs.copyFileSync("file1.txt", "file2.txt");

npm:
npm init


sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config

sudo npm install express body-parser ejs

npm install superheroes (module)
在index.js里:
var superheroes = require("superheroes");
var mySuperheroName = superheroes.random();
