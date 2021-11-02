// DONE: Include packages needed for this application
const inquirer = require('inquirer');
// DONE: brought in file system from nodejs library
const fs = require("fs");
// DONE: create a link to the markdown file
const generateMarkdown = require("./generateMarkdown");

console.log("Welcome to my README generator");

// : DONE:  Create an array of questions for user input
const questions =
    [
        {
            type: "input",
            message: "Title of README",
            name: "title",
        },

        {
            type: "input",
            message: "Description of Project",
            name: "description",
        },

        {
            type: "input",
            message: "Installation Dependencies",
            name: "installation",
        },

        {
            type: "input",
            message: "Usage",
            name: "usage",
        },

        {
            type: "list",
            message: "Project License",
            name: "license",
            choices: ["MIT", "Apache 2.0", "GPL"]
        },

        {
            type: "input",
            message: "Contributing",
            name: "contribution",
        },

        {
            type: "input",
            message: "Test command",
            name: "test",
        },

        {
            type: "input",
            message: "Questions?",
            name: "question",
        },

        {
            type: "input",
            message: "GitHub Username",
            name: "github",
        },

        {
            type: "input",
            message: "Email",
            name: "email",
        }


    ];

// console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log ("Success!");
    })
 }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data)
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
