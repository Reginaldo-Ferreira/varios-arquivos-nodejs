const fs = require('fs');


fs.rename('/Users/regin/Desktop/servidores com nodejs/tmp/hello', '/Users/regin/Desktop/servidores com nodejs/tmp/world', (err) => {
  if (err) throw err;
  fs.stat('/Users/regin/Desktop/servidores com nodejs/tmp/world', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});


'https://drive.google.com/open?id=1SkuQt1et9-786CvaASu_NfS4uGluN-CBnMJfrZSwHpg'


const fs = require('fs');
const fileUrl = new URL('https://drive.google.com/open?id=1SkuQt1et9-786CvaASu_NfS4uGluN-CBnMJfrZSwHpg');

fs.readFileSync(fileUrl);




fs=require('fs');
var sys = require('util'); 
var content= fs.readFileSync('/Users/regin/Desktop/servidores com nodejs/tmp/world', 'utf8');
console.log(`stats: ${JSON.stringify(content)}`);
sys.puts(JSON.parse(content));



var fs = require("fs");
var filename = "./index.html";
var buf = fs.readFileSync(filename, "utf8");



//fazendo letura de arquivo fs.readFileSyn linha por linha
const fs = require('fs');
//const filepath = new URL('file://drive.google.com/open?id=1SkuQt1et9-786CvaASu_NfS4uGluN-CBnMJfrZSwHpg');
var filepath ='/Users/regin/Desktop/servidores com nodejs/tmp/world';
var buf=fs.readFileSync(filepath);
var i=0;
console.log('Teste inicio');
buf.toString().split(/\n/).forEach(function(line){
  // do something here with each line
  console.log('-> linha:'+i+' - '+line);
  i= i+1;
});
console.log('Teste fim');
