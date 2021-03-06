//get the http module
var http = require('http');
//fs module allows us to read & write for responses
var fs = require('fs');
// creating a server using http module
var server = http.createServer(function (request, response){
	//see what URL the clients are requesting
	console.log('client request URL:', request.url);
	// this is how we do routing
	if(request.url === '/'){
		fs.readFile('index.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
			response.write(contents); //send response body
			response.end(); //finished!
		});
	}
	else if(request.url === "/dojos/new"){
		fs.readFile('dojos.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === "/ninjas"){
		fs.readFile('ninjas.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === "/stylesheets/style.css"){
		fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		})
	}
	//request didn't match anything
	else{
			 fs.readFile('fourohfour.html', 'utf8', function(errors, contents){
			 	response.writeHead(404, {'Content-Type': 'text/html'});
			 	response.write(contents);
			 	response.end();
			 })
		//response.writeHead(404);
        //response.end('File not found!!!');
	}
});
//tell your server which port to run on
var PORT = 8080;
server.listen(PORT);
//print to terminal window
console.log("Running in localhost at port: " + PORT);