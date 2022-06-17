const Employee = require('../roles/Employee');

test('create new employee', () => {
    const employee = new Employee('Daniel', 11, 'daniel.fu123@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

 
test('employee name', () => {
    const employee = new Employee('Daniel', 11, 'daniel.fu123@hotmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('employee ID', () => {
    const employee = new Employee('Daniel', 11, 'daniel.fu123@hotmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('employee email', () => {
    const employee = new Employee('Daniel', 11, 'daniel.fu123@hotmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('employee role', () => {
    const employee = new Employee('Daniel', 11, 'daniel.fu123@hotmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 


