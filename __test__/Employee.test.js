const Employee = require("../lib/Employee");

test("Testing employee name...", () => {
    const Name = "Cory Kim";
    const employee = new Employee(Name, 1, "CoryTest@gmail.com");
    expect(employee.getName()).toBe(Name);
})

test("Testing employee id...", () => {
    const Id = 1;
    const employee = new Employee("Cory Kim", Id, "CoryTest@gmail.com");
    expect(employee.getId()).toBe(Id);
})

test("Testing employee email...", () => {
    const Email = "CoryTest@gmail.com";
    const employee = new Employee("Cory Kim", 1, Email);
    expect(employee.getEmail()).toBe(Email);
})

test("Testing role...", () => {
    const Role = 'Employee';
    const employee = new Employee("Cory Kim", 1, "CoryTest@gmail.com");
    expect(employee.getRole()).toBe(Role);
})