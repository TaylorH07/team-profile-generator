// employee constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // return name from input
    getName() {
        return this.name;
    }

    //return id
    getId() {
        return this.id;
    }

    //return email
    getEmail() {
        return this.email
    }

    // return employee
    getRole() {
        return 'Employee';
    }
}

//const newGuy = new Employee('tay', 1, "email@email.com");
//console.log(newGuy.getRole)

// exporting 

module.exports = Employee;