const Manager = require('../roles/Manager');

test('add manager', () => {
    const manager = new Manager('Daniel', 11, 'daniel.fu123@hotmail.com', 17);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Daniel', 11, 'daniel.fu123@hotmail.com', 17);

    expect(manager.getRole()).toEqual("Manager");
}); 