import { Command } from 'commander/esm.mjs';
import { customerSave, customerFind } from './index.js';
import pkg from 'inquirer';
const {prompt} = pkg;


const program = new Command();
program.version('0.0.1').description('New Command by Juan Ramirez');
const customerQuestions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Customer First Name'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Customer Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email'
    }
];

program
    .command('add <firstName> <lastName> <phone> <email>')
    .alias('a')
    .description('Add new Customer')
    .action((firstName, lastName, phone, email) => {
        customerSave({firstName, lastName, phone, email})
    });

program
    .command('add-better')
    .alias('ab')
    .description('Add new Customer')
    .action(() => {
        prompt(customerQuestions).then(answers => customerSave(answers));
    });

program
    .command('find <name>')
    .alias('f')
    .description('Find a Customer')
    .action((name) => {
        console.log(name);
        customerFind(name);
    });

program.parse(process.argv);