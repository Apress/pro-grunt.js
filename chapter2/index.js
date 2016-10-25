var request = require('request');

request.get('http://www.guardian.co.uk', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});