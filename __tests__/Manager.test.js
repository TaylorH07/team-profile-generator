// using manager costructor
const Manager = require('../lib/Manager');

// creating manager object
test('creates Manager object', () => {
    const manager = new Manager('Taylor', 12345, 'email@email.com', 'Office Number: 7');

    expect(manager.officeNumber).toEqual(expect.any(String));
});

// gets officenumber from getoffice number
test('gets manager office number', () => {
    const manager = new Manager('Taylor', 12345, 'email@email.com', 'Office Number: 7');

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});

//get role from get role
test('gets role of Intern', () => {
const manager = new Manager('Taylor', 12345, 'email@email.com', 'Office Number: 7');

expect(manager.getRole()).toEqual("Manager");
});