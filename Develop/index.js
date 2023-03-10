// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions,
// usage information, contribution guidelines, and test instructions
// I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README
// and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    // add validation to force user input
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project name.");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log("Please enter a description of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log(
          "Please enter the installation instructions for your project."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is the usage information for your project?",
    name: "usage",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log("Please enter the usage information for your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What are the contribution guidelines for your project?",
    name: "contribution",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log(
          "Please enter the contribution guidelines for your project."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What are the test instructions for your project?",
    name: "testInstructions",
    validate: (aboutInput) => {
      console.log(aboutInput);
      if (aboutInput) {
        return true;
      } else {
        console.log("Please enter the test instructions for your project.");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    message: "What kind of license should your project have?",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "Eclipse Public License 2.0",
      "GNU General Public License v3.0",
      "Mozilla Public License 2.0",
      "None",
    ],
    // doesn't work
    // validate: (aboutCheckbox) => {
    //   if (aboutCheckbox) {
    //     return true;
    //   } else {
    //     console.log("Please select a license for your project.");
    //     return false;
    //   }
    // },
  },

  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log("Please enter your email address.");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username.");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize
init();
