var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){

  console.log('client request URL:', request.url);

  // route
  if(request.url === '/'){

    // / => index.html
    fs.readFile('index.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });

  }else if(request.url === '/ninjas'){

    // /ninjas => ninjas.html
    fs.readFile('ninjas.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }else if(request.url === '/dojos/new'){

    // /dojos/new => dojos.html
    fs.readFile('dojos.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }else{

    // other route => 404
    response.writeHead(404);
    response.end('File not found____');
  }

});

// listening port#
server.listen(6789);

// print to terminal window
console.log('running in localhost at port 6789');
