/* const {Duplex} = require('stream')


const duplexStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString()+ " - ")
        callback()
    },
    read(tamanho) {
        this.push(String.fromCharCode(this.charAtual++))
        if(this.charAtual > 90) this.push(null)
    }
})

duplexStream.charAtual = 80 */
//process.stdin.pipe(duplexStream).pipe(process.stdout);


//recupera entrada do teclado..
/* process.stdin.setEncoding('utf8');

process.stdin.on('readable', ()=> {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('data: ' + chunk);
  }
});

process.stdin.on('end', ()=>
  process.stdout.write('end')
); */



//finalizar terminal
/* process.on('exit', (code)=> {

    console.log('start->>>');
    // do *NOT* do this
    setTimeout(()=> {
      console.log('This will not run');
    }, 0);
    console.log('About to exit with code:', code);
  }); */

  const http = require('http');

const server = http.createServer((req, res) => {
  // `req` is an http.IncomingMessage, which is a Readable Stream
  // `res` is an http.ServerResponse, which is a Writable Stream

  let body = '';
  // Get the data as utf8 strings.
  // If an encoding is not set, Buffer objects will be received.
  req.setEncoding('utf8');

  // Readable streams emit 'data' events once a listener is added
  req.on('data', (chunk) => {
    body += chunk;
  });

  // The 'end' event indicates that the entire body has been received
  req.on('end', () => {
     // console.log("pedido: "+body);
    try {
      const data = JSON.parse(body);
      // write back something interesting to the user:
      res.write(typeof data);
      res.end();
    } catch (er) {
      // uh oh! bad json!
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});

server.listen(1337);

// $ curl localhost:1337 -d "{}"
// object
// $ curl localhost:1337 -d "\"foo\""
// string
// $ curl localhost:1337 -d "not json"
// error: Unexpected token o in JSON at position 1