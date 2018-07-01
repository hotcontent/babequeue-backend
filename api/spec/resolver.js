var SwaggerParser = require('swagger-parser');
var fs = require('fs');

SwaggerParser.validate('./src/open_api.yaml', function(err, api) {
  if (err) {
    console.error(err);
  }
  else {
    fs.writeFileSync('./dist/swagger.yaml', JSON.stringify(api).toString())
  }
});