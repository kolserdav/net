import net from 'net';

let data: Buffer;

const server = net.createServer();
server.on('connection', (con) => {
  console.log('Contected', )
  const arr = new Uint8Array(2);
  arr.fill(0xC8, 0)
  arr.fill(0x0D, 1)
  con.write(arr)
  server.getConnections((e, c) => {
    console.log(1, e, c)
  })
  con.setEncoding('utf-8');
  con.on('connect', () => {
    console.log('connect')
  });
  con.on('data', (d) => {
    console.log('data', d)
    data = d;
  });
  con.on('message', () => {
    console.log('message')
  });
  con.on('error', (d) => {
    console.log('error', d)
  });
  con.on('close', (e) => {
    console.log('close', e)
    server.getConnections((e, c) => {
      console.log(1, e, c)
    })
  });
  con.on('end', () => {
    console.log('end')
  });
})


server.listen(25000, '127.0.0.1');

const client = new net.Socket({  });
client.connect(25000, '127.0.0.1', () => {
	client.write('test');
});

client.on('data', (data) => {
  client.write('dasda')
	console.log(String.fromCharCode(data[0]), String.fromCharCode(data[1]))
	client.destroy();
});

client.on('close', function() {
	console.log('Connection closed');
});
