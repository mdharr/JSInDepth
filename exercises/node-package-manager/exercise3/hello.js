import { Command } from "commander"
const program = new Command()

program
  .option('-n, --name', 'your name')
  .argument('<name>')
  .action((name) => {
    console.log(`Hello ${name}`);
});
program.parse()