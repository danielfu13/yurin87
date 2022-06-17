const Intern = require('../roles/Intern');

test('add intern', () => {
    const intern = new Intern('Daniel', 11, 'daniel.fu123@hotmail.com', 'UofT');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('intern school', () => {
    const intern = new Intern('Daniel', 11, 'daniel.fu123@hotmail.com', 'UofT');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('employee role', () => {
    const intern = new Intern('Daniel', 11, 'daniel.fu123@hotmail.com', 'UofT');

    expect(intern.getRole()).toEqual("Intern");
}); 