// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const manHTML = require("./src/manHTML.js");
const engHTML = require("./src/engHTML.js");
const intHTML = require("./src/intHTML.js");
const baseHTML = require("./src/baseHTML.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
let employeeInfo = '';


// TODO: Create an array of questions to collect user input data
const managerquestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "manager"
    },{
        type: "input",
        message: "What is the employee ID?",
        name: "id"

    },{
        type: "input",
        message: "What is the email address?",
        name: "email"
    },{
        type: "input",
        message: "What is the office number?",
        name: "office"
    },{
        type: "list",
        name: "option",
        message: "Please select which option to add.",
        choices : [
            "engineer",
            "intern" ,
            "done"
        ],
    }
];
const engineerquestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineer"
    },{
        type: "input",
        message: "What is the employee ID?",
        name: "engId"

    },{
        type: "input",
        message: "What is the email address?",
        name: "engEmail"
    },{
        type: "input",
        message: "What is the GitHub username?",
        name: "engGithub"
    },{
        type: "list",
        name: "option",
        message: "Please select which option to add.",
        choices : [
            "engineer",
            "intern" ,
            "done"
        ],
    }
];

// Questions about intern
const internquestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "intern"
    },{
        type: "input",
        message: "What is the employee ID?",
        name: "intId"

    },{
        type: "input",
        message: "What is the email address?",
        name: "intEmail"
    },{
        type: "input",
        message: "What is the name of school?",
        name: "intSchool"
    },{
        type: "list",
        name: "option",
        message: "Please select which option to add.",
        choices : [
            "engineer",
            "intern" ,
            "done"
        ],
    }
];

// Write new html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if(err){
            console.log(err);
        }
    })
};

// Give options for adding new employee or finishing the application

function recoption(response) {
    if (response.option == "engineer"){
        return engquestions();
    } else if (response.option == "intern"){
        return intquestions();
    } else if (response.option == "done"){
        let finalstr = baseHTML(employeeInfo);
        writeToFile("./index.html", finalstr);
        return response
    }
}

// Add information of new engineer

function engquestions() {
    inquirer.prompt(engineerquestions).then(
        function(response){
            const engineer = new Engineer(response.engineer, response.engId, response.engEmail, response.engGithub);
            let engstr = engHTML(engineer);
            employeeInfo = employeeInfo + engstr;
            recoption(response);
        }  
    )
}

// Add information of new intern
function intquestions() {
    inquirer.prompt(internquestions).then(
        function(response){
            const intern = new Intern(response.intern, response.intId, response.intEmail, response.intSchool);
            let intstr = intHTML(intern);
            employeeInfo = employeeInfo + intstr;
            recoption(response);
        }
    )
}
    
// Create a function to initialize app
function init() {
    inquirer.prompt(managerquestions).then(
        function(response){
            const manager = new Manager(response.manager, response.id, response.email, response.office);
            var manstr = manHTML(manager);
            employeeInfo = employeeInfo + manstr;
            recoption(response);
        }
    )
};


    
// Function call to initialize app
init();