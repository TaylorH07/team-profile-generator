//link to page creation
const generateHTML= require('./src/generateHTML')

//team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// node modules
const fs = require("fs");
const inquirer = require("inquirer");
//const path = require("path");

//team array
const createTeam = [];

// add manager prompts
const createManager = () => {
    console.log('Answer the prompts to enter manager information');
    
    return inquirer.prompt ([
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
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter valid email address')
                    return false; 
                }
            }
        },
        
        {
            type: 'input',
            name: 'officeNumber',
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
            name: 'confirmCreation',
            message: 'Would you like to add more members to the team?',
            default: false
        }   
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        createTeam.push(manager); 
        console.log(manager); 
    })
};

const createEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the role of your employee",
            choices: ['Engineer', 'Intern', 'Manager']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter your employee's name :)");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter your employee's ID badge number.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter badge number.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter valid email address')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Please enter your engineer's gitHub username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter engineer's gitHub username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter school name")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCreation',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, gitHub, school, confirmCreation } = employeeData; 
        let employee; 
        
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, gitHub);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        createTeam.push(employee); 

        if (confirmCreation) {
            return createEmployee(createTeam); 
        } else {
            return createTeam;
        }
    })

};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Congratulations! You have successfully created your DREAM TEAM!")
        }
    })
}; 

createManager()
  .then(createEmployee)
  .then(createTeam => {
    return generateHTML(createTeam);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });