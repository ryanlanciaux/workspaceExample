var figlet = require('figlet');

module.exports = function(callback) {
  figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

    callback(data);
  });
}
