
const fs = require("fs");
const inquirer = require("inquirer");
const createreadme = require("./assets/readmecreated");


// License function and  if/else section here 
function getLicense(value) {
    if (value === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (value === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (value === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
}


function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
}


const questions = [
   //Proj_app Name
    {
        type: "input",
        name: "name",
        message: "What's the name of your project/application?",
        validate: validateInput,
    },
    //Proj_app Desc
    {
        type: "input",
        name: "descr",
        message: "Enter a description of your project/application.",
        validate: validateInput,
    },



    //install
    {
        type: "input",
        name: "install",
        message: "How to install the software, or commands for the project/application.",
        validate: validateInput,
    },

    // use
    {
        type: "input",
        name: "use",
        message: "Describe how this project/application can be used.",
        validate: validateInput,
    },

    //Contributers 
    {
        type: "input",
        name: "contribute",
        message: "How can dev's contribute?",
        validate: validateInput,
    },

    // test
    {
        type: "input",
        name: "test",
        message: "Enter testing instructions for your project/application.",
        validate: validateInput,
    },
    // licensing
    {
        type: "list",
        name: "lic",
        message: "Select a license for this project/application.",
        choices: [
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
        validate: validateInput,
    },

    

   

    // git
    {
        type: "input",
        name: "gitname",
        message: "What is your GitHub username?",
        validate: validateInput,
    },

    // email
    {
        type: "input",
        name: "email",
        message: "What is your GitHub email address that can be contacted to ask questions about this project/application?",
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Not a valid email address!";
            }
        },
    },
];


// generates readme
function writeToFile(fileName, data) {
    fs.writeFile(fileName, createreadme(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}


// function to initalize the beginning of the questions 
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicense = getLicense(data.license);
        writeToFile("./README.md", data);
    });
}

// call the function to initalize the beginning of the questions 
init();