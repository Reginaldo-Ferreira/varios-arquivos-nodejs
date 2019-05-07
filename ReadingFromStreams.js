var fs = require('fs');
var zlib = require('zlib');//compactar arquivo...
var readableStream = fs.createReadStream('users.json');
var data = '';
var i = 0;
readableStream.on('data', function(chunk) {
	
    data+=chunk ;
	i++;
	//console.log(i);
});

readableStream.on('end', function() {
    console.log(data);
});


//method mais moderno
fs.createReadStream('users.json')
  .pipe(zlib.createGzip())//zipa o arquivo
  .pipe(fs.createWriteStream('users.txt.gz'));