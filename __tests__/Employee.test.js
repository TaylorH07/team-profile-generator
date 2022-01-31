
const Employee = require("../lib/Employee");

test('creates a player obect', () => {
    const name = "Taylor";
    const id = 1;
    const email = "email@email.com";
    const newGuy = new Employee(name,id,email);
    expect(newGuy.getName()).toBe("object")
});

test('creates a player obect', () => {
    const name = "Taylor";
    const id = 1;
    const email = "email@email.com";
    const newGuy = new Employee(name,id,email);
    expect(newGuy.getName()).toBe(name)
});

test('creates a player obect', () => {
    const name = "Taylor";
    const id = 1;
    const email = "email@email.com";
    const newGuy = new Employee(name,id,email);
    expect(newGuy.getName()).toBe(id)
});

test('creates a player obect', () => {
    const name = "Taylor";
    const id = 1;
    const email = "email@email.com";
    const newGuy = new Employee(name,id,email);
    expect(newGuy.getName()).toBe("Employee")
})