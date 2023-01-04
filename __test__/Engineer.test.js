const Engineer = require("../lib/Engineer");

test("Testing engineer name...", () => {
    const Name = "Cory Kim";
    const engineer = new Engineer(Name, 1, "CoryTest@gmail.com", "CoryGithub");
    expect(engineer.getName()).toBe(Name);
})

test("Testing engineer id...", () => {
    const Id = 1;
    const engineer = new Engineer("Cory Kim", Id, "CoryTest@gmail.com", "CoryGithub");
    expect(engineer.getId()).toBe(Id);
})

test("Testing engineer email...", () => {
    const Email = "CoryTest@gmail.com";
    const engineer = new Engineer("Cory Kim", 1, Email, "CoryGithub");
    expect(engineer.getEmail()).toBe(Email);
})

test("Testing engineer github...", () => {
    const Github = "CoryGithub";
    const engineer = new Engineer("Cory Kim", 1, "CoryTest@gmail.com", Github);
    expect(engineer.getGithub()).toBe(Github);
})

test("Testing enginer role...", () => {
    const Role = 'Engineer';
    const engineer = new Engineer("Cory Kim", 1, "CoryTest@gmail.com", "CoryGithub");
    expect(engineer.getRole()).toBe(Role);
})