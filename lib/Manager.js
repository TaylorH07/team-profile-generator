const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //calls employee constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // overrides employee to return manager
    getRole() {
        return "Manager";
    }

}

module.exports = Manager;