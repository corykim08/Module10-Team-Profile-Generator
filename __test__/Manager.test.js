const Manager = require("../lib/Manager");

test("Testing manager name...", () => {
    const Name = "Cory Kim";
    const manager = new Manager(Name, 1, "CoryTest@gmail.com", "Office");
    expect(manager.getName()).toBe(Name);
})

test("Testing manager id...", () => {
    const Id = 1;
    const manager = new Manager("Cory Kim", Id, "CoryTest@gmail.com", "Office");
    expect(manager.getId()).toBe(Id);
})

test("Testing manager email...", () => {
    const Email = "CoryTest@gmail.com";
    const manager = new Manager("Cory Kim", 1, Email, "Office");
    expect(manager.getEmail()).toBe(Email);
})

test("Testing manager office number...", () => {
    const Office = "Office";
    const manager = new Manager("Cory Kim", 1, "CoryTest@gmail.com", Office);
    expect(manager.getOfficeNumber()).toBe(Office);
})

test("Testing maanger role...", () => {
    const Role = 'Manager';
    const manager = new Manager("Cory Kim", 1, "CoryTest@gmail.com", "Office");
    expect(manager.getRole()).toBe(Role);
})