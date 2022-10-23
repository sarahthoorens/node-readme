// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')

// Function to initialize app
function init() {
inquirer
  .prompt ([
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
},
{
    type: 'input',
    message: 'Enter deployed project URL.',
    name: 'projectUrl'
},
{
    type: 'input',
    message: 'Date of deployment?',
    name: 'date'
},
{
    type: 'input',
    message: 'Which technologies were used for this project?',
    name: 'tech'
},
{
    type: 'input',
    message: 'Explain the goal of this project?',
    name: 'goal',
},
{
    type: 'input',
    message: 'Describe the project.',
    name: 'description',
},
{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
},
{
    type: 'input',
    message: 'Provide instructions for how to use your program.',
    name: 'usage'
},

{
    type: 'input',
    message: 'Describe challenges encountered during the project.',
    name: 'challenges',
},
{
    type: 'input', 
    message: 'How can other developers contribute to this project?',
    name: 'contribute',
},

{
    type: 'input',
    message: 'Enter any tests you may have written for this program.',
    name: 'tests'
},
{
    type: 'checkbox',
    message: 'Choose project license.',
    name: 'license',
    choices: ['MIT License', 'Mozilla Public License 2.0', 'Open Database License (ODbL)', 'Apache 2.0 License']
},
{
    type: 'input',
    message: 'Enter your contact email for questions users may have about your project.',
    name: 'email'
},
{
    type: 'input',
    message: 'Enter your github username.',
    name: 'username',
}

  ])

// Function to write README file
.then((response) => 
fs.writeFile('README.md', markdown(response), 'utf-8', (err) =>
err ? console.error(err) : console.log('Populating your README.'))
);
}

// Function call to initialize app
init();
