// DONE: Include packages needed for this application
const inquirer = require('inquirer');
// DONE: brought in file system from nodejs library
const fs = require("fs");
// : DONE:  Create an array of questions for user input
const questions = [
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
        message: "Table of Contents",
        name: "contents",
    },

    {
        type: "input",
        message: "Installation",
        name: "install",
    },

    {
        type: "input",
        message: "Usage",
        name: "usage",
    },

    {
        type: "input",
        message: "License",
        name: "license",
    },

    {
        type: "input",
        message: "Contributing",
        name: "contribute",
    },

    {
        type: "input",
        message: "Tests",
        name: "test",
    },

    {
        type: "input",
        message: "Questions",
        name: "question",
    }
];

console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
