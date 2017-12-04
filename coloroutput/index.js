var asciioutput = require('asciioutput');
var chalk = require('chalk');

function go(output) {
  console.log(chalk.red('about to output from other library'));
  console.log(chalk.red(output));
}

asciioutput(go);
