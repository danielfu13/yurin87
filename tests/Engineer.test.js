const Engineer = require('../roles/Engineer');

test('add engineer', () => {
    const engineer = new Engineer('Daniel', 11, 'daniel.fu123@hotmail.com', 'danielfu13');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('engineer github ', () => {
    const engineer = new Engineer('Daniel', 11, 'daniel.fu123@hotmail.com', 'danielfu13');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('employee role', () => {
    const engineer = new Engineer('Daniel', 11, 'daniel.fu123@hotmail.com', 'danielfu13');

    expect(engineer.getRole()).toEqual("Engineer");
});