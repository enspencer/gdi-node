var fs = require('fs');
var cwd = process.cwd();
var http = require('http');

fs.readFile(cwd + '/curriculum/class1/dinosaurs.txt', function(err, data) {
  var data = data.toString().split('\n');

  http.createServer(function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(data[0]);
  }).listen(9000);

  console.log('Server running on port 9000');
});