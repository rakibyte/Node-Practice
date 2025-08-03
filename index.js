/* import chalk from 'chalk';

console.log(chalk.blue('Hello, World!'));
console.log(chalk.green('This is a green message!'));
console.log(chalk.red('This is a red message!'));

*/
const fs = require('fs');
const { Command } = require('commander');
const program = new Command();


program
    .name('counter')
    .description('CLI to do file based operations')
    .version('1.0.0');

program.command('count')
    .description('Count the number of lines in a file')
    .argument('<fileName>', 'File to count lines in')
    .action((fileName) => {
        main(fileName);
    });



function main(fileName) {

    fs.readFile(fileName, 'utf8', function(err, data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === " ") {
                total++;
            }
        }
        console.log(total+1);
    });
}
program.parse();
// This code reads a file and counts the number of lines in it.