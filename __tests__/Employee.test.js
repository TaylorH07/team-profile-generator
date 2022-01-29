const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

test('creates a player obect', () => {
    const name = "Taylor";
    const id = 1;
    const email = "email@email.com";
    const newGuy = new Employee(name,id,email);
    expect(newGuy.getName()).tobe("object")
});

test('creates a player obect', () => {
    const name = "Taylor";
    const id = 1;
    const email = "email@email.com";
    const newGuy = new Employee(name,id,email);
    expect(newGuy.getName()).tobe(name)
});

test('creates a player obect', () => {
    const name = "Taylor";
    const id = 1;
    const email = "email@email.com";
    const newGuy = new Employee(name,id,email);
    expect(newGuy.getName()).tobe(id)
});

test('creates a player obect', () => {
    const name = "Taylor";
    const id = 1;
    const email = "email@email.com";
    const newGuy = new Employee(name,id,email);
    expect(newGuy.getName()).tobe("Employee")
})