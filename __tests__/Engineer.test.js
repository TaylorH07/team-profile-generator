// using engineer costructor
const Engineer = require('../lib/Engineer');

// creating engineer object
test('creates Engineer object', () => {
    const engineer = new Engineer('Taylor', 12345, 'email@email.com', 'TaylorH07');

    expect(engineer.gitHub).toEqual(expect.any(String));
});

// gets github from getgitHub
test('gets engineer from gitHub value', () => {
    const engineer = new Engineer('Taylor', 12345, 'email@email.com', 'TaylorH07');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

//get role from get role
test('gets role of engineer', () => {
    const engineer = new Engineer('Taylor', 12345, 'email@email.com', 'TaylorH07');
    
    expect(engineer.getRole()).toEqual("Engineer");
});