#!/usr/bin/env node
//Cria uma stream de vídeo no nodejs plano (sem express ou outros módulos)
var http = require('http'),
    fs = require('fs'),
    util = require('util');
//'../Downloads/Homem-Aranha - De Volta ao Lar 2017 [BluRay] (1080p) DUBLADO/Homem.Aranha.De.Volta.ao.Lar.2017.1080p.BluRay.6CH.x264.DUBLADO-WWW.BLUDV.COM.mp4'
http.createServer(function (req, res) {
  var path = 'video/VID_20171006_154140.mp4';
  var stat = fs.statSync(path);
  var total = stat.size;
  console.log("REQUEST: "+JSON.stringify(req.headers));
  if (req.headers['range']) {
    var range = req.headers.range;
    var parts = range.replace(/bytes=/, "").split("-");
    var partialstart = parts[0];
    var partialend = parts[1];

    var start = parseInt(partialstart, 10);
    var end = partialend ? parseInt(partialend, 10) : total-1;
    var chunksize = (end-start)+1;
    console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);

    var file = fs.createReadStream(path, {start: start, end: end});
    res.writeHead(206, { 'Content-Range': 'bytes ' + start + '-' + 
        end + '/' + total, 'Accept-Ranges': 'bytes', 
        'Content-Length': chunksize, 'Content-Type': 'video/mp4' });
    file.pipe(res);
  } else {
    console.log('ALL: ' + total);
    res.writeHead(200, { 'Content-Length': total, 
        'Content-Type': 'video/mp4' });
    fs.createReadStream(path).pipe(res);
  }
}).listen(8700, '192.168.25.9');//127.0.0.1
console.log('Servidor rodando em http://127.0.0.1:8700/');