node index.js (在console里打开index.js)
node
ctrl + c / clear

const a = 2;  之后不能再给a赋其他值

//jshint esversion:6
FILE SYSTEM:
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
