const Intern = require("../lib/Intern");

test("Testing intern name...", () => {
    const Name = "Cory Kim";
    const intern = new Intern(Name, 1, "CoryTest@gmail.com", "CorySchool");
    expect(intern.getName()).toBe(Name);
})

test("Testing intern id...", () => {
    const Id = 1;
    const intern = new Intern("Cory Kim", Id, "CoryTest@gmail.com", "CorySchool");
    expect(intern.getId()).toBe(Id);
})

test("Testing intern email...", () => {
    const Email = "CoryTest@gmail.com";
    const intern = new Intern("Cory Kim", 1, Email, "CorySchool");
    expect(intern.getEmail()).toBe(Email);
})

test("Testing intern school...", () => {
    const School = "CorySchool";
    const intern = new Intern("Cory Kim", 1, "CoryTest@gmail.com", School);
    expect(intern.getSchool()).toBe(School);
})

test("Testing intern role...", () => {
    const Role = 'Intern';
    const intern = new Intern("Cory Kim", 1, "CoryTest@gmail.com", "CorySchool");
    expect(intern.getRole()).toBe(Role);
})