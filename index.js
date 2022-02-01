//link to page creation
const generateHTML= require('./src/generateHTML')

// node modules
const fs = require("fs");
const inquirer = require("inquirer");
//const path = require("path");

//team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//team array
const createTeam = []

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
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }   
    ])
    .then(answers => {
        console.log(answers);
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber)

            createTeam.push(manager);
            addEmployee();

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
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        },   
    ])
    .then(answers => {
        console.log(answers);
        const manager = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber)

            createTeam.push(manager);
            addEmployee();

    });
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
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }   
    ])
    .then(answers => {
        console.log(answers);
        const manager = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber)

            createTeam.push(manager);
            addEmployee();

    });
};

const createEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'newEmployee',
            message: 'Which type of employee will be joining the team?',
            choices: ['Manager', 'Engineer', 'Intern', 'finished creating employee profiles']
        }
    ])
    .then(choice => {
        switch (choice.newEmployee) {
            case 'Manager':
                createManager();
                break;
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            default:
                writeFile()
        }
    })
}

// write file to generate HTML page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        //will err if error
        if (err) {
            console.log(err);
            return;
        //when profile has been created 
        } else {
            console.log('Your team has been created! :)')
        }
    })
};

createManager()
    .then(createTeam => {
        return generateHTML(createTeam);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });