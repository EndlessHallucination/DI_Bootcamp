const chalk = require('chalk').default;

function colorfulMessage() {
    console.log(
        chalk.blue('This is blue ') +
        chalk.green('and this is green!')
    );
}

module.exports = colorfulMessage;