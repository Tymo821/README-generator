 // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?"
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use of this webpage.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license. This lets other developers know what restrictions are on your project.',
        choices: ['None', 'Apache2.0', 'BSD', 'MIT', 'GNUGeneralPublicv3.0']
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Provide this project's contributors."
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on testing.'
    },
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'Enter GitHub username:'
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter email:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!'));
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            (writeToFile("README.md", generateMarkdown(answers)));
        })
        .catch((error) => {
            console.log(error);
        })
}

// Function call to initialize app
init();