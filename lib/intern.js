const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.getOfficeNumber;
    }

    getRole() {
        return 'Intern';
    }

}

const newGuy = new Intern()

module.exports = Intern;