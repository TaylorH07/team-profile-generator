// imports employee
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //return school from input
    getSchool() {
        return this.school;
    }

    //return intern role
    getRole() {
        return "Intern";
    }

}

//const newGuy = new Intern()

// exports
module.exports = Intern;