
// node modules
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

//team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")


//add dist outputs and path


//team array
const team = []

// add manager prompts
const createManager = () => {
    console.log('Answer the prompts to enter manager information');
    
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "I need to speak to your manager. What is your manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter managers name';
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "What is your manager's ID badge number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter managers badge number.';
                }
            } 
        },
        
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter managers email.';
                }
            } 
        },
        
        {
            type: 'input',
            name: 'office Number',
            message: "What is your manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    return 'Please enter managers office number.';
                }
            } 
        },   
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);

    })
};

// add engineer prompts
function createEngineer() {
    console.log('Answer the prompts to enter engineer information');
    
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: " What is your engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter engineer's name";
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "What is your engineers's ID badge number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return "Please enter engineer's badge number.";
                }
            } 
        },
        
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return "Please enter engineer's email.";
                }
            } 
        },
        
        {
            type: 'input',
            name: 'gitHub',
            message: "What is your engineer's gitHub?",
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    return "Please enter Engineer's gitHub.";
                }
            } 
        },   
    ]);
};

// add intern prompts
function createIntern() {
    console.log('Answer the prompts to enter intern information');
    
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is your intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter intern's name.";
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "What is your intern's ID badge number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    "Please enter intern's badge number.";
                }
            } 
        },
        
        {
            type: 'input',
            name: 'email',
            message: "What is your intern's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return "Please enter intern's email.";
                }
            } 
        },
        
        {
            type: 'input',
            name: 'schoolName',
            message: "What is your intern's school name?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    return "Please enter intern's school.";
                }
            } 
        },   
    ]);
};

