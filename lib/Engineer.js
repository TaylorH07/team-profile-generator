// importing employee constructor
const Employee = require("./Employee")

// engineer constructor extending from employee
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        //calls employee constructor
        super(name, id, email);

        this.gitHub = gitHub;
    }

    //returns gitHub
    getGitHub() {
        return this.gitHub;
    }

    // override from employee to engineer
    getRole() {
        return "Engineer";
    }

}

//const newGuy = new Engineer()

module.exports = Engineer;