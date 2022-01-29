class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee';
    }
}

const newGuy = new Employee('tay', 1, "email@email.com");
console.log(newGuy.getRole)

module.exports = Employee;