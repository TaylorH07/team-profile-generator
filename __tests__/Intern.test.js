// using intern costructor
const Intern = require('../lib/Intern');

// creating Intern object
test('creates Intern object', () => {
    const intern = new Intern('Taylor', 12345, 'email@email.com', 'SMU');

    expect(intern.school).toEqual(expect.any(String));
});

// gets school from getschool
test('gets Intern school value', () => {
    const intern = new Intern('Taylor', 12345, 'email@email.com', 'SMU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//get role from get role
test('gets role of Intern', () => {
const intern = new Intern('Taylor', 12345, 'email@email.com', 'SMU');

expect(intern.getRole()).toEqual("Intern");
});