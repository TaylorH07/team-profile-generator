// using employee constructor
const Employee = require("../lib/Employee");

// creates employee object
test('creates a employee object', () => {
    const employee = new Employee('Taylor', 12345, 'email@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

//gets name from get name
test('get employee name', () => {
    const employee = new Employee('Taylor', 12345, 'email@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets id from getid
test('get employee ID', () => {
    const employee = new Employee('Taylor', 12345, 'email@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//gets email from getEmail
test('get employee email', () => {
    const employee = new Employee('Taylor', 12345, 'email@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//gets role from getrole
test('gets role of employee', () => {
    const employee = new Employee('Taylor', 12345, 'email@email.com');

    expect(employee.getRole()).toEqual("Employee");
});