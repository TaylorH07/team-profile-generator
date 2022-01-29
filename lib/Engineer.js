const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.getOfficeNumber;
    }

}

const newGuy = new Engineer()

module.exports = Engineer;